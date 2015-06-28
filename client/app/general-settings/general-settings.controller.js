'use strict';

angular.module('jobsClientApp')
  .controller('GeneralSettingsCtrl', function ($scope, API, $rootScope, Notification, md5, $cookies, fileUpload) {
    $scope.page_title = "General Settings";
    $scope.sidebar_section = "my-account";

    // $scope.uploadImage = function () {
    //   var file = $scope.myFile;
    //   var uploadUrl = 'http://rukawajobs.appspot.com/rest/upload/image';
    //   fileUpload.uploadFileToUrl(file, uploadUrl);
    // };

    $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFile = function(evt){
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);

      $('.crop-row').show();
    };  

    $scope.cropIt = function(){
      var uploadUrl = 'http://rukawajobs.appspot.com/rest/upload/image';
      fileUpload.uploadFileToUrl($scope.myCroppedImage, uploadUrl);
      $('.crop-row').hide();
    };

    angular.element(document.querySelector('#circular-file-input')).on('change',handleFile);

    $scope.save = function() {
    	API.updateProfile({profile:$rootScope.User}).then(function(res){
        
        if( $scope.password1 )
	    	  API.updatePassword(md5.createHash($scope.password1)).then(function(){
            $cookies.remove('email');
            $cookies.remove('token');

            $cookies.put('email', res.headers('email') );
            $cookies.put('token', res.headers('token') );
            Notification.success({message:"Changes saved", title: "Success"});
          });
	    }, function(){
    		if( $scope.password1 )
          API.updatePassword(md5.createHash($scope.password1)).then(function(res, status, headers){
            $cookies.remove('email');
            $cookies.remove('token');
            
            $cookies.put('email', res.headers('email') );
            $cookies.put('token', res.headers('token') );
            Notification.success({message:"Changes saved", title: "Success"});
          });
        else Notification.success({message:"Changes saved", title: "Success"});
	    });
    };

  });
