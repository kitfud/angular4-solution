(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemController', ItemController)
    
    
  ItemController.$inject =['item']
  function ItemController(item) {
    var mainList =this;
    mainList.item = item;
  
   
  

    }
    
    })();
    