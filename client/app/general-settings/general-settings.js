'use strict';

angular.module('jobsClientApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('general-settings', {
        url: '/settings',
        templateUrl: 'app/general-settings/general-settings.html',
        controller: 'GeneralSettingsCtrl',
        data: {
        	private: true,
        }
      });
  });