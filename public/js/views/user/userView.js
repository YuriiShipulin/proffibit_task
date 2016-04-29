/**
 * Created by Пользователь on 28.04.2016.
 */

define([
    'backbone',
    'underscore',
    'text!/templates/user/userTemplate.html'

], function(Backbone, _, userTemplate){

    var View = Backbone.View.extend({

        el: '#container',

        template: _.template(userTemplate),

        events: {
            'click #editBtn': 'onEdit',
            'click #removeBtn': 'onRemove'
        },

        onEdit: function (e) {
            var $target = $(e.target);
            var $tr = $target.closest('tr');
            var userId = $tr.attr('id');

            e.stopPropagation();

            Backbone.history.navigate('#app/user/' + userId + '/edit', {trigger: true});
        },

        onRemove: function (e) {
            var model = this.model;

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

        initialize : function(){
            this.render();
        },

        render : function(){
            this.$el.html(this.template({model: this.model}));
        }
    });

    return View;
});
