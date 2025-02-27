# Nooro Task Tracker API

This is a simple Express application built with TypeScript. It serves as a starting
point for building web applications using Express.

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
├── prisma                    # Prisma directory for database schema and seed
│   ├── schema.prisma         # Prisma schema file
│   ├── seed.ts               # Seed script for populating the database
│   └── tsconfig.json         # TypeScript configuration for Prisma
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
- `GET /api/tasks/:id` - Retrieve a task by ID
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Partially update a task by ID
- `DELETE /api/tasks/:id` - Delete a task by ID
