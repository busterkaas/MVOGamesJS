'use strict';

angular.module('mvogamesJsApp')
  .controller('CheckoutCtrl', function($scope, $stateParams, Auth, OrderService, UserService, $mdDialog, $mdToast) {

    $scope.newOrder = {
      date: new Date(),
      comment: '',
      orderlines:[/*{
        amount: 0,
        game:{},
        platform: {
          name:'',
          price:0
        }
      }*/],
      user: {}
    };

    Auth.getCurrentUser(function(user) {
      $scope.me = user;
      console.log(user);
    });

    $scope.gameDetails = function(game) {
      $scope.viewGameDetails = game;
    };

    $scope.calculateTotalPrice = function() {/*
      var totalPrice = 0;
      $scope.me.shoppingCartItems.forEach(function(item) {
        totalPrice += item.platform.price * item.amount;
      });
      return totalPrice;*/
    };


/*
    $scope.subtractAmount = function(item) {

        if(item.platform.amount ==< 1) {
          //delete game from shopping cart
          angular.forEach
        } else {
          angular.forEach($scope.me.shoppingCartItems, function(i) {
            if(i._id === item._id) {
              i.item.platform.amount--;
            }
          });
        }
        //update user
    };

    $scope.addAmount = function(item) {
        item.platform.amount++;
        //update user
    };
*/
    $scope.checkoutShoppingCart = function() {

        $scope.newOrder.date = new Date();
        $scope.newOrder.comment = 'This is a autogenerated comment';

        angular.forEach($scope.me.shoppingCartItems, function(orderline){
          var newLine = {
          amount : orderline.amount,
          game : { id: orderline.game._id},
          platform : {
            name : orderline.platform.name,
            price : orderline.platform.price
        }};

        $scope.newOrder.orderlines.push(newLine);

      });
        $scope.newOrder.user = { _id:$scope.me._id};

        $scope.SaveOrderAndClearCart();
    };

    $scope.SaveOrderAndClearCart = function(){
      OrderService.save($scope.newOrder, function(){

        });
        $scope.me.shoppingCartItems = [];

          UserService.update({id: $scope.me._id}, $scope.me, function(user){
            $scope.me = user;
      });

    };


    //**Deleting Item from ShoppingCart**
    $scope.deleteItemFromShoppingCart = function(item, ev){
      var confirm = $mdDialog.confirm()
      .title('Delete item from Shopping Cart')
      .textContent('Are you sure you want to this item')
      .ariaLabel('Delete')
      .targetEvent(ev)
      .openFrom('#left')
      .ok('YES, I am sure!')
      .cancel('No');
      $mdDialog.show(confirm).then(function(){
        _.remove($scope.me.shoppingCartItems, function(u){
          return u._id === item._id;
        });
        UserService.update({
          id: $scope.me._id
        }, $scope.me, function(item){
          $scope.me = item;
          var toast = $mdToast.simple()
          .textContent('Item was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
          $mdToast.show(toast);
        });
      });
    };

  });
