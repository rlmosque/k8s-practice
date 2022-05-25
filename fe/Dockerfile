FROM node:current-alpine3.15

WORKDIR /fe

COPY /myrepos/package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
