'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-job', {
        url: '/job/new',
        templateUrl: 'app/new-job/new-job.html',
        controller: 'NewJobCtrl',
        data: {
        	private: false,
        }
      });
  });