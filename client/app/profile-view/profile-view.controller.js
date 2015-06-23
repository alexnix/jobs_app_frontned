'use strict';

angular.module('jobsClientApp')
  .controller('ProfileViewCtrl', function ($scope, API, $stateParams) {
    $scope.sidebar_section = "dashboard";


    API.getUser($stateParams.id).then(function(res){
    	$scope.TheUser = res.data;

    	$scope.page_title = $scope.TheUser.name;

    });

  });
