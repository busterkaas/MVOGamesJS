'use strict';

angular.module('mvogamesJsApp')
  .controller('CrewDetailsCtrl', function(socket, $scope, $stateParams, CrewService, $mdDialog, Auth, $mdToast) {

    $scope.gameSugSelected = undefined;
    $scope.newComment = undefined;

    Auth.getCurrentUser(function(user) {
      $scope.me = user;
    });

    CrewService.get({
      id: $stateParams.id
    }, function(crew) {
      $scope.crew = crew;
      socket.syncUpdates('crew', $scope.crews);

    });

    $scope.addComment = function() {
      console.log('here');
      if ($scope.newComment !== null) {
        var crewMessage = {
          user: $scope.me,
          message: $scope.newComment
        };
        console.log(crewMessage);
        $scope.crew.crewMessages.push(crewMessage);
        console.log('no comment');
        $scope.newComment = undefined;
      }

      $scope.isCrewLeader = function() {
        if ($scope.crew.crewleader._id === $scope.me._id) {
          return true;
        }
        return false;
      };

    };


    $scope.undoGameSuggestionDetails = function() {
      $scope.gameSugSelected = undefined;
    };

    $scope.gameSugDetails = function(gameSug) {
      $scope.gameSugSelected = gameSug;
    };

    $scope.usersConfirmed = function() {
      var confirmed = 0;
      $scope.usersConf = [];
      angular.forEach($scope.gameSugSelected.users, function(user) {
        if (user.confirmed === true) {
          confirmed += 1;
          $scope.usersConf.push(user);
        }
      });
      return confirmed;
    };

    $scope.usersDeclined = function() {
      var declined = 0;

      $scope.usersDecl = [];
      angular.forEach($scope.gameSugSelected.users, function(user) {
        if (user.confirmed !== true) {
          declined += 1;
          $scope.usersDecl.push(user);
        }
      });
      return declined;
    };

    $scope.showDeclUsers = function(ev) {
      $scope.showSugUsersDialog($scope.usersDecl, ev);
    };
    $scope.showConfUsers = function(ev) {
      $scope.showSugUsersDialog($scope.usersConf, ev);
    };


    function DialogController($scope, $mdDialog, chosenUsers) {
      console.log(chosenUsers);
      if (chosenUsers !== null) {
        $scope.users = chosenUsers;
      }
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }

    //**Deleting User from Crew**
    $scope.deleteUserFromCrew = function(user, ev) {
      var confirm = $mdDialog.confirm()
        .title('Delete User from Crew')
        .textContent('Are you sure you want to delete: ' + user.name)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        _.remove($scope.crew.users, function(u) {
          return u._id === user._id;
        });
        CrewService.update({
          id: $scope.crew._id
        }, $scope.crew, function(crew) {
          $scope.crew = crew;
          var toast = $mdToast.simple()
            .textContent(user.name + ' was deleted')
            .action('Ok')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);
        });
      });
    };

    //**Deleting whole Crew**
    $scope.deleteCrew = function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Delete Crew')
        .textContent('Are you sure you want to delete' + $scope.crew.name)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        CrewService.delete({
          id: $scope.crew._id
        });
        var toast = $mdToast.simple()
          .textContent($scope.crew.name + ' was deleted')
          .action('Ok')
          .highlightAction(false)
          .position('top');
        $mdToast.show(toast);
      });
      // $window.history.back();
    };

    //**Updating Crew**
    $scope.updateCrew = function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Updating Crew')
        .textContent('Are you sure you want to update: ' + $scope.crew.name)
        .ariaLabel('Update')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        CrewService.update({
          id: $scope.crew._id
        }, $scope.crew, function(crew) {
          var toast = $mdToast.simple()
            .textContent(crew.name + ' was updated')
            .action('Ok')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);

        });
      });
    };

    //**Deleting Applicant from Crew**
    $scope.deleteApplicantFromCrew = function(applicant, ev) {
      var confirm = $mdDialog.confirm()
        .title('Delete Applicant from Crew')
        .textContent('Are you sure you want to delete: ' + applicant.name)
        .ariaLabel('Delete')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, I am sure!')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        _.remove($scope.crew.applicants, function(a) {
          return a._id === applicant._id;
        });
        CrewService.update({
          id: $scope.crew._id
        }, $scope.crew, function(crew) {
          $scope.crew = crew;
          var toast = $mdToast.simple()
            .textContent(applicant.name + ' was deleted')
            .action('Ok')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);
        });
      });
    };

    $scope.acceptCrewApplicant = function(applicant, ev) {
      var confirm = $mdDialog.confirm()
        .title('Accept user application')
        .textContent('Are you sure you want to accept: ' + applicant.name + ' as a crewmember?')
        .ariaLabel('Accept')
        .targetEvent(ev)
        .openFrom('#left')
        .ok('YES, DO IT')
        .cancel('No');
      $mdDialog.show(confirm).then(function() {
        var user = _.find($scope.crew.applicants, function(a) {
          return a._id === applicant._id;
        });
        _.remove($scope.crew.applicants, function(a) {
          return a._id === user._id;
        });
        $scope.crew.users.push(user);

        console.log(user);


        CrewService.update({
          id: $scope.crew._id
        }, $scope.crew, function(crew) {
          $scope.crew = crew;
          var toast = $mdToast.simple()
            .textContent(crew.name + ' has got a new member!!')
            .action('Ok')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);
        });

      });
    };


    $scope.showSugUsersDialog = function(users, ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/app/crew/suggestionUsersDialogTmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
          chosenUsers: users
        },
        clickOutsideToClose: false
      });
    };

  });
