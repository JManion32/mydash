# MyDash

Comprehensive personal command center to maximize productivity.

```bash
git clone git@github.com:JManion32/mydash.git
cd mydash
cp .env.example .env
```

## Running the stack

Everything runs through Docker Compose:

```bash
docker compose up --build
```

| Service | URL                     |
| ------- | ----------------------- |
| Site    | http://localhost:8080   |
| Backend | http://127.0.0.1:8000   |
| Docs    | http://127.0.0.1:8000/docs |
| DB      | 127.0.0.1:5432          |

Ports for local development are set directly in `compose.yml`. Production uses
its own `compose.prod.yml` on the server.

## Backend

Built with Python and FastAPI. Lives in `backend/`.

### Running outside Docker

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Note the order: create and activate the venv *before* installing, so
dependencies land in the venv rather than your system Python.

### Building the image on its own

```bash
docker build -t mydash-backend ./backend
docker run -p 8000:8000 mydash-backend
```

## Front-end

Built with Vue, TypeScript, and Vite. Lives in `site/`.

The Docker image is a two-stage build: Node compiles the static files, then
nginx serves them on port 80.

### Running outside Docker

```bash
cd site
npm install
npm run dev
```

### Linting

```bash
npm run lint-check   # eslint + prettier + stylelint
npm run lint-fix     # autofix
```

CI runs the same three checks on every push and pull request against `main`.
