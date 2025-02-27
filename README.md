# Nooro Task Tracker API

This is a simple Express application built with TypeScript. It serves as a starting
point for building web applications using Express.

## Project Structure

```bash
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

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/wormjim/nooro-task-tracker-api.git
cd project-name
```

### 2. Install dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### 3. Set up the database:

#### Starting MySQL

This project uses Docker to run a containerized version of MySQL After installing
docker, run `docker compose up` in the project root folder to initialize the MySQL DB

#### Migrating to Prisma

```bash
npx prisma migrate dev --name init
```

#### Seed MySQL (optional)

You have the option to seed the database after migrating the schema

```bash
npm run prisma:seed
```

## Running the Application

To start the application, use the following command:

```bash
npm start
```

## API Endpoints

### Using the tasks.rest File

The `tasks.rest` file contains predefined HTTP requests for testing the task-related API
endpoints. You can use this file with the REST Client extension in Visual Studio Code.

#### Installing the REST Client Extension

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on
   the side of the window or by pressing Ctrl+Shift+X.
3. Search for "REST Client" and install the extension by humao.
4. Alternatively, you can install it directly from the VS Code Marketplace.

#### Using the REST Client

1. Open the tasks.rest file located in the routes directory.
2. Click on the "Send Request" link above each HTTP request to execute the request.
3. The response will be displayed in a new tab within Visual Studio Code.

#### Tasks

- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/:id` - Retrieve a task by ID
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id` - Partially update a task by ID
- `DELETE /api/tasks/:id` - Delete a task by ID
