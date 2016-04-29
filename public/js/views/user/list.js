/**
 * Created by Пользователь on 28.04.2016.
 */
define([
    'backbone',
    'underscore',
    'text!/templates/user/list.html'

], function (Backbone, _, list) {

    var View = Backbone.View.extend({

        el: '#container',

        template: _.template(list),

        initialize: function () {
            this.render();
        },

        events: {
            'click #createBtn': 'onCreate',
            'click #editBtn': 'onEdit',
            'click #removeBtn': 'onRemove',
            'click span': 'onUser'
        },

        onUser: function(e){
         var $target = $(e.target);
         var $tr = $target.closest('tr');
         var userId = $tr.attr('id');

         e.stopPropagation();
         Backbone.history.navigate('#app/user/' + userId, {trigger: true});
         },

        onCreate: function (e) {
            e.stopPropagation();
            Backbone.history.navigate('#app/user/create', {trigger: true});
        },

        onEdit: function (e) {
            var $target = $(e.target);
            var $tr = $target.closest('tr');
            var userId = $tr.attr('id');

            e.stopPropagation();

            Backbone.history.navigate('#app/user/' + userId + '/edit', {trigger: true});
        },

        onRemove: function (e) {
            var $target = $(e.target);
            var $tr = $target.closest('tr');
            var userId = $tr.attr('id');
            var model = this.collection.get(userId);

            e.stopPropagation();

            if (!model) {
                return false;
            }

            model.destroy({
                success: function (model) {
                    Backbone.history.fragment = '';
                    Backbone.history.navigate('#app/user', {trigger: true});
                },
                error: function (model, xhr) {
                    alert(xhr.statusText);
                }
            });
        },


        render: function () {
            this.$el.html(this.template({collection: this.collection.models}));
        }
    });

    return View;
});
