# Packages
FROM node:16-alpine AS dependencies
RUN apk add --no-cache libc6-compat=1.2.3-r0 && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production

# Build
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Run
FROM node:16-alpine AS runner
WORKDIR /app

# Copy Production Env File
ENV NODE_ENV production
COPY .env.production ./

# Copy Static Directories
COPY public/ ./public/

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodes /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
