'use strict';

angular.module('jobsClientApp')
  .directive('arrayDisplay', function () {
    return {
      templateUrl: 'app/Directives/arrayDisplay/arrayDisplay.html',
      restrict: 'EA',
      scope: {
      	tags: '=',
      },
      link: function (scope, element, attrs) {
      }
    };
  });