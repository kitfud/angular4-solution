(function () {
    'use strict';
    
    angular.module('data')
    .controller('DataController', DataController);
    
    
    DataController.$inject = ['items'];
    function DataController(items) {
      var mainList = this;
      mainList.items = items;
    }
    
    })();
    