# syntax=docker/dockerfile:1
FROM alpine:latest

ARG USER=nonroot
ENV HOME /home/$USER

# install node js
RUN apk add --update nodejs npm

# set up work directory
WORKDIR $HOME

# copy over our app code
COPY ./myrepos /app

# cd into app folder
WORKDIR /app

# Add new user
RUN adduser -D somenonrootuser

USER somenonrootuser

CMD ["npm", "start"]
