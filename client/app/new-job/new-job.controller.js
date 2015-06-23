'use strict';

angular.module('jobsClientApp')
  .controller('NewJobCtrl', function ($scope, API, Notification) {
  	$scope.page_title = "Post a Job";
  	$scope.sidebar_section = "poster";

	$scope.job = {
		roles: [{}],
		active: true,
		//'date': now,
	};
	$scope.addRole = function() {
		$scope.job.roles.push({});
	};

	$scope.removeRole = function(index){
		$scope.job.roles.splice(index, 1);
	};

	$scope.save = function(){
		API.postJob({job:$scope.job}).then(function(){
			Notification.success({message:"Job published", title:"Success"})
		}, function(){
			Notification.error({message:'Could not publish job', title:"Error"})
		});
	};
  });
