'use strict';

angular.module('jobsClientApp')
  .directive('job', function (ngDialog, API) {
    return {
      templateUrl: 'app/Directives/job/job.html',
      restrict: 'E',
      scope: {
      	job: '=',
      	full: '='
      },
      link: function (scope, element, attrs) {
      	if( scope.full == true )
      		$(".big-card").show();

      	scope.expand = function(event){
      		var elem = $(event.target);
      		var bigCard = elem.parents(".job-card").find(".big-card");
      		var smallCard = elem.parents(".job-card").find(".small-card")

      		bigCard.slideDown();
      		smallCard.slideUp();
      	};
      	scope.contract = function(event) {
      		var elem = $(event.target);
      		var bigCard = elem.parents(".job-card").find(".big-card");
      		var smallCard = elem.parents(".job-card").find(".small-card")

      		smallCard.slideDown();
      		bigCard.slideUp();
      	};

            scope.youStarred = function (arr, id) {
                  return arr.indexOf(id) != -1;
            };

            scope.star = function(id, arr) {
                  API.star(id);
                  arr.push(id);
            };

            scope.unstar = function(id, arr) {
                  API.unstar(id);
                  arr.splice(arr.indexOf(id), 1);
            };

            scope.youReported = function(arr, id) {
                  return arr.indexOf(id) != -1;
            }

            scope.repot = function(jobId, arr) {
                  ngDialog.open({
                        template: "report_template.html",
                        data: {
                              jobId: jobId,
                              arr: arr,
                        },
                        controller: ['$scope', 'API', 'Notification',function($scope, API, Notification){
                              $scope.report = function() {
                                    API.report($scope.ngDialogData.jobId, $scope.message).then(function(){
                                          $scope.closeThisDialog();
                                          $scope.ngDialogData.arr.push($scope.ngDialogData.jobId);
                                          Notification.success({message: "Job was reported. Thank you !", title: "Success"});
                                    });
                              }
                        }]
                  });
            }

            scope.share = function(jobId) {
                  ngDialog.open({
                        template: 'share_template.html',
                        data: {
                              jobId: jobId,
                        },
                        controller: ['$scope', function($scope){
                              var shareUrl = window.location.protocol + "//" + window.location.hostname;
                              if (window.location.port != 80)
                                    shareUrl = shareUrl + ":" + window.location.port;
                              shareUrl = shareUrl + "/job/view/" + $scope.ngDialogData.jobId;
                              //alert(shareUrl);
                              $scope.shareFacebook = function() {
                                    popit('https://www.facebook.com/sharer/sharer.php?u='+shareUrl);
                              };

                              $scope.shareGooglePlus = function() {
                                    popit('https://plus.google.com/share?url='+shareUrl);
                              };

                              $scope.shareLinkedIn = function() {
                                    popit('https://www.linkedin.com/shareArticle?mini=true&url='+shareUrl);
                              };
  
                              function popit(url) {
                                    newwindow=window.open(url,'name','height=500,width=500');
                                    if (window.focus) {newwindow.focus()}
                                    return false;
                              };
                        }],
                  });
            }

      	scope.apply = function(job, id){
      		
      		ngDialog.open({
      			template: 'apply_template.html',
      			data: {
      				role: job,
      				jobId: id,
      			},
      			controller: ['$scope', 'API', 'Notification', function($scope, API, Notification){
      				$scope.apply = function(){
      					API.apply({
      						id: $scope.ngDialogData.jobId,
      						application: {
      							ownerId: $scope.$parent.User.id,
      							message: $scope.message,
      						}
      					}).then(function(){
      						$scope.closeThisDialog();
      						Notification.success({message:"Application was sent", title:"Success"});
      					});
      				};
      			}]
      		});
      	};
      }
    };
  });