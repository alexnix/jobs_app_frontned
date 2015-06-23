'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jobs-starred', {
        url: '/jobs/starred',
        templateUrl: 'app/jobs-starred/jobs-starred.html',
        controller: 'JobsStarredCtrl',
        data: {
        	private: true
        }
      });
  });