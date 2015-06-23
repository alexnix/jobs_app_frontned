'use strict';

angular.module('jobsClientApp')
  .controller('CompanyCtrl', function ($scope, API, Notification) {
  	$scope.page_title = "My Company";
  	$scope.sidebar_section = "poster";
    
  	API.getCompanies().then(function(res){
  		$scope.companies = res.data;
  	}, function(){
  		//alert("Errrr");
  	});

  	API.getMyCompany().then(function(res){
  		$scope.my_current_company = res.data;
  	}, function() {
  		//alert("Errrr");
  	});

  	$scope.send = function(){
  		API.updateMyCompany({
  			company: {
  				companyId: $scope.co.id,
  				mailUser: $scope.co.mailUser,
  			}
  		}).then(function(res){
  			Notification.success({message: "Verification code was sent to your email: "+$scope.co.mailUser +"@"+ $scope.co.mailServer, title: "Success"});
        $scope.codeSent = true;
  		});
  	};

  	$scope.verify = function() {
  		API.verifyCompany({
  			code: $scope.verificationCode,
  			company: {
  				companyId: $scope.co.id,
  				mailUser: $scope.co.mailUser,
  			}
  		}).then(function(res){
  			Notification.success({message: "Your company was verified. You will be redirected to post a job in 5 seconds", title: "Success"});
  		}, function(){
  			Notification.error({message: "There was an error. Make sure your code is correct.", title: "Error"});
  		})
  	}

  });
