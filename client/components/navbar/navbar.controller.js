'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Games',
    'state': 'game'
  },{
    'title': 'Crews',
    'state': 'crew'
  },
];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;



          this.isCustomer = function() {
            if(Auth.isAdmin()){
              return false;
            }
            return Auth.isLoggedIn();
          };
  }
}

angular.module('mvogamesJsApp')
  .controller('NavbarController', NavbarController);
