'use strict';
  angular.module('jobsClientApp')
  .directive('search',  function(API){
    return {
        scope: {
            obj: '='
        },
        restrict: 'E',
        templateUrl: 'app/Directives/search/search.html',
        link: function(scope, element, attrs){


            var obj = {
                locations: [],
                types: [],
                roles: [],
                companies: [],
                keywords: [],
            };

            scope.obj = obj;

            scope.addLocation = function(loc){
                if( obj.locations.indexOf(loc) == -1 )
                    obj.locations.push(loc);
            };

            scope.addType = function(type){
                if( obj.types.indexOf(type) == -1 )
                    obj.types.push(type);
            };

            scope.addRole = function(role){
                if( obj.roles.indexOf(role) == -1 )
                    obj.roles.push(role);
            };

            scope.addCompany = function(co){
                if( obj.companies.indexOf(co) == -1 )
                    obj.companies.push(co);
            };

            scope.removeLocation = function(index){
                obj.locations.splice(index, 1);
            };

            scope.removeType = function(index){
                obj.types.splice(index, 1);
            };

            scope.removeRole = function(index){
                obj.roles.splice(index, 1);
            };

            scope.removeCompany = function(index){
                obj.companies.splice(index, 1);
            };

            scope.removeKeyword = function(index){
                obj.keywords.splice(index, 1);
            };

            scope.addTag = function(event) {
                if(event.keyCode == 13 && scope.newTag) {
                    if( obj.keywords.indexOf(scope.newTag) == -1 ){
                        obj.keywords.push(scope.newTag);
                        scope.newTag = '';
                    }
                }
            };

            scope.companies = [], scope.locations = [], scope.roles = [], scope.types = [], scope.keywords = [];

            API.getJobs().then(function(res){
            	res.data.forEach(function(job){
            		 if(!job.closed){
                        job.roles.forEach(function(role){
                            if( scope.locations.indexOf(role.location) == -1 )
                                scope.locations.push(role.location);

                            if( scope.roles.indexOf(role.title) == -1 )
                                scope.roles.push(role.title);

                        });

                        if( scope.companies.indexOf(job.company.name) == -1 )
                        	scope.companies.push(job.company.name);

                        if( scope.types.indexOf(job.type) == -1 )
                            scope.types.push(job.type);
                    }
            	})
            });

        },
    };
});