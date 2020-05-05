(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.html'
      })
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categoriesHome.html',
        controller: 'DataController as mainList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
            //return MenuDataService.getItemsForCategory("PF");
          }]
        }
      })
    
      // Item detail
      .state('itemDetail', {
        url: '/item-detail/{itemId}',
        templateUrl: 'src/menuapp/templates/itemHome.html',
        controller: 'ItemController as mainList',
        resolve: {
          item: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.itemId);
          }]
        }
        
      });
    
    }
    
    })();
    