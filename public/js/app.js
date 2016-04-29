/**
 * Created by Пользователь on 28.04.2016.
 */

define([
    'backbone',
    'jQuery',
    'underscore',
    './router'], function(Backbone, $, _, Router){
    function init() {

        var router = new Router();
        Backbone.history.start();
    }

    return {
        initialize: init
    }
});
