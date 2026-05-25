# Backend API Rules

## Evidence Anchors

- `backend/app/main.py` creates `FastAPI(title="Financial Metrics API")`.
- `backend/app/main.py` adds permissive CORS middleware and includes `router` from `app.routes`.
- `backend/app/routes.py` defines the API router, Pydantic models, mock movement generation, filters, summaries, comparisons, alerts, and endpoint handlers.
- `backend/app/routes.py` uses `Literal` types for operation type, category, business type, and grouping values.
- `backend/tests/test_routes.py` exercises the health endpoint, metrics endpoints, filters, facets, summaries, top categories, comparison, and alerts.

## Rules

- Treat `backend/app/main.py` as the FastAPI application entry point.
- Treat `backend/app/routes.py` as the current owner of route definitions and metric business logic.
- Keep response shapes explicit with Pydantic models when adding or changing API behavior.
- Preserve the existing endpoint prefixes unless a later project intentionally revises the API contract.
- Do not assume a database exists; current data comes from generated mock movements in `backend/app/routes.py`.
- Add or update backend tests when backend behavior changes.
- Do not change backend runtime behavior during Project 1 documentation work.
