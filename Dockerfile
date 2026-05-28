ARG NODE_VERSION=18.10.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:${NODE_VERSION}-alpine AS final

ENV NODE_ENV=production
ENV NO_UPDATE_NOTIFIER=1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /usr/src/app/dist/personificca ./dist/personificca

USER node

EXPOSE 8080

CMD ["sh", "-c", "./node_modules/.bin/serve -s dist/personificca -l tcp://0.0.0.0:${PORT:-8080}"]
