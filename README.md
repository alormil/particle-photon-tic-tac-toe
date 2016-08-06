# particle-photon-tic-tac-toe
This project will create a visual scoreboard with Particle Photon for a browser Tic-Tac-Toe game.
There are 3 aspects to this project :

- A REST API that will light the appropriate LED light on the particle photon
- A REST API that will close all the LED lights on the particle photon
- A browser based Tic Tac Toe game (For this i used the source code from @Mostafa-Samir & @mathew3)

You can view the source code I used from :
https://github.com/Mostafa-Samir/Tic-Tac-Toe-AI
https://github.com/mathew3/Tic-Tac-Toe-AI

### How do I get set up? ###

1. Make sure you have Node JS installed (Download here: https://nodejs.org/en/download/current/)
2. Setup your Particle Photon by following these instructions : https://github.com/alormil/nodesummit2016/blob/master/README.md
3. Clone the repo into chosen directory and move to that directory
4. Run the following commands
```
npm install
npm start
```
5. Open the tic-tac-toe/index.html using your web browser

Now once you start playing the game, as you or the AI win games, a LED light should light up if you followed all the steps correctly.
Once a player reaches 6 wins, the game will reset and so will the LED lights.

* Dependencies

All the package dependencies are located in package.json file

## Authors
Alain Lormil created the IPA Rest API.
The idea for this project came from attending the 2016 Node Summit, so the examples for the particle photon come from Bryan Hughes, and the Tic-Tac-Toe game comes from Mostafa Samir & Matej Murín.

## License
Copyright (c) 2015 Alain Lormil  
Licensed under the MIT license.