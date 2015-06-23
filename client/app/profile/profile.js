'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl',
        data: {
        	private: true,
        }
      });
  });