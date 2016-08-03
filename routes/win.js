const Particle = require('particle-api-js');

const DEVICE_ID = '220021000147353138383138';
const ACCESS_TOKEN = 'fc5a27992f0ff920dc63a1d219cf6f9a9e72eb88';
const particle = new Particle();

module.exports = function win(server) {
    server.get('/win/:player', (req, res) => {
        res.send(`Player ${req.params.player} Wins !`);
        particle.callFunction({
            deviceId: DEVICE_ID,
            name: 'set_color',
            argument: '00255000255',
            auth: ACCESS_TOKEN,
        }).then(
            (data) => {
                console.log('Function called succesfully:', data);
            },
            (err) => {
                console.log('An error occurred:', err);
            });
    });
};
