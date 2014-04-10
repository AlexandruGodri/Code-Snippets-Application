'use strict';

angular.module('snipetsApp.controllers.details', ['snipetsApp.services.snippets'])
.controller('DetailsController', ['$scope', 'snippetsService', '$location', '$routeParams',
  function($scope, snippetsService, $location, $routeParams) {
    var snippetId = $routeParams.snippetId;
    snippetsService.getSnippet(snippetId, function(snippet) {
      $scope.snippet = snippet;
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    });
  }
]);