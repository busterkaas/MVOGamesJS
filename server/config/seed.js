/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Game from '../api/game/game.model';
import Crew from '../api/crew/crew.model';

Crew.find({}).removeAsync()
  .then(() => {
    Crew.createAsync({
        name: 'SOB',
        crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
      }, {
        name: 'Esbjerg Homies',
        crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
      }, {
        name: 'MVO Crew',
        crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
      })
      .then(() => {
        console.log('finished populating crews');
      });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'

      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });

Game.find({}).removeAsync()
  .then(() => {
    Game.createAsync({
        _id: '56e94071a98dc4d0042f5cad',
        title: 'Game example',
        info: 'This is some info about the game. It is a good game...',
        releaseDate: new Date(),
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Uncharted_4_box_artwork.jpg/260px-Uncharted_4_box_artwork.jpg',
        trailerUrl: 'thisIsATrailerUrl.dk',

        platforms: [{
          name: 'Playstation 4',
          price: 400,
          stock: 3
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Kvazi gaaaamse'
        }]
      }, {
        _id: '56e94071a98dc4d0042f5c00',
        title: 'Game example 2',
        info: 'This is some info about the game. It is a good game...',
        releaseDate: new Date(),
        coverUrl: 'http://allgames4.me/wp-content/uploads/2014/11/Battlefield-4.png',
        trailerUrl: 'thisIsATrailerUrl.dk',

        platforms: [{
          name: 'XBOX ONE',
          price: 450,
          stock: 100
        }, {
          name: 'Playstation 4',
          price: 300,
          stock: 3
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Kvazi gaaaamse'
        }]
      })
      .then(() => {
        console.log('finished populating games');
      });
  });
