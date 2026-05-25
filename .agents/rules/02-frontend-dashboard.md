# Frontend Dashboard Rules

## Evidence Anchors

- `frontend/src/main.tsx` imports `App` and renders it into `#root`.
- `frontend/src/App.tsx` imports `DashboardHeader`, `KPIRow`, `IncomeOutcomeChart`, and `ProfitPercentChart`.
- `frontend/src/App.tsx` fetches `${API_BASE_URL}/api/metrics`.
- `frontend/vite.config.ts` configures the `@` alias to `frontend/src` and proxies `/api` to `http://backend:8000`.
- `frontend/src/lib/financial-types.ts` defines the dashboard data types.
- `frontend/src/lib/financial-utils.ts` computes KPIs and monthly chart data from financial movements.

## Rules

- Treat `frontend/src/main.tsx` as the React entry point and `frontend/src/App.tsx` as the current dashboard orchestration layer.
- Keep dashboard-specific components in `frontend/src/components/dashboard`.
- Keep reusable UI primitives in `frontend/src/components/ui`.
- Keep shared financial types and calculations in `frontend/src/lib`.
- Use the existing `@` import alias for source imports.
- Preserve the current API communication pattern unless a later project explicitly changes it: `VITE_API_BASE_URL` defaults to an empty string and Vite proxies `/api`.
- Do not introduce new frontend runtime behavior during Project 1 documentation work.
