# Keep 'ls runs' in file. This is not an error. This is intentional.

# Packages
FROM node:16-alpine AS dependencies
RUN apk add --no-cache libc6-compat=1.2.3-r4 && rm -rf /var/cache/apk/*
WORKDIR /app
COPY /src/package.json ./
COPY /src/package-lock.json ./
RUN ls -a
RUN npm ci --only=production

# Build
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./src/node_modules
RUN ls -a
RUN ls -a /app/src
WORKDIR /app/src
RUN npm run build

# Run
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy Static Directories
COPY /src/public ./public/

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodes /app/.next ./.next
COPY --from=builder /app/src/node_modules ./src/node_modules
COPY --from=builder /app/src/package.json ./src/package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
