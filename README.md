# Tibber Assignment

## Setup
* Install dependencies `npm ci`
* Run the tests `npm test`
** Note that the tests will fail if the database is not set up **

* Start the server `npm start`
* Run the server in development mode `npm run dev`

* For pretty logging, pipe the output to `pino-pretty`: `npm start | npx pino-pretty`

## Docker
* Start the services `docker-compose up`
* Rebuild and start the services `docker-compose up --build`

## Database url
The application uses the `DATABASE_URL` environment variable to connect to the database.

## Testing the application with curl
```bash
curl -X POST http://localhost:5000/tibber-developer-test/enter-path -H "Content-Type: application/json" -d '{"start":{"x":10,"y":22},"commands":[{"direction":"east","steps":2},{"direction":"north","steps":1}]}'
```

## Dependencies
I used the following packages:
* Express as the web framework.
* Sequelize as the ORM.
* Vitest as the test framework.
* Supertest for testing the API.
* EsLint for linting.
* Pino for logging.
* TypeScript for type safety.
