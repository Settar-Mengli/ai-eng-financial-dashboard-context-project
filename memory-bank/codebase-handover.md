# Codebase Handover

## Root Structure

- `AGENTS.md`: agent guidance requiring checks of `.agents/rules`, `.agents/skills`, and `memory-bank`.
- `README.md` and `README.es.md`: project overview and local run instructions.
- `docker-compose.yml`: defines `frontend` and `backend` services.
- `frontend`: Vite React + TypeScript dashboard.
- `backend`: FastAPI application and tests.

## Frontend

- Entry point: `frontend/src/main.tsx`.
- Main dashboard shell: `frontend/src/App.tsx`.
- Dashboard components: `frontend/src/components/dashboard`.
- Shared UI primitives: `frontend/src/components/ui`.
- Financial types and utilities: `frontend/src/lib`.

`App.tsx` fetches financial movements, computes KPIs with `computeKPIs`, computes monthly chart data with `computeMonthlyData`, and renders the header, KPI row, income/outcome chart, and profit margin chart.

## Backend

- App entry point: `backend/app/main.py`.
- Routes and business logic: `backend/app/routes.py`.
- Backend tests: `backend/tests/test_routes.py`.

`main.py` creates the FastAPI app, configures CORS, and includes the router from `app.routes`. `routes.py` defines Pydantic response models, generated mock data, filtering helpers, summaries, comparisons, alerts, and endpoint handlers.

## API Endpoints

Defined in `backend/app/routes.py`:

- `GET /health`
- `GET /api/metrics`
- `GET /api/metrics/facets`
- `GET /api/metrics/summary`
- `GET /api/metrics/categories/top`
- `GET /api/metrics/comparison`
- `GET /api/metrics/alerts`
- `GET /api/metrics/b2b`
- `GET /api/metrics/b2c`

## Frontend To Backend Communication

- `frontend/src/App.tsx` defines `API_BASE_URL` from `import.meta.env.VITE_API_BASE_URL ?? ""`.
- `frontend/src/App.tsx` fetches `${API_BASE_URL}/api/metrics`.
- `frontend/vite.config.ts` proxies `/api` to `http://backend:8000`.
- `frontend/.env.example` documents `VITE_API_BASE_URL` as an optional override.

## Documentation Status

At the start of Project 1 implementation, `.agents/rules`, `.agents/skills`, and `memory-bank` were absent. This documentation pass initializes `.agents/rules` and `memory-bank`.
