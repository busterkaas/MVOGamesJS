'use strict';

angular.module('mvogamesJsApp')
  .controller('CreateCrewCtrl', function(socket, $scope, CrewService, Auth, $state) {

    $scope.newCrew = {
      name: '',
      crewImgUrl: '',
      leader: {},
      users: [],
      applicants:[],
      crewMessages:[],
      gameSuggestions:[]
    };

    Auth.getCurrentUser(function(user){
      $scope.me = user;
    });

    $scope.createCrew = function(){
      if($scope.newCrew.name.length>0 && $scope.newCrew.crewImgUrl.length>0){

        $scope.newCrew.leader = { _id: $scope.me._id};
        $scope.newCrew.users = [{ _id: $scope.me._id}];

        console.log($scope.newCrew);

        CrewService.save($scope.newCrew, function(crew){
          $state.go('crewdetails', {id:crew._id});
        });
      }
      console.log('hello2');
    };

  });
