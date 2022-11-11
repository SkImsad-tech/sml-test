# sml-test

This project is just nodejs blank server connected to mongo db.

Mongo supposed to be installed on port `27017` cause in config app tries to access it on address `localhost:27017` . You can start it yourself or use the one started by docker-compose.

## start app

command `yarn docker-compose`

default address: `http://localhost:3001`

This command will run 2 docker containers with mongodb and app. (also generate swagger docs)

## usage

The server accepts only 4 requests. You may see documentation by accessing address `http://localhost:3001/docs`

There you'll see all existing routes, request payloads examples and can try them out.

## dependencies

- node
- docker
- docker-compose
