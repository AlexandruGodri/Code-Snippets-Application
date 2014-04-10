'use strict';

angular.module('snipetsApp.filters.slug', []).filter('slug', function() {
  return function(input) {
    if (input.length > 30) {
      return input.substr(0, 30) + "...";
    } else {
      return input;
    }
  };
});
