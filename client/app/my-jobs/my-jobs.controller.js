'use strict';

angular.module('jobsClientApp')
  .controller('MyJobsCtrl', function ($scope, API) {
    $scope.page_title = "Jobs you posted";
    $scope.sidebar_section = "poster";

    API.getMyJobs().then(function(res){
    	$scope.jobs = res.data;
    });

  });
