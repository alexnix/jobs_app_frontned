'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('job-full', {
        url: '/job/view/:id',
        templateUrl: 'app/job-full/job-full.html',
        controller: 'JobFullCtrl'
      });
  });