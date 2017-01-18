(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['menuitems'];
function ItemDetailController(menuitems) {
  var itemDetail = this;
  itemDetail.name=menuitems.name;
  // var item = ShoppingListService.getItemsForCategory($stateParams.itemId);
  // console.log(item);
  // itemDetail.name = item.menu_items;
  // itemDetail.short_name = item.short_name;
  // itemDetail.description = item.description;
  // itemDetail.price_large=item.price_large;
}

})();
