'use strict';

angular.module('jobsClientApp')
  .controller('CandidatesCtrl', function ($scope, API) {
  	$scope.page_title = "Applicants to your Jobs";
  	$scope.sidebar_section = "poster";
  	
    API.getCandidates().then(function(res){
    	$scope.candidates = res.data;
    });
  });
