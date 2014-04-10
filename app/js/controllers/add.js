'use strict';

angular.module('snipetsApp.controllers.add', ['snipetsApp.services.snippets'])
.controller('AddController', ['$scope', 'snippetsService', '$location',
  function($scope, snippetsService, $location) {
    $scope.addSnippet = function() {
      if( !$scope.author ) {
        $scope.err = 'Please enter the author';
      } else if( !$scope.description ) {
        $scope.err = 'Please enter the description';
      } else if( !$scope.code ) {
        $scope.err = 'Please enter the code';
      } else {
        snippetsService.addSnippet($scope.author, $scope.description, $scope.code, function(err, snippetData) {
          if (err) {
            $scope.err = err;
          } else {
            $location.path('/');
          }
        });
      }
    };
  }
]);