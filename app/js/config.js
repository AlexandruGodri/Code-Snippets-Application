'use strict';

angular.module('snipetsApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',        { redirectTo: '/list' })
      .when('/list',  { templateUrl: 'views/list.html', controller: 'ListController' })
      .when('/add',  { templateUrl: 'views/add.html', controller: 'AddController' })
      .when('/details/:snippetId',  { templateUrl: 'views/details.html', controller: 'DetailsController' })
      .otherwise(       { redirectTo: '/' });
    }])
  
  .constant('FBURL', 'https://luminous-fire-902.firebaseio.com/')


