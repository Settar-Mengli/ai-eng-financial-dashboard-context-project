/**
 * Specification-only query parameter contracts for the financial dashboard.
 *
 * Evidence source: backend/app/routes.py query parameters and constraints.
 * Date values are ISO YYYY-MM-DD strings. Backend date filtering is inclusive
 * for endpoints that accept start_date and end_date.
 */

import type { BusinessType, Category, GroupBy, OperationType } from "./api-types";

export type IsoDateString = string;

export interface DateRangeParams {
  start_date?: IsoDateString;
  end_date?: IsoDateString;
}

export interface MetricsParams extends DateRangeParams {
  category?: Category;
  operation_type?: OperationType;
}

export interface MetricsSummaryParams extends MetricsParams {
  group_by?: GroupBy;
  business_type?: BusinessType;
}

export interface TopCategoriesParams extends DateRangeParams {
  operation_type?: OperationType;
  limit?: number;
  business_type?: BusinessType;
}

export interface MetricsComparisonParams {
  start_date: IsoDateString;
  end_date: IsoDateString;
  business_type?: BusinessType;
}

export interface MetricsAlertsParams extends DateRangeParams {
  threshold?: number;
  group_by?: GroupBy;
  business_type?: BusinessType;
}

export interface SegmentMetricsParams extends DateRangeParams {
  category?: Category;
  operation_type?: OperationType;
}

/**
 * Type-only validation contract for future frontend implementations.
 *
 * - Dates use ISO YYYY-MM-DD strings.
 * - start_date must be before or equal to end_date when both are set.
 * - /api/metrics/comparison requires both start_date and end_date.
 * - group_by must be one of day, week, or month.
 * - threshold must be greater than or equal to 0.
 * - top category limit must be between 1 and 20.
 * - Invalid enum values are backend validation errors.
 */
export interface ParamValidationRules {
  dateFormat: "YYYY-MM-DD";
  dateRange: "start_date must be before or equal to end_date when both are set";
  comparisonDates: "start_date and end_date are required for /api/metrics/comparison";
  groupByValues: GroupBy[];
  threshold: "threshold must be greater than or equal to 0";
  topCategoryLimit: "limit must be between 1 and 20";
  enumHandling: "invalid enum values are backend validation errors";
}
