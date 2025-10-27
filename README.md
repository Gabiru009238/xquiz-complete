# FunilMaker — Minimal Starter (Frontend + Backend)

This is a lightweight starter project to run a basic quiz funnel locally.
It contains:
- frontend/ (React + Vite) — quiz UI
- backend/  (Node + Express) — API to collect responses (stores to JSON file)

## Quickstart (local)
1. Install Node.js (v16+ recommended)
2. Open two terminals.

Backend:
```bash
cd FunilMaker/backend
npm install
npm run dev
```
Frontend:
```bash
cd FunilMaker/frontend
npm install
npm run dev
```
Frontend runs on port 5173 (Vite). Backend runs on port 4000.

The demo quiz will POST collected answers to `http://localhost:4000/api/collect`.

## What to edit
- `frontend/src/App.jsx` — quiz JSON and UI
- `backend/data/responses.json` — saved responses (auto-created)

## Next steps (suggested)
- Replace backend JSON storage with SQLite / Postgres + ORM (Prisma)
- Add authentication and user accounts
- Build the drag-and-drop builder (react-flow)

If you want, I can walk you step-by-step running this on your machine.
