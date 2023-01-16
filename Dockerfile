# Keep 'ls runs' in file. This is not an error. This is intentional.

# Packages
FROM node:16-alpine@sha256:1298fd170c45954fec3d4d063437750f89802d72743816663664cfe9aa152b4b AS dependencies
RUN apk add --no-cache libc6-compat=1.2.3-r1 && rm -rf /var/cache/apk/*
WORKDIR /app
COPY /src/package.json ./
COPY /src/package-lock.json ./
RUN ls -a
RUN npm ci --only=production

# Build
FROM node:16-alpine@sha256:1298fd170c45954fec3d4d063437750f89802d72743816663664cfe9aa152b4b AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./src/node_modules
RUN ls -a
RUN ls -a /app/src
WORKDIR /app/src
RUN --mount=type=secret,id=SECRET \
    --mount=type=secret,id=NEXTAUTH_SECRET \ 
    --mount=type=secret,id=GOOGLE_PROVIDER_CLIENT_ID \ 
    --mount=type=secret,id=GOOGLE_PROVIDER_CLIENT_SECRET \ 
    --mount=type=secret,id=GOOGLE_PROVIDER_AUTHORIZATION_URL \ 
    --mount=type=secret,id=FIREBASE_SERVICE_ACCOUNT_PROJECT_ID \ 
    --mount=type=secret,id=FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY \
    --mount=type=secret,id=FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL \
    export SECRET=$(cat /run/secrets/SECRET) && \
    export NEXTAUTH_SECRET=$(cat /run/secrets/NEXTAUTH_SECRET) && \
    export GOOGLE_PROVIDER_CLIENT_ID=$(cat /run/secrets/GOOGLE_PROVIDER_CLIENT_ID) && \
    export GOOGLE_PROVIDER_CLIENT_SECRET=$(cat /run/secrets/GOOGLE_PROVIDER_CLIENT_SECRET) && \
    export GOOGLE_PROVIDER_AUTHORIZATION_URL=$(cat /run/secrets/GOOGLE_PROVIDER_AUTHORIZATION_URL) && \
    export FIREBASE_SERVICE_ACCOUNT_PROJECT_ID=$(cat /run/secrets/FIREBASE_SERVICE_ACCOUNT_PROJECT_ID) && \
    export FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY=$(cat /run/secrets/FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY) && \
    export FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL=$(cat /run/secrets/FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL) && \
    npm run build

# Run
FROM node:16-alpine@sha256:1298fd170c45954fec3d4d063437750f89802d72743816663664cfe9aa152b4b AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy Static Directories
COPY /src/public ./public/

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodes /app/.next ./.next
COPY --from=builder /app/node_modules ./src/node_modules
COPY --from=builder /app/src/package.json ./src/package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
