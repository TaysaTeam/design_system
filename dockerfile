FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-cache
COPY . .
RUN npm run build
RUN npm run build-storybook

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/storybook-static ./storybook-static
EXPOSE 6006
CMD ["npm", "run", "preview"]
