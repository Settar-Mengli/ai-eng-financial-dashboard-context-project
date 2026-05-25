# Tech Context

## Runtime

- Docker Compose service: `frontend`.
- Docker Compose service: `backend`.
- Frontend port mapping: `5173:5173`.
- Backend port mapping: `8000:8000`.
- Backend debug port mapping: `5678:5678`.

## Frontend Stack

Evidence: `frontend/package.json`.

- React.
- TypeScript.
- Vite.
- Tailwind CSS via `@tailwindcss/vite`.
- Recharts.
- Lucide React icons.
- Vitest.
- ESLint.

Frontend scripts:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`
- `npm run test:watch`
- `npm run test:coverage`

## Backend Stack

Evidence: `backend/requirements.txt`.

- FastAPI.
- Uvicorn.
- debugpy.
- pytest.
- pytest-cov.
- httpx.

## Local Development

Evidence: `README.md`.

- Start with `docker compose up --build`.
- Frontend URL: `http://localhost:5173`.
- Backend URL: `http://localhost:8000`.
- API docs URL: `http://localhost:8000/docs`.

## Configuration

- `frontend/vite.config.ts` proxies `/api` to `http://backend:8000`.
- `frontend/.env.example` documents `VITE_API_BASE_URL` as an optional backend origin override.
