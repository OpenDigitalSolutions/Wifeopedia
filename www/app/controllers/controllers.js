
(function () {
    'use strict';
    var controllerId = 'shell';
    angular.module('app').controller(controllerId, [
        '$rootScope', 
        '$scope',
        '$templateCache',
        '$location',
        '$routeParams',
        'routes',
        'common', 
        'config',
        '$log',
        shell]);

    function shell($rootScope, $scope, $templateCache, $location, $routeParams, routes, common, config, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;



        $rootScope.clearCache = function() {
            $templateCache.removeAll();
        };

        $rootScope.paths = routes;

        $rootScope.transformDisplay = function(obj) {
            if(obj.display){
                $('#ods-splash').show();
                $('#ods-content').removeClass('col-sm-12');
                $('#ods-content').removeClass('col-md-12');
                $('#ods-content').addClass('col-md-8');
                $('#ods-content').addClass('col-sm-8');
            }else{
                $('#ods-splash').hide();
                $('#ods-content').removeClass('col-sm-8');
                $('#ods-content').removeClass('col-md-8');
                $('#ods-content').addClass('col-sm-12');
                $('#ods-content').addClass('col-md-12');
            }

            if(obj.headertitle){
                $('#headertitle').html(obj.headertitle);
            }else{
                $('#headertitle').html('');
            }   

            if(obj.fulldisplay){
                $('#ods-background').removeClass('ods-wrapper');
                $('#ods-background').addClass('ods-wrapper-full');
                //$('#ods-bottom').hide();
             }else{
                $('#ods-background').removeClass('ods-wrapper-full');
                $('#ods-background').addClass('ods-wrapper');
                $('#ods-bottom').show();
            }
        };

        

        $scope.gotoUrl = function(view){
            switch(view){
                case 'home':
                    $location.path(conf.routeDefault);
                    break;
                case 'theme':
                    $location.path(conf.routeTheme);
                    break;
                case 'litmus':
                    $location.path(conf.routeLitmus);
                    break;
            }
        };

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('HTML5 loaded!', '', true); });
        };

        activate();
    }
})();

(function () {
    'use strict';
    var controllerId = 'defaultCtl';
    angular.module('app').controller(controllerId, [
        '$scope', 
        '$rootScope', 
        '$templateCache',
        '$location',
        '$routeParams',
        'routes',
        'common', 
        'config',
        'datacontext',
        '$log',
        defaultCtl]);

    function defaultCtl($scope, $rootScope, $templateCache, $location, $routeParams, routes, common, config, datacontext, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        vm.jwt = null;
        vm.showLogin = true;
        vm.showSession = false;
        vm.showAPI = false;
        vm.jumbomsg = 'Simple Enterprise App...';

        $scope.doSubmit = function(event, form){
            if(form.$valid){
                var url = 'http://127.0.0.1:8113/iam/' + event.loginname + '/' + event.loginpass
                var model = {};
                datacontext.apiService('GET', url, model, null).then(function (data){
                    console.log(data);
                    var obj = data;
                    $scope.username = obj.name;
                    $scope.address = obj.address;
                    $scope.timestamp = obj.timestamp;
                    $scope.roles = JSON.stringify(obj.roles);
                    $scope.jwt = 'Bearer ' + obj.token;

                    vm.jwt = obj.token;
                    vm.showLogin = false;
                    vm.showSession = true;
                    vm.showAPI = true;
                });
            };
        };

        $scope.gotoAPI = function(ref){
            var url = 'http://127.0.0.1:8111/api/';
            var model = {};
            var token = 'Bearer ' + vm.jwt;

            switch(ref){
                case 'nojwt':
                    url += 'noTokenRequired';
                    break;
                case 'jwt':
                    url += 'tokenRequired';
                    break;
                case 'jwtrole':
                    url += 'tokenAuthorizedRole';
                    break;
                case 'jwtroles':
                    url += 'tokenAuthorizedRoles';
                    break;
            }

            datacontext.apiService('JWT', url, model, token).then(function (data){
                var obj = data;
                vm.jumbomsg = obj.text;
            });
        };

        $scope.logout = function(){
            window.location.reload();
        };

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Default View', '', true); });

                $rootScope.transformDisplay({ display:true, headertitle:' Home'});
        };

        activate();
    }
})();

// theme
(function () {
    'use strict';
    var controllerId = 'themeCtl';
    angular.module('app').controller(controllerId, ['$scope', '$rootScope', 'common', '$log', themeCtl]);

    function themeCtl($scope, $rootScope, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Theme View', '', true); });

                $rootScope.transformDisplay({ headertitle:'Theme'});
        };

        activate();

    }
})();

(function () {
    'use strict';
    var controllerId = 'errorCtl';
    angular.module('app').controller(controllerId, ['$scope', ' $rootScope', 'common', '$log', errorCtl]);

    function errorCtl($scope,  $rootScope, common, $log) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        function activate() {
            var promises = [];
            common.activateController([], controllerId)
                .then(function () { log('Activated Error View', '', true); });

                $rootScope.transformDisplay({ display:true, headertitle:'Error:'});
        };

        activate();

    }
})();