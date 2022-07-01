FROM node:alpine

WORKDIR /srv/todo

COPY package* ./

RUN npm i

COPY . .

ENV PORT=6000

CMD ["npm", "start"]
