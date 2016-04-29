/**
 * Created by Пользователь on 28.04.2016.
 */
define([
    'backbone',
    'models/user'], function(Backbone, User) {

    var Users = Backbone.Collection.extend({
        model: User,
        url: '/user',

        initialize: function (opt) {

        }
    });

    return Users;
});
