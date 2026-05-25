# Testing And Quality Rules

## Evidence Anchors

- `frontend/package.json` defines `build`, `lint`, `test`, `test:watch`, and `test:coverage` scripts.
- `frontend/src/lib/financial-utils.test.ts` tests frontend financial calculations.
- `backend/requirements.txt` includes `pytest`, `pytest-cov`, and `httpx`.
- `backend/tests/test_routes.py` tests the current FastAPI endpoints and selected helper behavior.
- `backend/tests/conftest.py` adds the backend project path for tests.

## Rules

- For frontend behavior or utility changes, use the existing npm scripts rather than adding new tooling by default.
- For backend API or helper changes, use the existing pytest suite and add focused tests for new behavior.
- Documentation-only changes do not require runtime tests, but verify the file list and `git status --short` before handoff.
- Keep tests focused on observable behavior, response shapes, filtering, calculations, and edge cases.
- Do not rewrite test infrastructure during Project 1.
- Document any test not run and the reason in the handoff.
