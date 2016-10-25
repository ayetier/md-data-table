'use strict';

angular.module('ng1.md.data.table').directive('mdBody', mdBody);

function mdBody() {

  function compile(tElement) {
    tElement.addClass('md-body');
  }

  return {
    compile: compile,
    restrict: 'A'
  };
}