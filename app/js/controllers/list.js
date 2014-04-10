'use strict';

angular.module('snipetsApp.controllers.list', ['snipetsApp.services.snippets'])
.controller('ListController', ['$scope', 'snippetsService', '$location',
  function($scope, snippetsService, $location) {
    snippetsService.getSnippets(function(snippetsList) {
      $scope.snippetsList = snippetsList;
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    });
  }
]);