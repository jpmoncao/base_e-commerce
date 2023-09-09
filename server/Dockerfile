FROM node:lts-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["sudo", "npx", "nodemon", "src/index.ts", "--watch", "src/", "-e", "ts"]