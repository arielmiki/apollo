FROM node:11.13.0-alpine as builder

RUN mkdir -p /apollo
WORKDIR /apollo

RUN apk update && apk upgrade && apk add --no-cache git

COPY package.json package-lock.json /apollo/
RUN npm install

COPY . /apollo/
RUN npm run generate

FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /apollo/dist /var/www/html
