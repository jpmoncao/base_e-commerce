FROM node:lts-alpine

WORKDIR /app

RUN chmod +x src/index.ts

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npx", "nodemon", "src/index.ts", "--watch", "src/", "-e", "ts"]
