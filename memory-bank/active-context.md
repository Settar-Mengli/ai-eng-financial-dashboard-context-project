# Active Context

## Current Status

Project 1 repository inspection and handover verification are complete. This documentation pass initializes repository rules and the memory bank using evidence from the existing codebase.

## Active Constraints

- Do not modify frontend application code.
- Do not modify backend application code.
- Do not modify Docker, package files, tests, dependencies, or runtime behavior.
- Do not stage or commit unless explicitly requested.
- Keep documentation concise, evidence-based, and repository-specific.

## Verified Facts

- The frontend entry point is `frontend/src/main.tsx`.
- The main dashboard file is `frontend/src/App.tsx`.
- The backend entry point is `backend/app/main.py`.
- Backend routes are defined in `backend/app/routes.py`.
- The active frontend fetch path is `/api/metrics`.
- Vite proxies `/api` to `http://backend:8000`.

## Open Unknowns

- No persistent data source is present in the current codebase.
- No production CORS policy is documented in the repository.
- No project-specific skills exist under `.agents/skills`.
- Later project phases need to decide whether to refactor duplicated metric logic or backend route organization.
