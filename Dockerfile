# Use Node.js 20 image as base
FROM node:20-alpine as builder

# Set the working directory inside the container
RUN mkdir -p /app
WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache git

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app/

# Build the React application
RUN npm run build

# Use Nginx as base for serving static files
FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built React application from the builder stage to Nginx's html directory
COPY --from=builder /app/dist /var/www/html
