'use strict';

angular.module('jobsClientApp')
  .controller('NavbarCtrl', function ($scope, $location, ngDialog, $cookies, $state) {
    $scope.foo ="BAR";

    $scope.logout = function() {
      $cookies.remove('email');
      $cookies.remove('token');
      $state.go('main');
      //window.location.reload();
    };

    $scope.loginDialog = function(){
      ngDialog.open({
        template: 'login_template.html',
        controller: ['$scope', 'API', 'md5', '$cookies', function($scope, API, md5, $cookies) {
          // controller logic
          $scope.register = {};
          $scope.login = {};

          $scope.doLogin = function(){
            API.login({
              email: $scope.login.email,
              password: md5.createHash($scope.login.password),
            }).then(function(res, status, headers, conf){

              $cookies.put('email', $scope.login.email);
              $cookies.put('token', res.headers('token') );
              window.location.reload();

            }, function(){
              $scope.loginError = true;
            })
          };

          $scope.doRegister = function() {
            API.register({
              email: $scope.register.email,
              password: md5.createHash($scope.register.password),
            }).then(function(res){
              $cookies.put('email', res.headers('email') );
              $cookies.put('token', res.headers('token') );
              window.location.reload();
            }, function(){
              $scope.registerError = true;
            });
          };
        }]
      });
    }

  });

