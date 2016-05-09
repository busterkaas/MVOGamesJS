/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Game from '../api/game/game.model';
import Crew from '../api/crew/crew.model';
import Order from '../api/order/order.model';

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        _id: '5726edd9ea894ae41c83091e',
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        _id: '5726f33e735f71fc0ab92ca3',
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      }, {
        _id: '57304deab36dc6042532eecg',
        firstName: 'Tasin',
        lastName: 'Akdeniz',
        bDay: 2016,
        addresses: [{
          city: 'Varde',
          zipCode: 1234,
          streetName: 'Vardevej',
          houseNumber: '123'
        }],
        phoneNumber: 99887766,
        provider: 'local',
        name: 'Tasin',
        email: 'tasin@mvo.com',
        password: 'tasin'
      }, {
        _id: '5726edd9ea894ae41c83091a',
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
      }, {
        _id: '5726edd9ea894ae41c83091d',
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
      }, {
        _id: '5726edd9ea894ae41c83091f',
        firstName: 'Hardy',
        lastName: 'Drachmann',
        bDay: 1981,
        addresses: [{
          city: 'Esbjerg',
          zipCode: 6700,
          streetName: 'Stormgade',
          houseNumber: '18, 3.th'
        }],
        phoneNumber: 123456789,
        provider: 'local',
        name: 'Hardy',
        email: 'hardy@mvo.com',
        password: 'hardy'
      }, {
        _id: '5726edd9ea894ae41c83091j',
        firstName: 'Buster',
        lastName: 'Kaas',
        bDay: 1980,
        addresses: [{
          city: 'KBH',
          zipCode: 3000,
          streetName: 'KillerG',
          houseNumber: '5'
        }],
        phoneNumber: 25236584,
        provider: 'local',
        name: 'Buster',
        email: 'buster@mvo.com',
        password: 'buster'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
var gameArray = [];
Game.find({}).removeAsync()
  .then(() => {
    for (var i = 1; i < 80; i++) {
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
          platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"

        }, {
          name: 'PC',
          price: 350,
          stock: 160,
          platformImgUrl: "http://i.imgur.com/7ZQgwGH.png"
        }],
        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        }, {
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
          platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        }, {
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
          platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Action'
        }, {
          name: 'Shooting'
        }]
      });
    }
    Game.createAsync(gameArray)
      .then(() => {
        console.log('finished populating games');
      });

    //This is one game for test order and crews.
    Game.createAsync({
        _id: '5726edd9eah7kj341c83091e',
        title: 'Rocket league',
        info: 'Very very nice game',
        releaseDate: new Date(2000, 1, 1),
        coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg',
        trailerUrl: 'https://youtu.be/hT21dzS-IQ4',

        platforms: [{
          _id: '57286c95135cdd18167957fb',
          name: 'PC',
          price: 450,
          stock: 10,
          platformImgUrl: "http://images.vectorhq.com/images/previews/a55/xbox-one-logo-psd-413264.png"
        }, {
          _id: '57286c95135cdd18167957fa',
          name: 'Playstation 4',
          price: 300,
          stock: 3,
          platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"
        }],

        genres: [{
          name: 'Racing'
        }, {
          name: 'Action'
        }]
      })
      .then(() => {
        console.log('finished populating one game for testing with specific _id');
      });

    Order.find({}).removeAsync()
      .then(() => {
        Order.createAsync({
          date: new Date(2016, 1, 1),
          comment: 'This is a test order',

          orderlines: [{
            amount: 5,
            game: {
              _id: '5726edd9eah7kj341c83091e'
            },

            platform: {
              name: 'Playstation 4',
              price: 400,
              stock: 3,
              platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"

            }
          }]

        }, {
          date: new Date(2009, 3, 6),
          comment: 'this is a comment.. blaah',

          orderlines: [{
            amount: 3,
            game: {
              _id: '5726edd9eah7kj341c83091e'
            },

            platform: {
              name: 'Playstation 4',
              price: 400,
              stock: 3,
              platformImgUrl: "http://oi63.tinypic.com/21e3og6.jpg"

            }
          }]
        })
      })
      .then(() => {
        console.log('finished populating orders');
      });

    Crew.find({}).removeAsync()
      .then(() => {
        Crew.createAsync({
            name: 'SOB',
            crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
            leader: '5726edd9ea894ae41c83091f',
            users: [{
              _id: '5726edd9ea894ae41c83091f'
            }, {
              _id: '5726edd9ea894ae41c83091a'
            }],
            applicants: [{
              _id: '5726edd9ea894ae41c83091j'
            }, {
              _id: '5726edd9ea894ae41c83091d'
            }, {
              _id: '57304deab36dc6042532eecg'
            }],
            gameSuggestions: [{
              discount: 0,
              expiration: new Date(2017, 10, 10),
              game: {
                _id: '5726edd9eah7kj341c83091e'
              },
              users: [{
                _id: '5726edd9ea894ae41c83091f',
                confirmed: 'false'
              }, {
                _id: '5726edd9ea894ae41c83091j',
                confirmed: 'true'
              }]
            }]
          }, {
            name: 'Esbjerg Homies',
            crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
            leader: '5726edd9ea894ae41c83091a',
            users: [{
              _id: '5726edd9ea894ae41c83091f'
            }, {
              _id: '5726edd9ea894ae41c83091d'
            }, {
              _id: '5726edd9ea894ae41c83091a'
            }, {
              _id: '57304deab36dc6042532eecg'
            }],
            applicants: [{
              _id: '5726edd9ea894ae41c83091j'
            }],
            gameSuggestions: [{
              discount: 0,
              expiration: new Date(2017, 10, 10),
              game: {
                _id: '5726edd9eah7kj341c83091e'
              },
              users: [{
                _id: '5726edd9ea894ae41c83091f',
                confirmed: 'false'
              }, {
                _id: '5726edd9ea894ae41c83091j',
                confirmed: 'true'
              }]
            }]
          }, {
            name: 'MVO',
            crewImgUrl: 'http://prod.cloud.rockstargames.com/crews/sc/1510/10088/publish/emblem/emblem_128.png',
            leader: '5726edd9ea894ae41c83091a',
            users: [{
              _id: '5726edd9ea894ae41c83091f'
            }, {
              _id: '5726edd9ea894ae41c83091d'
            }, {
              _id: '5726edd9ea894ae41c83091a'
            }],
            applicants: [{
              _id: '5726edd9ea894ae41c83091j'
            }],
            gameSuggestions: [{
              _id: '5726edd9eah7kj341c83091e',
              discount: 0,
              expiration: new Date(2017, 10, 10),
              users: [{
                _id: '5726edd9ea894ae41c83091f',
                confirmed: 'false'
              }, {
                _id: '5726edd9ea894ae41c83091j',
                confirmed: 'true'
              }]
            }]
          })
          .then(() => {
            console.log('finished populating crews');
          });
      });


  });