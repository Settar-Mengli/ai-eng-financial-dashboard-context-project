# Dashboard Feature Component Specs

Project 2 is specification-only. This document describes future dashboard behavior without building React components, adding API calls, or modifying existing files in `frontend/src`.

## Evidence From Current Code

- `frontend/src/App.tsx` currently fetches `/api/metrics`, computes KPIs and monthly chart data locally, and renders `DashboardHeader`, `KPIRow`, `IncomeOutcomeChart`, and `ProfitPercentChart`.
- Existing dashboard components live in `frontend/src/components/dashboard`.
- `frontend/vite.config.ts` proxies `/api` to `http://backend:8000`.
- Backend contracts are defined in `backend/app/routes.py`.

## DateRangeFilter

Purpose: let users constrain home dashboard metrics and charts by an inclusive date range.

Data dependencies:

- `/api/metrics?start_date&end_date`
- `/api/metrics/summary?start_date&end_date&group_by`
- `/api/metrics/facets` for `min_date` and `max_date`

Expected state and props for future implementation:

- `startDate?: string`
- `endDate?: string`
- `minDate?: string`
- `maxDate?: string`
- `disabled?: boolean`
- `onChange(nextRange)`
- `onClear()`

Validation rules:

- Dates must be ISO `YYYY-MM-DD`.
- `startDate` must be before or equal to `endDate` when both are set.
- Missing `startDate` or `endDate` is allowed for endpoints that accept optional date filters.
- Date filters are inclusive, based on backend date filtering and route tests.

States:

- Loading: controls disabled while facet bounds or filtered data are loading.
- Empty: filtered dashboard data can be empty and should not be treated as an error.
- Error: invalid local date range should be shown before any future request is made.

Acceptance criteria:

- Selected range updates the dashboard period label and all range-aware dashboard data in a future implementation.
- Clear action returns the dashboard to the unfiltered state.
- Invalid ranges block future fetches and show a validation message.

## AnomalyAlertsTable

Purpose: show outcome anomaly candidates returned by the backend alerts endpoint.

Data dependency:

- `/api/metrics/alerts?threshold&group_by&start_date&end_date&business_type`

Expected row fields:

- `period`
- `outcome_total`
- `baseline_average`
- `increase_ratio`

Expected state and props for future implementation:

- `alerts: MetricsAlert[]`
- `loading?: boolean`
- `error?: string | null`
- `threshold: number`
- `groupBy: "day" | "week" | "month"`
- `businessType?: "B2B" | "B2C"`

Validation rules:

- `threshold` must be greater than or equal to `0`.
- `groupBy` must be `day`, `week`, or `month`.
- Date range rules match `DateRangeFilter` when date params are supplied.

States:

- Loading: show table skeleton or pending state.
- Empty: show a non-error empty state when the alerts response is an empty array.
- Error: show backend or validation error without hiding the rest of the dashboard.

Acceptance criteria:

- Table displays formatted period, outcome total, baseline average, and increase ratio.
- Empty alerts response displays a clear no-alerts state.
- The table can share the active date range and business type filters in a future implementation.

## BusinessTypeComparisonView

Purpose: compare B2B and B2C financial performance on the home dashboard.

Data dependencies:

- `/api/metrics/summary?business_type=B2B`
- `/api/metrics/summary?business_type=B2C`
- `/api/metrics/comparison?start_date&end_date&business_type=B2B`
- `/api/metrics/comparison?start_date&end_date&business_type=B2C`
- `/api/metrics/b2b` and `/api/metrics/b2c` for movement-level drilldown if needed later

Expected state and props for future implementation:

- `range: { startDate: string; endDate: string }`
- `b2bSummary: MetricsSummaryItem[]`
- `b2cSummary: MetricsSummaryItem[]`
- `b2bComparison?: MetricsComparison`
- `b2cComparison?: MetricsComparison`
- `loading?: boolean`
- `error?: string | null`

Validation rules:

- `/api/metrics/comparison` requires both `start_date` and `end_date`.
- `business_type` must be `B2B` or `B2C`.
- `delta_pct` can be `null` when previous-period net is zero.

States:

- Loading: comparison cards or table rows show pending state.
- Empty: missing segment data should render an empty comparison state, not a crash.
- Error: comparison errors should be scoped to this view.

Acceptance criteria:

- B2B and B2C values are visually comparable for the same date range and grouping.
- Null `delta_pct` is displayed as unavailable rather than `0%`.
- Segment labels and calculations stay aligned with backend `business_type` values.

## Implementation Boundaries

- Do not create React components during Project 2.
- Do not add fetch helpers or app code API calls during Project 2.
- Do not modify `frontend/src/App.tsx` or existing dashboard components during Project 2.
- Do not modify backend routes or tests during Project 2.
