# Context-First Workflow

## Evidence Anchors

- `AGENTS.md` requires agents to look for `.agents/rules`, `.agents/skills`, and `memory-bank` before taking action.
- `README.md` describes this project as a financial metrics dashboard with a React + TypeScript frontend and a FastAPI backend.
- `README.md` states the intended local URLs: frontend `http://localhost:5173`, backend `http://localhost:8000`, and API docs `http://localhost:8000/docs`.

## Rules

- Start every task by reading the latest guidance in `AGENTS.md`, `.agents/rules`, `.agents/skills` if present, and `memory-bank` if present.
- Use direct repository evidence before making claims about architecture, commands, endpoints, data flow, or conventions.
- Prefer `rg` and `rg --files` for inspection.
- If a guidance or memory path is missing, state that explicitly rather than inventing its contents.
- Keep changes scoped to the user's requested project phase.
- Do not change runtime behavior when the task is documentation-only.
- Do not assume planned future architecture exists; document current code first, then mark future work as unknown or out of scope.
