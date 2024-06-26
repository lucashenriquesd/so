FROM node:20-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g pnpm
RUN pnpm config set global-bin-dir "/usr/local/bin"
# Set working directory
WORKDIR /app
RUN pnpm add -g turbo
COPY . .
RUN turbo prune windows95 --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm install -g pnpm
RUN pnpm config set global-bin-dir "/usr/local/bin"
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN pnpm turbo build --filter=windows95...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 windows95
USER windows95

COPY --from=installer /app/apps/windows95/next.config.js .
COPY --from=installer /app/apps/windows95/package.json .

# Automatically leverage output traces to reduce image size
# https://windows95.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=windows95:nodejs /app/apps/windows95/.next/standalone ./
COPY --from=installer --chown=windows95:nodejs /app/apps/windows95/.next/static ./apps/windows95/.next/static
COPY --from=installer --chown=windows95:nodejs /app/apps/windows95/public ./apps/windows95/public

CMD node apps/windows95/server.js
