#This Dockerfile is structured using multi-stage builds, which allow you to create smaller, 
#more efficient Docker images by separating the build process into multiple stages. 
#Each stage of the build process generates a temporary image, 
#and the final image only contains the necessary artifacts from the previous stages.

#sudo groupadd docker
#sudo usermod -aG docker $USER
#newgrp docker
#docker rmi -f $(docker images -aq)



# Stage 1: install dependencies
# FROM node:20-alpine AS deps
# WORKDIR /app
# COPY package*.json ./
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
# RUN npm install

# Stage 2: build
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY src ./src
# COPY public ./public
# COPY package.json next.config.mjs tsconfig.json ./
# RUN npm run build

# Stage 3: run
# FROM node:20-alpine
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./


FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npx", "serve@latest", "out"]