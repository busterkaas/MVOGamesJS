/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Game from '../api/game/game.model';
import Crew from '../api/crew/crew.model';

Crew.find({}).removeAsync()
  .then(() => {
    Crew.createAsync({
        name: 'SOB',
        crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png'
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
        _id:'5726edd9ea894ae41c83091e',
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      },{
        _id:'5726f33e735f71fc0ab92ca3',
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      },{
        _id:'5726edd9ea894ae41c83091a',
        firstName: 'Kennie',
        lastName: 'Anker',
        bDay: 1992,
        addresses: [{
        city: 'Esbjerg',
        zipCode: 6700,
        streetName: 'ST136',
        houseNumber: '136'
      }],
        phoneNumber: 20361212,
        provider: 'local',
        name: 'Kennie',
        email: 'kennie@mvo.com',
        password: 'kennie'
      },{
        _id:'5726edd9ea894ae41c83091d',
        firstName: 'Dennis',
        lastName: 'PP',
        bDay: 1991,
        addresses: [{
        city: 'Esbjerg',
        zipCode: 6700,
        streetName: 'ST108',
        houseNumber: '108'
        }],
        phoneNumber: 10101010,
        provider: 'local',
        name: 'Dennis',
        email: 'dennis@mvo.com',
        password: 'dennis'
      },{
        _id:'5726edd9ea894ae41c83091f',
        firstName: 'Hardy',
        lastName: 'Dragemand',
        bDay: 0,
        addresses: [{
        city: 'DeDust2',
        zipCode: 9999,
        streetName: 'A Long',
        houseNumber: '1'
      }],
        phoneNumber: 99999999,
        provider: 'local',
        name: 'Hardy',
        email: 'hardy@mvo.com',
        password: 'hardy'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
var gameArray = [];
Game.find({}).removeAsync()
  .then(() => {
      for (var i = 1; i < 80; i++){
        gameArray.push({
        title: 'Battlefield 4',
        info: 'Be a soldier and compete against your opponents in this realistic war game',
        releaseDate: new Date(2010, 10, 10),
        coverUrl: 'http://static.europosters.cz/image/750/plakater/battlefield-4-cover-i14536.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

        platforms: [{
          name: 'Playstation 4',
          price: 400,
          stock: 3,
          platformImgUrl:"http://oi63.tinypic.com/21e3og6.jpg"

        },
      {
      name: 'PC',
      price: 350,
      stock: 160,
      platformImgUrl: "http://i.imgur.com/7ZQgwGH.png"
      }],
        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        },{
          name: 'Action'
      }]
    });
    gameArray.push({
        title: 'GTA V',
        info: 'Go crazy ín los santos!! The city of oppotunities.',
        releaseDate: new Date(2012, 11, 11),
        coverUrl: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

        platforms: [{
          name: 'Playstation 4',
          price: 400,
          stock: 3,
          platformImgUrl:"http://oi63.tinypic.com/21e3og6.jpg"
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        },{
          name: 'Action'
      }]
    });
    gameArray.push({
        title: 'Rainbow Six - Siege',
        info: 'Become an terrorist or fight the terrorrists in this new and exiting FPS game.',
        releaseDate: new Date(2016, 1, 1),
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

        platforms: [{
          name: 'XBOX ONE',
          price: 450,
          stock: 100,
          platformImgUrl: "http://images.vectorhq.com/images/previews/a55/xbox-one-logo-psd-413264.png"
        }, {
          name: 'Playstation 4',
          price: 300,
          stock: 3,
          platformImgUrl:"http://oi63.tinypic.com/21e3og6.jpg"
        }],

        genres: [{
          name: 'FPS'
        },
        {
          name:'Action'
        }, {
          name: 'Shooting'
        }]
      });
    }
    Game.createAsync(gameArray)
      .then(() => {
        console.log('finished populating games');
      });
  });
