# Engineering Practices

## Good Practices

1. Separate frontend and backend services are defined in `docker-compose.yml`, with explicit port mappings for local development.
2. `README.md` documents the local startup command, frontend URL, backend URL, and API docs URL.
3. `frontend/vite.config.ts` uses a Vite proxy for `/api`, keeping local frontend calls origin-relative by default.
4. `frontend/src/lib/financial-types.ts` defines explicit TypeScript domain types for financial movements and dashboard data.
5. `frontend/src/App.tsx` composes dashboard-specific components instead of placing all UI markup in one file.
6. `backend/app/routes.py` uses Pydantic models and `Literal` types to define API response shapes and constrained query values.
7. `backend/tests/test_routes.py` covers the main API endpoints and important filters.
8. `frontend/src/lib/financial-utils.test.ts` covers frontend financial calculation helpers.

## Bad Or Risky Practices

1. `backend/app/main.py` allows all CORS origins while also allowing credentials, which is risky outside local development.
2. `backend/app/routes.py` generates mock data on demand with `date.today()`, so the generated year range can shift over time.
3. `frontend/src/App.tsx` displays a hardcoded `2024 - Full Year` period while backend data is generated relative to the current date.
4. `backend/app/routes.py` combines models, route handlers, mock data generation, filtering, aggregation, comparison, and alert logic in one file.
5. The frontend computes KPIs and monthly summaries locally even though the backend also exposes summary-style endpoints, creating potential business logic drift.
6. `frontend/src/lib/mock-data.ts` contains sample data that is not used by the active dashboard fetch path, so it can drift from backend behavior.
7. `backend/requirements.txt` does not pin package versions, which may reduce backend environment reproducibility.

## Project 1 Handling

Project 1 records these practices only. Fixes for risky practices should be planned in later project phases.
