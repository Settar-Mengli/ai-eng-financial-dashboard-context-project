# Documentation And Commit Rules

## Evidence Anchors

- `README.md` recommends documenting proposed rules and a memory bank in the fork.
- `README.md` shows the expected `.agents/rules` and `.agents/skills` structure.
- `AGENTS.md` requires reviewing `.agents/rules`, `.agents/skills`, and `memory-bank` before action.

## Rules

- Keep repository rules under `.agents/rules`.
- Keep project memory under `memory-bank` with kebab-case Markdown filenames.
- Update `memory-bank/active-context.md` and `memory-bank/progress.md` when the project state changes.
- Keep documentation concise, evidence-based, and specific to this repository.
- Use separate commits for major documentation phases when committing is requested.
- Do not stage or commit changes unless the user explicitly asks.
- Do not add co-author trailers unless the user explicitly asks for them.
