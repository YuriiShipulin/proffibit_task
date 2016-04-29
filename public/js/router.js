/**
 * Created by Пользователь on 28.04.2016.
 */
define([
    'backbone'
], function (Backbone) {
    return Backbone.Router.extend({
        routes: {
            'app': 'default',
            'app/user': 'fetchAllUsers',

            'app/user/create': 'createUser',
            'app/user/:id': 'fetchUser',
            'app/user/:id/edit': 'editUser',

            '*any': 'default'
        },

        initialize: function (options) {
        },

        default: function () {
            console.log('Default action');
            Backbone.history.navigate('#app/user', {trigger: true});
        },

        editUser: function (id) {
            var self = this;

            require([
                'models/user'
            ], function (User) {
                var user = new User();
                user.set('_id', id);

                user.fetch({

                    success: function (user) {
                        require([
                            'views/user/edit'
                        ], function (CreateView) {
                            if (self.view) {
                                self.view.undelegateEvents();
                            }

                            self.view = new CreateView({model: user});
                        });
                    }
                });
            });
        },



        fetchUser: function (id) {
            var self = this;

            require([
                'models/user'
            ], function (User) {
                var user = new User();
                user.set('_id', id);

                user.fetch({
                    success: function (user) {

                        console.log("USER " + user + " FETCHED");
                        require([
                            'views/user/userView'
                        ], function (CreateView) {
                            if (self.view) {

                                self.view.undelegateEvents();
                            }

                            self.view = new CreateView({model: user});
                        });
                    },

                    error: function (err) {
                        console.log("ERROR " + err.toJSON)
                    }
                });
            });
        },

        createUser: function () {
            var self = this;

            require([
                'views/user/create'
            ], function (CreateView) {
                if (self.view) {
                    self.view.undelegateEvents();
                }

                self.view = new CreateView();
            });
        },

        fetchAllUsers: function () {
            var self = this;

            function viewCreator() {
                var context = this;

                require([
                    'views/user/list'
                ], function (View) {

                    if (self.view) {
                        self.view.undelegateEvents();
                    }

                    self.view = new View({collection: context});
                });
            }

            require([
                'collections/users'
            ], function (Collection) {
                var collection;
                collection = new Collection();

                collection.fetch({
                    reset: true
                });

                collection.on('reset', viewCreator, collection)
            });
        }
    })
});
