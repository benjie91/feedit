# Setting up of Feedit Database with PostgreSQL using official docker image
This repository is used for setting up a working feedit database using the official postgres docker image file.

## Setup
- [Postgres 12.0](https://hub.docker.com/_/postgres/ "Postgres Official Docker Image")
- Docker 18.05.0-ce 
- Docker-compose 1.21.2

## Running it
- With the docker-compose file in the same directory,
    - To start, `docker-compose up -d` 
    - To stop, `docker-compose down `
    
## Removing previous version
- Stop the container
    - `docker stop 'containerid'`
- Show all container and remove container accordingly
    - `docker container ls --all`
    - `docker container rm 'containerid`
- Remove the image
    - `docker image ls --all`
    - `docker image rm 'imageid'`

## Configurations
Using this docker-compose file, the environment variables for the following are set:
- POSTGRES_DB: feedit
- POSTGRES_USER: feedit
- POSTGRES_PASSWORD: password

This will spawn a postgres instance with feedit as the main database. The default user will be 'feedit' and password will be 'password'.
