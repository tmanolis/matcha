FROM node:lts-alpine3.20

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY --chown=node:node . .

USER node

EXPOSE 5173

CMD [ "npm", "run", "dev" ]