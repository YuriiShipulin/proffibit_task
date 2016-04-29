/**
 * Created by Пользователь on 28.04.2016.
 */

define(['backbone'], function(Backbone) {

    var User = Backbone.Model.extend({
        idAttribute: '_id',

        urlRoot: function () {
            return '/user';
        },

        initialize: function (options) {

        },


        defaults: {
            firstName: '',
            lastName: ''
        }
    });

    return User;
});
