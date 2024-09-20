FROM --platform=${BUILDPLATFORM:-linux/arm64} node:22-slim AS base

# === Deps ===
FROM base AS deps

WORKDIR /app

COPY package.* .

RUN npm install

# # === Builder ===
# FROM base AS builder

# WORKDIR /app

# COPY --from=deps /app/package.json .
# COPY --from=deps /app/node_modules ./node_modules

# RUN npm ci --omit=dev

# COPY . .

# # RUN npm run build

# # === Runner ===
# FROM base AS runner

# WORKDIR /app

# COPY --from=builder --chown=node:node /app/package.json .
# COPY --from=builder --chown=node:node /app/node_modules ./node_modules

# USER node

# EXPOSE 3000

# CMD ["node", "dist/index.js"]
