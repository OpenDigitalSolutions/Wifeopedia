(function () {
    'use strict';

    var serviceId = 'datacontext';
    services.factory(serviceId,
        ['$rootScope', '$http', 'common', datacontext]);

    function datacontext($rootScope, $http, common) {
        var $q = common.$q;

        var service = {
            apiService: apiService
        };

        return service;

        function apiService(verb, url, model, token){
            var apicall;
            var deferred = $q.defer();

            switch(verb){
                case 'GET':
                    apicall = $http({ 
                                method:verb, 
                                url:url, 
                                params:model, 
                                cache:false
                            });
                    break;
                case 'POST':
                    apicall = $http({ 
                                method:verb, 
                                url:url, 
                                data:model, 
                                cache:false,
                                headers: {
                                    'Authorization': token,
                                    "Content-Type": "application/json; charset=utf-8",
                                    "Cache-Control": "no-cache",
                                    "Accept": "*/*"
                                }
                            });
                    break;
                case 'DELETE':
                    apicall = $http({ 
                                method:verb, 
                                url:url, 
                                data:model, 
                                cache:false, 
                                headers: {
                                    'Access-Control-Allow-Origin': 'true',
                                    "Content-Type": "application/json; charset=utf-8",
                                    "Cache-Control": "no-cache",
                                    "Accept": "*/*"
                                }
                            });
                    break;
                // just a poc
                case 'JWT':
                    apicall = $http({ 
                                method:'GET', 
                                url:url, 
                                params:model, 
                                cache:false, 
                                headers: {'Authorization': token}
                            });
                    break;
            }

            apicall.
                    success(function(data, status, headers, config) {
                        deferred.resolve(data); 
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject(data); 
                        $rootScope.errormsg = data;
                        setTimeout("$('#networkError').modal('show');", 100);
                    });

            return deferred.promise;
        }
    }
})();