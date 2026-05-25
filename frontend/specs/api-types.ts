/**
 * Specification-only API contracts for the financial dashboard.
 *
 * Evidence source: backend/app/routes.py.
 * These types mirror the current FastAPI route models and must not be
 * imported into runtime frontend code until Project 2 moves from specs to
 * implementation.
 */

export type OperationType = "income" | "outcome";

export type Category =
  | "suppliers"
  | "sales"
  | "operational"
  | "administrative"
  | "others";

export type BusinessType = "B2B" | "B2C";

export type GroupBy = "day" | "week" | "month";

export type FinancialApiEndpoint =
  | "/health"
  | "/api/metrics"
  | "/api/metrics/facets"
  | "/api/metrics/summary"
  | "/api/metrics/categories/top"
  | "/api/metrics/comparison"
  | "/api/metrics/alerts"
  | "/api/metrics/b2b"
  | "/api/metrics/b2c";

export interface FinancialMovement {
  create_date: string;
  amount: number;
  operation_type: OperationType;
  category: Category;
  business_type: BusinessType;
}

export interface MetricsFacets {
  operation_types: OperationType[];
  business_types: BusinessType[];
  categories: Category[];
  min_date: string;
  max_date: string;
}

export interface MetricsSummaryItem {
  period: string;
  income: number;
  outcome: number;
  net: number;
}

export interface TopCategoryItem {
  category: Category;
  operation_type: OperationType;
  total_amount: number;
}

export interface MetricsComparison {
  current_period: number;
  previous_period: number;
  delta_abs: number;
  delta_pct: number | null;
}

export interface MetricsAlert {
  period: string;
  outcome_total: number;
  baseline_average: number;
  increase_ratio: number;
}

export interface HealthResponse {
  status: "ok";
}
