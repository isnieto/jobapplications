# Applications tracking database

Backend for app tracking job applications

## Tech/framework used

<b>Built with</b>

- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Prisma](https://www.prisma.io//)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. Install Node 14 or later. You can use the package manager of your choice.
2. Clone this repository.
3. Run 'npm i' to install the dependencies.
4. Create file `.env`
5. Run 'npm start' to start the badge server and the frontend dev server.
6. API server can be tested with Postman. For routes see "Features".

## Features

Methods Urls Actions

- POST /auth/signup > Signup new Player
- POST /auth/signin > Login for Players (required authorization token)
- PUT /players > Update/Modify the name of an existing
- POST /players/{id}/games/ > A player plays one round.
- DELETE /players/{id}/games > Delete all rounds of a player
- GET /players/ > Retrieve the list of all players
- GET /players/{id}/games > Retrieve a list with all games and results of a player
- GET /players/ranking/all > Retrieve the ranking of all players and their average pencentage
- GET /players/ranking/loser > Retrieve best player average pencentage
- GET /players/ranking/winner > Retrieve worst player average pencentage


## Project structure

The project try to implement best practices following the following structure:

<p align="center">
    <img src="https://github.com/isnieto/node-prisma-postgresql/blob/main/public/mvc_express.png">
</p>

- `server.js` - The entry point to our backend application. This file defines our express server and connects it to Postgresql database using Prisma. It also requires the routes and models we'll be using in the application.
- `api/` - This folder contains all controller, authentication and game, and corresponding routes data
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `models/` - This folder contains the schema definitions for our mongoose and player model..
- `middleware/` - This folder contains the authorization and authentication to get access to the API.
- `services/` - This folder contains functions for the game play and for ranking.
- `db/` - All files related to the database

## Related projects
