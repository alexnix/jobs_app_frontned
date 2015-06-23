'use strict';

angular.module('jobsClientApp')
  .controller('JobFullCtrl', function ($scope, API, $stateParams) {
  	$scope.page_title = "Full Job Details";
  	$scope.sidebar_section = "dashboard";

    API.getJob($stateParams.id).then(function(res){
    	$scope.job = res.data;
    }, function(){
    	alert("failed to get the job");
    });
  });
