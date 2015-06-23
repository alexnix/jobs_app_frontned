'use strict';

angular.module('jobsClientApp')
  .controller('JobsStarredCtrl', function ($scope, API) {
  	$scope.page_title = "Jobs you starred";
  	$scope.sidebar_section = "dashboard";
  	
    API.getStarred().then(function(res){
    	$scope.allJobs = res.data;
    }, function(){
    	alert(":(");
    })
  });
