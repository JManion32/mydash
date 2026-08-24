FROM python:3.12-slim AS builder

COPY --from=ghcr.io/astral-sh/uv:0.12.5 /uv /bin/

# Build the venv outside /app so the dev bind mount (./backend:/app) can't
# shadow it with the host's .venv.
ENV UV_PROJECT_ENVIRONMENT=/opt/venv \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

WORKDIR /app

# Only the lockfile inputs, so this layer caches until deps actually change
COPY pyproject.toml uv.lock ./

RUN uv sync --locked --no-dev

# Runtime image
FROM python:3.12-slim

COPY --from=builder /opt/venv /opt/venv

WORKDIR /app

COPY app ./app

ENV PATH="/opt/venv/bin:$PATH"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
