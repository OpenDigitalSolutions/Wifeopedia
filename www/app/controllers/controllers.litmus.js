
// home
(function () {
    'use strict';
    var controllerId = 'litmusHomeCtl';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', '$location', '$routeParams', 'routes', 'common', '$log', litmusHomeCtl]);

    function litmusHomeCtl($scope, $rootScope, $location, $routeParams, routes, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        $scope.gotoUrl = function(view){
            switch(view){
                case 'strategy':
                    $location.path(conf.routeLitmusStrategy);
                    break;
            }
        };

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Litmus Project', '', true); });

                $rootScope.transformDisplay({ headertitle:'Projects'});
        };

        activate();

    }
})();

// strategy
(function () {
    'use strict';
    var controllerId = 'litmusStrategyCtl';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', '$location', '$routeParams', 'routes', 'common', '$log', litmusStrategyCtl]);

    function litmusStrategyCtl($scope, $rootScope, $location, $routeParams, routes, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        $scope.gotoUrl = function(view){
            switch(view){
                case 'projects':
                    $location.path(conf.routeLitmus);
                    break;
                case 'scenario':
                    $location.path(conf.routeLitmusScenario);
                    break;
            }
        };

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Litmus Strategy', '', true); });

                $rootScope.transformDisplay({ headertitle:'Strategy'});
        };

        activate();

    }
})();

// scenario
(function () {
    'use strict';
    var controllerId = 'litmusScenarioCtl';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', '$location', '$routeParams', 'routes', 'common', '$log', litmusScenarioCtl]);

    function litmusScenarioCtl($scope, $rootScope, $location, $routeParams, routes, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        $scope.gotoUrl = function(view){
            switch(view){
                case 'strategy':
                    $location.path(conf.routeLitmusStrategy);
                    break;
                case 'readiness':
                    $location.path(conf.routeLitmusReadiness);
                    break;
            }
        };

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Litmus Scenario', '', true); });

                $rootScope.transformDisplay({ headertitle:'Scenario'});
        };

        activate();

    }
})();

// readiness
(function () {
    'use strict';
    var controllerId = 'litmusReadinessCtl';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', '$location', '$routeParams', 'routes', 'common', '$log', litmusReadinessCtl]);

    function litmusReadinessCtl($scope, $rootScope, $location, $routeParams, routes, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        $scope.gotoUrl = function(view){
            switch(view){
                case 'scenario':
                    $location.path(conf.routeLitmusScenario);
                    break;
            }
        };

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Litmus Readiness', '', true); });

                $rootScope.transformDisplay({ headertitle:'Readiness'});
        };

        activate();

    }
})();