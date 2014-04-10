'use strict';

var app = angular.module('snipetsApp',
  [ 'snipetsApp.config'
  , 'snipetsApp.controllers.header'
  , 'snipetsApp.controllers.add'
  , 'snipetsApp.controllers.list'
  , 'snipetsApp.controllers.details'
  , 'firebase', 'ui.bootstrap', 'ngRoute', 'snipetsApp.filters.slug']
  )
