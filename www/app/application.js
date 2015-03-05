
var app = {};
var controllers = {};
var datacontext = {};
var services = {};

(function () {
    "use strict";

    app = angular.module("app", [
        'ngAnimate',
        'ngCookies',
        'ngRoute',
        'ngSanitize',
        'common',
        'SimplePagination',
        'chieffancypants.loadingBar',
        'http-auth-interceptor',
        'controllers',
        'services'
    ]);

    controllers = angular.module('controllers', []);
    services = angular.module("services", ['ngResource']);

})();

app.profile = null;
app.api = null;
