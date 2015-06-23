'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-jobs', {
        url: '/jobs',
        templateUrl: 'app/my-jobs/my-jobs.html',
        controller: 'MyJobsCtrl',
        data: {
        	private: true,
        }
      });
  });