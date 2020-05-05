(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemController', ItemController)
    
    
  ItemController.$inject =['items']
  function ItemController(items) {
    var mainList =this;
    mainList.items = items; 

    }
    
    })();
    