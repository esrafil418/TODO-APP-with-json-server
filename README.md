# TODO App (with json-server)

A lightweight To‑Do web app built with plain JavaScript, Vite and Tailwind, using `json-server` as a simple REST backend for persisting tasks.

This repository provides a small single‑page app that demonstrates CRUD operations (Create, Read, Update, Delete) against a local JSON server (`db.json`). It is intended as a learning/demo project and a quick starter for small task apps.

**Key features**

- **Create tasks**: Add a task with name, details, priority, status and deadline.
- **Read tasks**: Tasks are loaded from `json-server` and displayed in a table.
- **Update tasks**: Edit a task using the modal — updates are sent with PUT.
- **Delete tasks**: Remove tasks using DELETE.

**Quick start**

Prerequisites: `node` (v14+) and `npm` on your machine.

1. Install dependencies

```powershell
npm install
```

2. Start the development server and the JSON API (the project `package.json` provides a `start` script that runs both concurrently):

```powershell
npm run start
```

This runs:

- Vite dev server (frontend) — default port shown by Vite (commonly `5173`).
- `json-server` (API) on `http://localhost:5000` (configured in `package.json`).

Open the app in your browser at the Vite URL (e.g. `http://localhost:5173`) and use the UI.

API (json-server)

- Base URL: `http://localhost:5000` (see `src/constant/base.js`)
- Endpoints:
  - `GET /tasks` — list tasks
  - `POST /tasks` — create task (body: JSON task object)
  - `PUT /tasks/:id` — update task
  - `DELETE /tasks/:id` — delete task

Example curl usage:

```bash
curl http://localhost:5000/tasks

curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d '{"id":"1","name":"Buy milk","details":"2 liters","priority":"low","status":"todo","deadline":"2025-12-01"}'

curl -X PUT http://localhost:5000/tasks/1 -H "Content-Type: application/json" -d '{"id":"1","name":"Buy milk","details":"3 liters","priority":"low","status":"doing","deadline":"2025-12-02"}'

curl -X DELETE http://localhost:5000/tasks/1
```

Project structure (important files)

- `index.html` — app entry HTML (Vite)
- `src/main.js` — app bootstrap (wires UI and API)
- `src/app` — optional app-level modules (if present)
- `src/components` — UI components (header, modal, table, etc.)
- `src/api` — modular API wrappers used by the UI:
  - `saveTask.js` — `loadTasks()` and `saveTask()` (GET/POST)
  - `updateTask.js` — `updateTask()` (PUT)
  - `removeTask.js` — `removeTask()` (DELETE)
- `src/constant/base.js` — API base URL
- `db.json` — JSON server database (persisted data for `json-server`)

Notes & Tips

- If you change the `json-server` port, update `src/constant/base.js` accordingly.
- To re-seed the database reset the `db.json` file.

Contributing

- This is a small demo repo — feel free to open issues or submit PRs that:
  - Fix inconsistencies between `name` and `taskName` usage
  - Improve component modularity
