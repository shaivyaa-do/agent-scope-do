# Stage 1: Build the frontend assets
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace package manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
COPY frontend/package.json ./frontend/

# Install dependencies
RUN pnpm install --frozen-lockfile || pnpm install

# Copy frontend source code
COPY frontend/ ./frontend/

# Build the frontend production bundle
RUN pnpm --filter frontend build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build artifacts from builder stage
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
