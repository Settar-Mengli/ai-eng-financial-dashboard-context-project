---
name: financial-dashboard-quality
description: Targeted quality improvements for this financial dashboard repository. Use when reviewing or improving the existing React dashboard or FastAPI context for accessibility, React async/effect safety, validation discipline, and project memory updates without implementing new features.
---

# Financial Dashboard Quality

Use this skill for targeted quality improvements only. Do not use it to implement new dashboard features, add endpoints, redesign the app, or change project architecture.

## Start With Context

Before editing, read:

- `AGENTS.md`
- `.agents/rules`
- `memory-bank`

Use current repository evidence before making claims or changes.

## Inspect Before Editing

For frontend quality work, inspect the relevant files first:

- `frontend/src/App.tsx`
- `frontend/src/components/dashboard`
- `frontend/src/components/ui`
- `frontend/src/lib`
- `frontend/src/index.css`

For backend context, inspect `backend/app/routes.py` and `backend/tests/test_routes.py`, but avoid backend changes unless explicitly required.

## Quality Priorities

- Accessibility: check semantic landmarks, status/error announcements, chart labels, decorative icons, loading states, empty states, keyboard-safe interactions, and readable text contrast.
- React safety: check async effects, stale updates after unmount, clear loading/error transitions, stable component boundaries, and type-safe props.
- Repository fit: preserve the existing Vite proxy, dashboard component layout, financial utility patterns, and test/tooling conventions.

## Change Boundaries

- Prefer small, focused edits in existing frontend files.
- Do not change backend implementation, API contracts, Dockerfiles, package files, dependency locks, or runtime configuration unless the user explicitly asks.
- Do not add new feature behavior while doing quality work.
- Do not stage or commit unless explicitly requested.

## Validation

When frontend code changes, run from `frontend` when practical:

- `npm run lint`
- `npm run test`
- `npm run build`

If validation cannot be run, report why and describe the residual risk.

## Memory Update

After quality work, update `memory-bank/progress.md` with:

- skills reviewed or applied
- files changed
- validation run and results
- deferred risks or follow-up work
