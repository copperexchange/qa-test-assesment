FROM node:14.19.1-alpine

RUN npm i -g npm@7

RUN apk add --update git

WORKDIR /src

# Install app dependencies
COPY package.json /src
COPY package-lock.json /src

# Installs latest Chromium (92) package.
RUN apk add --no-cache chromium

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN apk --no-cache --update --virtual build-dependencies add python
RUN apk add --no-cache build-base g++ cairo-dev jpeg-dev pango-dev giflib-dev
RUN apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing libmount ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family fontconfig
RUN npm install

# Bundle app source
COPY . /src

CMD ["npm", "run", "runAllDocker"]
