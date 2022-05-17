# syntax=docker/dockerfile:1
FROM python:alpine

ARG USER=nonroot

ENV HOME /home/$USER

# install sudo as root
#RUN apk add --update sudo
#RUN apk update
# RUN apk add py-pip
# RUN apk add --no-cache python3-dev
# # upgrade pip
# RUN pip install --upgrade pip

# cd into backend
WORKDIR $HOME

# copy over our requirements.txt file
COPY requirements.txt ./

# install required python packages &
# dissable caching to keep image small
#RUN pip --no-cache-dir install -r /tmp/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# copy over our app code
COPY ./app ./

# Add new user
RUN adduser -D nonroot

USER nonroot

CMD ["python3", "main.py"]