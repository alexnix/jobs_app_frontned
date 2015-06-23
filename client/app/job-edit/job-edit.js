'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('job-edit', {
        url: '/job/:id/edit',
        templateUrl: 'app/job-edit/job-edit.html',
        controller: 'JobEditCtrl'
      });
  });