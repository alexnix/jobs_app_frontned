'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('candidates', {
        url: '/candidates',
        templateUrl: 'app/candidates/candidates.html',
        controller: 'CandidatesCtrl'
      });
  });