(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

MenuDataService.inject$=['$http','ApiBasePath'];
function MenuDataService($http,ApiBasePath){
var service = this;


service.getAllCategories = function(){
    /*this method should return a promise 
    which is a result of using the $http service, 
    using the following REST API endpoint: 
    https://davids-restaurant.herokuapp.com/categories.json
    */
   return $http({
    method:"GET",
    url:(ApiBasePath + "/categories.json")
  }).then(function (response) {
      var data = response.data;
      
    
      return data;

})
}

service.getItemsForCategory= function(categoryShortName){
/*
this method should return a promise 
which is a result of using the $http service, 
using the following REST API endpoint:
 https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
 where, before the call to the server,
  your code should append whatever 
  categoryShortName value was passed in as an argument into the 
  getItemsForCategory method.
*/

      return $http({
        method:"GET",
        url:(ApiBasePath + "/menu_items.json?category="+categoryShortName)
      }).then(function (response) {
          var data = response.data;
          return data;
      
         })
         .catch(function () {
           console.log("ERROR!");
         }); 

}



}


})();