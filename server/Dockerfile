# Dockerfile for Node.js server
#Starts Stage 1
# Install node 18.17.0
FROM node:18.17.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn-lock.json
COPY server/package*.json ./

# Install dependencies based on package.json
RUN yarn install --production

#Starts Stage 2
# Use the builder stage as the base for the final runner image
FROM builder AS runner

# Set the working directory within the container to /server
WORKDIR /server

# Copy remaining source code
COPY server .

# List the coppied files
# Expose port
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]
