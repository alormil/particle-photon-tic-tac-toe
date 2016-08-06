// Defining required packages
const Particle = require('particle-api-js');
const sqlite3 = require('sqlite3').verbose();

// Setting Particle information in order to connect to device
const DEVICE_ID = '220021000147353138383138';
const ACCESS_TOKEN = 'fc5a27992f0ff920dc63a1d219cf6f9a9e72eb88';
const particle = new Particle();

// This loop will connect to the particle and close all the led light colors
const LED_LIGHTS = 11;
for (let index = 0; index < LED_LIGHTS; index++) {
    particle.callFunction({
        deviceId: DEVICE_ID,
        name: 'set_color',
        argument: `0${index}000000000`,
        auth: ACCESS_TOKEN,
    }).then(
        (data) => {
            console.log('Function called succesfully:', data);
        },
        (err) => {
            console.log('An error occurred:', err);
        });
}

// Finally we reset the counter of wins of all players in the SQLite DB
const db = new sqlite3.Database('resources/results.db');
db.run('UPDATE results SET wins=0 WHERE player_id=1');
db.run('UPDATE results SET wins=0 WHERE player_id=2');

