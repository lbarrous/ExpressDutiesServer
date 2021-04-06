#Quick Start
Go to the root of the project and

Launch docker containers (mongodb):
$ docker-compose up 

Install dependencies:
$ npm install

Start the server:
$ npm start
View the website at: http://localhost:9001 (Changes in server will automatically restart the server)

You will launch an express server in which a REST API is server to manage all CRUD operations about duties.

To take advantage of this server you will need to use the angular app made to use it (https://bitbucket.org/lbarrous/dutiesappangular/src/develop/)