FROM node:16-alpine3.11

EXPOSE 3000

WORKDIR /app

COPY ./server.ts .

COPY ./src .

COPY ./tsconfig.json .

COPY ./package.json .

COPY . .

RUN npm i

CMD ["npm", "run", "start:dev"]
