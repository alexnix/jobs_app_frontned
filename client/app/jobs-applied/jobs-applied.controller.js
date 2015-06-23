'use strict';

angular.module('jobsClientApp')
  .controller('JobsAppliedCtrl', function ($scope, API) {
    $scope.page_title = "Jobs Applied";
    $scope.sidebar_section = "dashboard";

    API.getApplications().then(function(res){
    	$scope.allJobs = res.data;
    });
    
  });
