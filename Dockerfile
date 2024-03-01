# syntax=docker/dockerfile:1

ARG NODE_VERSION=21.6.2

FROM node:${NODE_VERSION}-alpine as base
RUN npm install -g npm@10.5.0
RUN mkdir -p /usr/src/app && mkdir -p /use/src/app/node_modules
WORKDIR /usr/src/app
EXPOSE 3000
HEALTHCHECK --interval=5m --timeout=3s CMD /usr/src/app/container_healthcheck

FROM base as dev
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
CMD [ "npm", "run", "start-dev" ]

FROM base as prod
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD [ "npm", "run", "start" ]

