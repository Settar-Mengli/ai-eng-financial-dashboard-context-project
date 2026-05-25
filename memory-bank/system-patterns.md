# System Patterns

## Frontend Pattern

The frontend is a Vite React + TypeScript dashboard. `frontend/src/main.tsx` mounts `App`. `frontend/src/App.tsx` handles data loading and passes derived values into dashboard components.

Current component grouping:

- Dashboard components: `frontend/src/components/dashboard`.
- Shared UI components: `frontend/src/components/ui`.
- Financial types and calculations: `frontend/src/lib`.

## Backend Pattern

The backend is a FastAPI application. `backend/app/main.py` creates the app and includes a router from `backend/app/routes.py`.

`routes.py` currently combines:

- Pydantic response models.
- Literal type definitions.
- Mock financial movement generation.
- Filtering and aggregation helpers.
- API route handlers.

## Data Flow

1. The browser loads the Vite frontend on port `5173`.
2. `App.tsx` calls `/api/metrics`.
3. Vite proxies `/api` to `http://backend:8000` inside Docker Compose.
4. FastAPI returns generated financial movements.
5. The frontend computes KPIs and monthly chart series locally.
6. Recharts renders the income/outcome and profit margin charts.

## Testing Pattern

- Backend endpoint and helper coverage is in `backend/tests/test_routes.py`.
- Frontend financial calculation coverage is in `frontend/src/lib/financial-utils.test.ts`.
- Existing scripts and dependencies should be used before introducing new tooling.
