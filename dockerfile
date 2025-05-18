FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies 
RUN npm install --no-cache

# Copy source code
COPY . .

# Build Vite project
RUN npm run build

# Optional: Build Storybook 
RUN npm run build-storybook

# Final image
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Optional: Copy Storybook build 
COPY --from=builder /app/storybook-static ./storybook-static

# Expose port
EXPOSE 6006

# Start the Vite preview server
CMD ["npm", "run", "preview"]
