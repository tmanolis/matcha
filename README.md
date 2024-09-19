# Matcha

This project contains a web application with a React frontend, a Node.js backend using the Nitro framework, a PostgreSQL database, and pgAdmin for database management.

## Prérequis

- Docker
- Docker Compose

## Configuration

1. Create a `.env` file at the root of the project based on the `.env.example` template.
2. Fill in the `.env` file with your own values for the environment variables.

## Starting Services

To start all services using Docker Compose, run:
```bash
make
```
OR
```
make start-docker
```
To run the backend and frontend locally (without Docker), run:
```bash
make start-local
```

## Accessing Services

- Frontend : http://localhost:5173
- Backend : http://localhost:3000
- pgAdmin : http://localhost:5050
  - Use the email and password set in the `.env` file.

## Connecting to the Database via pgAdmin

1. Access pgAdmin at http://localhost:5050.
2. Log in with the credentials set in the `.env` file.
3. Add a new server with the following settings:
- Name: Choose any name
- Host: database
- Port: 5432
- Database, username, and password: As defined in the `.env` file.

## Stop or Cleaning Up Services
- To stop Docker containers, run:
```bash
make stop-docker
```
- To clean up node modules and Docker containers, run:
```bash
make clean
```
- To only clean the backend or frontend dependencies, you can run:

```bash
make clean-backend
```
OR
```bash
make clean-frontend
```
- To remove Docker containers and volumes only, use:
```bash
make docker-clean
```