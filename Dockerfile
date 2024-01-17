FROM node:20-alpine

EXPOSE 80

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY main.js .

CMD ["node", "main.js", "80"]
