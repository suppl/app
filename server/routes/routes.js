'use strict';

const Get = require('./get');

module.exports = {
    init: (app) => {

        // app.post('/api/game', Post.game);


        // app.get('/api/game/:gameId', Get.game);
        // app.get('/api/games', Get.games);
        // app.get('/api/*', Get.index);

        app.get('*', Get.index);
    }
};
