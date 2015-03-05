(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/default' });
    }

    // Define the routes
    function getRoutes() {
        return [

            // defaults
            {
                id: 'default',
                url: conf.routeDefault,
                config: {
                    templateUrl: './app/layout/defaults/default.html',
                    title: 'Default Page',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }, {
                id: 'defaultTheme',
                url: conf.routeTheme,
                config: {
                    templateUrl: './app/layout/defaults/theme.html',
                    title: 'Theme',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }, {
                id: 'defaultError',
                url: conf.routeError,
                config: {
                    templateUrl: './app/layout/defaults/error.html',
                    title: 'Error',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            },

            // litmus...
            {
                id: 'litmusHome',
                url: conf.routeLitmus,
                config: {
                    templateUrl: './app/layout/litmus/home.html',
                    title: 'Litmus',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }, {
                id: 'litmusStrategy',
                url: conf.routeLitmusStrategy,
                config: {
                    templateUrl: './app/layout/litmus/strategy.html',
                    title: ' Strategies',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }, {
                id: 'litmusScenario',
                url: conf.routeLitmusScenario,
                config: {
                    templateUrl: './app/layout/litmus/scenario.html',
                    title: ' Scenarios',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }, {
                id: 'litmusReadiness',
                url: conf.routeLitmusReadiness,
                config: {
                    templateUrl: './app/layout/litmus/readiness.html',
                    title: ' TestCase',
                    settings: {
                        nav: null,
                        content: null
                    }
                }
            }
            
        ];
    }
})();
