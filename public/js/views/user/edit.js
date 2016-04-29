/**
 * Created by Пользователь on 28.04.2016.
 */


define([
    'backbone',
    'models/user',
    'underscore',
    'text!/templates/user/edit.html'
], function (Backbone, User, _, edit) {

    var View = Backbone.View.extend({

        el: '#container',

        template: _.template(edit),

        events: {
            'click #saveBtn': 'onSave',
            'click #cancelBtn': 'onCancel'
        },

        onSave: function (e) {
            var $thisEl = this.$el;
            var firstName;
            var lastName;

            e.stopPropagation();
            e.preventDefault();

            firstName = $thisEl.find('#firstName').val();
            lastName = $thisEl.find('#lastName').val();

            this.model.save({firstName : firstName, lastName : lastName}, {

                success: function (user) {
                    console.log('Updated ' + user);
                    Backbone.history.navigate('#app/user', {trigger: true});
                },

                error: function (error) {
                    error.status = 401;
                    console.log('ERROR ' + error.status + ' NOT UPDATED');
                    Backbone.history.navigate('#app/user', {trigger: true});
                }
            })
        },

        onCancel: function(){
            Backbone.history.navigate('#app/user', {trigger: true});
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template({model: this.model}));
        }
    });

    return View;
});

