'use strict';

angular.module('jobsClientApp')
  .controller('JobsReportedCtrl', function ($scope, API) {
    $scope.page_title = "Jobs you reported";
    $scope.sidebar_section = "dashboard";

    API.getReported().then(function(res){
    	$scope.allJobs = res.data;
    });

  });
