'use strict';

/* Filters */


mftApp.filter('feedListFilter', function() {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  }
});
