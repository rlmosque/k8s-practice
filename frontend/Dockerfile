FROM node:18-alpine3.14

WORKDIR /frontend/

COPY --chown=node:node package.json ./

COPY --chown=node:node ./app ./

RUN npm install

EXPOSE 3000

USER node

CMD ["npm", "start" ]