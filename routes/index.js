const fs = require('fs');

module.exports = function route(server) {
    fs.readdirSync('./routes').forEach((file) => {
        if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
            // eslint-disable-line global-require
            require(`./${file.replace('.js', '')}`)(server);// eslint-disable-line global-require
        }
    });
};
