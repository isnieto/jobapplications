# Job application database

## Description

The goal of this project is to build an application to collect sistematically all data related to my job applications.

### Table of Contents.

    - [Tech/framework](#tech)
    - [Project structure](#project)
    - [Api Design](#api)

## Installation

1. Install Node 14 or later. You can use the package manager of your choice.
2. Clone this repository.
3. Run 'npm i' to install the dependencies.
4. Create file `.env`
5. Run 'npm start' to start the badge server and the frontend dev server.
6. API server can be tested with Postman. For routes see "Features".

Usage: The next section is usage, in which you instruct other people on how to use your project after they’ve installed it. This would also be a good place to include screenshots of your project in action.

## Tech/framework

<b>Built with</b>

- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Prisma](https://www.prisma.io//)
- [PostgreSQL](https://www.postgresql.org/)

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

## API Design

The API has been designed following REST API conventions and recommended best practices[<a href="https://betterprogramming.pub/22-best-practices-to-take-your-api-design-skills-to-the-next-level-65569b200b9">more info</a>]:

- Use Noun in URI: for example instead of /createUser, better /user
- Use preferly plurals: instead of GET /users/123, better: POST/users
- HTTP verb should define action. HTTP verbs (GET, POST, PUT, DELETE) define the action to be performed on a resource.

By the moment, there are just two resources sets implemented.
First, companies:

- GET /companies/ > Return the list of all companies
- GET /companies/{id} > Return a specific company
- POST /companies/company > Add new company
- PATCH /companies/company > Update/Modify data of a specific company
- DELETE /companies/{id} > Delete a specific company from database

Second, applications:

- GET /applications/ > Return the list of all applications
- GET /applications/{id} > Return a specific application
- POST /applications/application > Add new application
- PATCH /applications/application > Update/Modify data of a specific application
- DELETE /applications/{id} > Delete a specific application

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

Contributing: Larger projects often have sections on contributing to their project, in which contribution instructions are outlined. Sometimes, this is a separate file. If you have specific contribution preferences, explain them so that other developers know how to best contribute to your work. To learn more about how to help others contribute, check out the guide for setting guidelines for repository contributors.

Credits: Include a section for credits in order to highlight and link to the authors of your project.

License: Finally, include a section for the license of your project. For more information on choosing a license, check out GitHub’s licensing guide!

### Api
