'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jobs-applied', {
        url: '/jobs/applied',
        templateUrl: 'app/jobs-applied/jobs-applied.html',
        controller: 'JobsAppliedCtrl',
        data: {
        	private: true,
        }
      });
  });