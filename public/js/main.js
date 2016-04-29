/**
 * Created by Пользователь on 28.04.2016.
 */
/*APP = APP || {};*/

require.config({
    paths: {
        backbone   : './libs/backbone/backbone',
        jQuery     : './libs/jquery/dist/jquery',
        underscore : './libs/underscore/underscore',
        model      : './models',
        collections: './collections',
        views      : './views',
        templates  : '../templates',
        text       : './libs/text/text'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        jQuery: {
            exports: '$'
        },
        backbone  : ['underscore', 'jQuery'],
        app       : ['backbone']
    }
});

require(['app'], function (app) {
    app.initialize();
});
