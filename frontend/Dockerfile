FROM node:current-alpine

#ARG USER=default
#ENV HOME /home/$USER

#RUN adduser -D nonroot
#USER nonroot

# install node js
#RUN apk add --update nodejs npm

# set up work directory
WORKDIR /usr/src/app

# copy over our app code
#COPY ./myrepos /app
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

