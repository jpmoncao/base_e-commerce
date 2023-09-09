FROM node:lts-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]