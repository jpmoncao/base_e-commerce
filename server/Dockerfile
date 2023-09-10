FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]