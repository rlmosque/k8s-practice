FROM node:18-alpine3.14

WORKDIR /myapp

COPY --chown=node:node package.json ./

COPY --chown=node:node ./ ./

RUN npm install

USER node

EXPOSE 3000

CMD ["npm", "start"]
