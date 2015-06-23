'use strict';

angular.module('jobsClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-md5',
  'ngDialog',
  'ngCookies',
  'ui-notification',
  'ngFileUpload',
  'monospaced.elastic',
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .run(function($rootScope, API, $state){


    API.me().then(function(res){
      $rootScope.User = res.data;
    }, function(){

        
        if ( $state.current.data.private ) {
          event.preventDefault();
          $state.go('main');
        }
         
    })




  });