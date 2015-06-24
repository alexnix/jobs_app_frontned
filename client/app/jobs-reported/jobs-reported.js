'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jobs-reported', {
        url: '/jobs/reported',
        templateUrl: 'app/jobs-reported/jobs-reported.html',
        controller: 'JobsReportedCtrl'
      });
  });