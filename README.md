# Nooro Task Tracker API

This is a simple Express application built with TypeScript. It serves as a starting point for building web applications using Express.

## Project Structure

```
Nooro Task Tracker API
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   ├── index.ts          # Index controller
│   │   └── taskController.ts # Task controller
│   ├── routes                # Contains route definitions
│   │   ├── index.ts          # Route setup
│   │   └── taskRoutes.ts     # Task routes
│   └── types                 # Type definitions
│       └── index.ts          # Custom types for requests and responses
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Running the Application

To start the application, use the following command:

```
npm start
```

## API Endpoints

### Tasks

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task by ID
- `DELETE /api/tasks/:id` - Delete a task by ID

## License

This project is licensed under the MIT License.
