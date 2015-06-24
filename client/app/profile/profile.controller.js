'use strict';

angular.module('jobsClientApp')
  .controller('ProfileCtrl', function ($scope, API, Notification, fileUpload) {
  	$scope.sidebar_section = "my-account";
  	$scope.page_title = "Edit Profile";

    API.me().then(function(res){
    	$scope.User = res.data;
    	$scope.User.hasProfile = true;

    	if ( $scope.User.education == null )
    		$scope.User.education.push({});

    	if ( $scope.User.experience == null )
    		$scope.User.education.push({});
    });

    $scope.uploadResume = function() {
		var file = $scope.myFile;
		var uploadUrl = 'http://rukawajobs.appspot.com/rest/upload/resume';
		fileUpload.uploadResume(file, uploadUrl);
    }

    $scope.addEducation = function(){
		if( $scope.User.education == null )
			$scope.User.education = [];
		$scope.User.education.push({});
	};

	$scope.addExp = function(){
		if( $scope.User.experience == null )
			$scope.User.experience = [];
		$scope.User.experience.push({});
	};

	$scope.removeEducation = function(index) {
		$scope.User.education.splice(index, 1);
	};

	$scope.removeExperience = function(index) {
		$scope.User.experience.splice(index, 1);
	};


	$scope.getBlockClass = function(status) {
		if( $scope.User && $scope.User.status == status )
			return "active";
	};

	$scope.updateProfile = function(){
		API.updateProfile({profile:$scope.User}).then(function(res){
		}, function(){
			Notification.success({message:"Profile saved.", title:"Success"});
		});
	};

  });
