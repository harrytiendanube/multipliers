FROM node:14

RUN apt-get update
RUN apt-get install -y less vim sed wget unzip

RUN npm install -g nodemon

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent --production=false
COPY . .
EXPOSE 3000

CMD ["npm", "start"]
