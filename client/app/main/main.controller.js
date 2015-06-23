'use strict';

angular.module('jobsClientApp')
  .controller('MainCtrl', function ($scope, API, md5, Notification) {

  	$scope.page_title = "All Jobs";
  	$scope.sidebar_section = "dashboard";

  	API.me().then(function(res){
  		console.log(res);
  	}, function(){
  		//alert('\me failed');
  	});

  	API.getJobs().then(function(res){
  		$scope.allJobs = res.data;
  	}, function(){
  		//alert('get jobs failed');
  	});
    
    $scope.register = function(){

    	API.register({
    		email: $scope.email,
    		password: md5.createHash($scope.password),
    	}).then(function(res){
    		console.log(res);
    	}, function(){
    		alert("fail");
    	});
    	
    };

    $scope.login = function() {
    	API.login({
    		email: $scope.email,
    		password: $scope.password, // create hash here
    	}, function(res){
    		console.log(res);
    	}, function(){
    		alert('login fail');
    	})
    };

  });
