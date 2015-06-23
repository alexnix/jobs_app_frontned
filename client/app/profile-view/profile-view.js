'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile-view', {
        url: '/profile/:id',
        templateUrl: 'app/profile-view/profile-view.html',
        controller: 'ProfileViewCtrl'
      });
  });