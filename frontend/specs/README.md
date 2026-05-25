# Frontend Specs

Project 2 is specification-only. Files in this folder document future dashboard contracts and behavior; they must not be imported into runtime frontend code yet.

## Files

- `api-types.ts`: spec-only DTOs and endpoint path names based on `backend/app/routes.py`.
- `param-types.ts`: spec-only query parameter types and validation rules based on backend route params.
- `components.md`: proposed component behavior for date range filtering, anomaly alerts, and B2B vs B2C comparison.
- `README.md`: overview and feature-to-endpoint map.

## Source Evidence

- `frontend/src/App.tsx` currently fetches `${API_BASE_URL}/api/metrics`.
- `frontend/src/App.tsx` computes KPIs and monthly chart data locally with `frontend/src/lib/financial-utils.ts`.
- `frontend/src/components/dashboard` contains the existing dashboard UI pieces.
- `frontend/vite.config.ts` proxies `/api` to `http://backend:8000`.
- `backend/app/main.py` creates `FastAPI(title="Financial Metrics API")` and does not disable the default docs route.
- `backend/app/routes.py` defines response models and route decorators for the metrics endpoints.
- `backend/tests/test_routes.py` verifies date filtering, segment filtering, facets, summaries, top categories, comparisons, and alerts.

## Feature To Endpoint Map

| Feature | Backend endpoints | Notes |
| --- | --- | --- |
| Date range filter | `/api/metrics`, `/api/metrics/summary`, `/api/metrics/facets` | `start_date` and `end_date` are optional and inclusive where supported. Facets provide backend min and max dates. |
| Anomaly alerts table | `/api/metrics/alerts` | Supports `threshold`, `group_by`, optional date range, and optional `business_type`. |
| B2B vs B2C comparison view | `/api/metrics/summary`, `/api/metrics/comparison`, `/api/metrics/b2b`, `/api/metrics/b2c` | Summary and comparison accept `business_type`; segment endpoints return movement-level records. |

## Shared Validation Rules

- Dates should be ISO `YYYY-MM-DD` strings.
- `start_date` after `end_date` is a frontend validation error for future implementation.
- `/api/metrics/comparison` requires both dates.
- `threshold` must be greater than or equal to `0`.
- Top category `limit` must be between `1` and `20`.
- Enum params must match backend values exactly.
- Empty arrays are valid responses and should map to empty UI states.
- Backend mock data is generated relative to `date.today()`, so specs should avoid fixed-year promises.

## Non-Goals For Project 2

- No React components.
- No API calls in app code.
- No imports from `frontend/specs` into `frontend/src`.
- No backend implementation changes.
- No Docker, package, dependency, test, or runtime config changes.
