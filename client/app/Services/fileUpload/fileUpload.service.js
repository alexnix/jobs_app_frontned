'use strict';

angular.module('jobsClientApp')
  .service('fileUpload', function ($http, $cookies, Notification) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {
            	'Content-Type': undefined,
            	serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
				token: $cookies.get('token'),
				email: $cookies.get('email'),
            }
        })
        .success(function(res){
        	console.log("Upload success");
        	console.log(res);
        	Notification.success({message: "Profile picture uploaded.", title:"Success"});
        })
        .error(function(){
        	console.log("Upload fail");
        });
    };

    this.uploadResume = function(file, uploadUrl, name){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {
            	'Content-Type': undefined,
            	serviceKey: 'k24bL3b4389nclewqnc2bNK9bckjKBFSWI84w2',
				token: $cookies.get('token'),
				email: $cookies.get('email'),
            },
            data: {
            	resumeName: name,
            }
        })
        .success(function(res){
        	console.log("Upload resume success");
        	console.log(res);
        	Notification.success({message: "Resume was uploaded.", title:"Success"});
        })
        .error(function(){
        	console.log("Upload resume fail");
        });
    }

  });
