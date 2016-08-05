// Defining required packages
const Particle = require('particle-api-js');
const sqlite3 = require('sqlite3').verbose();

// Setting Particle information in order to connect to device
const DEVICE_ID = '220021000147353138383138';
const ACCESS_TOKEN = 'fc5a27992f0ff920dc63a1d219cf6f9a9e72eb88';
const particle = new Particle();
const db = new sqlite3.Database('ressources/results.db');

module.exports = function win(server) {
    // API endpoint when player wins a game
    server.get('/win/:player', (req, res) => {
        res.send(`Player ${req.params.player.toLowerCase()} Wins !`);
        // In the case Player X wins, we retrieve his number of wins
        // and light the LED light accordingly
        if (req.params.player.toLowerCase() === 'x') {
            db.each('SELECT wins FROM results WHERE player_id=1', (err, row) => {
                particle.callFunction({
                    deviceId: DEVICE_ID,
                    name: 'set_color',
                    argument: `0${row.wins}255000255`,
                    auth: ACCESS_TOKEN,
                }).then(
                    (data) => {
                        // Once the LED has been lit we also update the database
                        console.log('Function called succesfully:', data);
                        db.run('UPDATE results SET wins=wins+1 WHERE player_id=1');
                    },
                    (error) => {
                        console.log('An error occurred:', error);
                    });
            });
        }
        else {
            // In the case Player O wins, we retrieve his number of wins
            // and light the LED light accordingly
            db.each('SELECT wins FROM results WHERE player_id=2', (err, row) => {
                let led = '';
                if (row.wins === 0) {
                    led = '10';
                }
                else {
                    const x = 10 - row.wins;
                    led = `0${x}`;
                }

                particle.callFunction({
                    deviceId: DEVICE_ID,
                    name: 'set_color',
                    argument: `${led}255000255`,
                    auth: ACCESS_TOKEN,
                }).then(
                    (data) => {
                        // Once the LED has been lit we also update the database
                        console.log('Function called succesfully:', data);
                        db.run('UPDATE results SET wins=wins+1 WHERE player_id=2');
                    },
                    (error) => {
                        console.log('An error occurred:', error);
                    });
            });
        }
    });
};

