
'use strict';

angular.module('snipetsApp.services.snippets', [])
.factory('snippetsService', ['Firebase', 'FBURL', '$rootScope',
  function(Firebase, FBURL, $rootScope) {
    return {
      getSnippet: function(snippetId, callback) {
        new Firebase(FBURL).child('snippets/' + snippetId).on("value", function(snapshot) {
          callback(snapshot.val());
        });
      },
      getSnippets: function(callback) {
        new Firebase(FBURL).child('snippets').on("value", function(snapshot) {
          var oData = snapshot.val();
          if (oData === null) {
            callback([]);
          } else {
            var snippetsList = [];
            for (var snippet in oData) {
              var tmp = oData[snippet];
              tmp.id = snippet;
              snippetsList.push(tmp);
            }
          }
          callback(snippetsList);
        });
      },
      addSnippet: function(author, description, code, callback) {
        var oData = {
          author: author,
          description: description,
          code: code
        };
        new Firebase(FBURL).child('snippets').push(oData, function(err) {
          if (callback) {
            callback(err);
            $rootScope.$apply();
          }
        });
      }
    }
  }
])
