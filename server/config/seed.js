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
        _id: '56e94071a98dc4d0042f5wwe',
        title: 'Battlefield 4',
        info: 'Be a soldier and compete against your opponents in this realistic war game',
        releaseDate: new Date(),
        coverUrl: 'http://static.europosters.cz/image/750/plakater/battlefield-4-cover-i14536.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

        platforms: [{
          name: 'Playstation 4',
          price: 400,
          stock: 3
        },
      {
      name: 'PC',
      price: 350,
      stock: 160
      }],
        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        },{
          name: 'Action'
      }]
      },
      {
        _id: '56e94071a98dc4d0042f5cad',
        title: 'GTA V',
        info: 'Go crazy ín los santos!! The city of oppotunities.',
        releaseDate: new Date(),
        coverUrl: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

        platforms: [{
          name: 'Playstation 4',
          price: 400,
          stock: 3
        }],

        genres: [{
          name: 'FPS'
        }, {
          name: 'Third Person'
        },{
          name: 'Action'
      }]
      }, {
        _id: '56e94071a98dc4d0042f5c00',
        title: 'Rainbow Six - Siege',
        info: 'Become an terrorist or fight the terrorrists in this new and exiting FPS game.',
        releaseDate: new Date(),
        coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
        trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

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
        },
        {
          name:'Action'
        }, {
          name: 'Shooting'
        }]
      }, {
          _id: '56e94071a98dc4d0042f3ga0',
          title: 'Battlefield 4',
          info: 'Be a soldier and compete against your opponents in this realistic war game',
          releaseDate: new Date(),
          coverUrl: 'http://static.europosters.cz/image/750/plakater/battlefield-4-cover-i14536.jpg',
          trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

          platforms: [{
            name: 'Playstation 4',
            price: 400,
            stock: 3
          },
        {
        name: 'PC',
        price: 350,
        stock: 160
        }],
          genres: [{
            name: 'FPS'
          }, {
            name: 'Third Person'
          },{
            name: 'Action'
        }]
        },
        {
          _id: '56e94071a98dc4d0042f3gad',
          title: 'GTA V',
          info: 'Go crazy ín los santos!! The city of oppotunities.',
          releaseDate: new Date(),
          coverUrl: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
          trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

          platforms: [{
            name: 'Playstation 4',
            price: 400,
            stock: 3
          }],

          genres: [{
            name: 'FPS'
          }, {
            name: 'Third Person'
          },{
            name: 'Action'
        }]
        }, {
          _id: '56e94071a98dc4d0042fl900',
          title: 'Rainbow Six - Siege',
          info: 'Become an terrorist or fight the terrorrists in this new and exiting FPS game.',
          releaseDate: new Date(),
          coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
          trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

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
          },
          {
            name:'Action'
          }, {
            name: 'Shooting'
          }]
        },{
            _id: '56e94071a98dc4d0042f1bwe',
            title: 'Battlefield 4',
            info: 'Be a soldier and compete against your opponents in this realistic war game',
            releaseDate: new Date(),
            coverUrl: 'http://static.europosters.cz/image/750/plakater/battlefield-4-cover-i14536.jpg',
            trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

            platforms: [{
              name: 'Playstation 4',
              price: 400,
              stock: 3
            },
          {
          name: 'PC',
          price: 350,
          stock: 160
          }],
            genres: [{
              name: 'FPS'
            }, {
              name: 'Third Person'
            },{
              name: 'Action'
          }]
          },
          {
            _id: '56e94071a98dc4d0042fm9ad',
            title: 'GTA V',
            info: 'Go crazy ín los santos!! The city of oppotunities.',
            releaseDate: new Date(),
            coverUrl: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
            trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

            platforms: [{
              name: 'Playstation 4',
              price: 400,
              stock: 3
            }],

            genres: [{
              name: 'FPS'
            }, {
              name: 'Third Person'
            },{
              name: 'Action'
          }]
          }, {
            _id: '56e94071a98dc4d0042f0f00',
            title: 'Rainbow Six - Siege',
            info: 'Become an terrorist or fight the terrorrists in this new and exiting FPS game.',
            releaseDate: new Date(),
            coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
            trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

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
            },
            {
              name:'Action'
            }, {
              name: 'Shooting'
            }]
          },
          {
              _id: '56e94071a98dc4d0042k3kwe',
              title: 'Battlefield 4',
              info: 'Be a soldier and compete against your opponents in this realistic war game',
              releaseDate: new Date(),
              coverUrl: 'http://static.europosters.cz/image/750/plakater/battlefield-4-cover-i14536.jpg',
              trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

              platforms: [{
                name: 'Playstation 4',
                price: 400,
                stock: 3
              },
            {
            name: 'PC',
            price: 350,
            stock: 160
            }],
              genres: [{
                name: 'FPS'
              }, {
                name: 'Third Person'
              },{
                name: 'Action'
            }]
            },
            {
              _id: '56e94071a98dc4d0042k8kad',
              title: 'GTA V',
              info: 'Go crazy ín los santos!! The city of oppotunities.',
              releaseDate: new Date(),
              coverUrl: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
              trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

              platforms: [{
                name: 'Playstation 4',
                price: 400,
                stock: 3
              }],

              genres: [{
                name: 'FPS'
              }, {
                name: 'Third Person'
              },{
                name: 'Action'
            }]
            }, {
              _id: '56e94071a98dc4d0042f6l10',
              title: 'Rainbow Six - Siege',
              info: 'Become an terrorist or fight the terrorrists in this new and exiting FPS game.',
              releaseDate: new Date(),
              coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
              trailerUrl: 'https://www.youtube.com/embed/JOddp-nlNvQ',

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
              },
              {
                name:'Action'
              }, {
                name: 'Shooting'
              }]
            })
      .then(() => {
        console.log('finished populating games');
      });
  });
