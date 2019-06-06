FROM node:12-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

ENV PORT=80
EXPOSE 80

COPY . .
ENTRYPOINT ["npm","start"]