(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);




ShoppingListService.$inject = ['$q', '$timeout','$http']
function ShoppingListService($q, $timeout,$http) {
  var service = this;
  var items = [];

    service.getItems = function () {
      // return items;
      var deferred = $q.defer();
      var promise=deferred.promise;

      $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/categories.json")
      }).success(function (response) {
        console.log(response);
        deferred.resolve(response);
      }).error(function(err) {
                deferred.reject(err)
      });
      return promise;
      };


      service.getItemsForCategory = function(categoryShortName) {
            return $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                    params: {
                        category: categoryShortName
                    }
                }).then(function(result) {
                    return result.data.menu_items;
                })
                .catch(function(error) {
                    console.log(error);
                });
        };
  }




})();
