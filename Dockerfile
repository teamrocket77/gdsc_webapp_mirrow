# Packages
FROM node:16-alpine AS dependencies
RUN apk add --no-cache libc6-compat=1.2.3-r0 && rm -rf /var/cache/apk/*
WORKDIR /app
COPY . .
WORKDIR /app/src
RUN npm ci --only=production

# Build
ARG FIREBASE_SERVICE_ACCOUNT_PROJECT_ID
ARG FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY
ARG FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL
RUN npm run build
#COPY --from=dependencies /app/node_modules ./node_modules

#COPY public/ ./public/

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

#COPY --from=builder --chown=nextjs:nodes /app/.next ./.next
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
