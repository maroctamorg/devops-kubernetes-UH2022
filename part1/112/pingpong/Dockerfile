FROM node:alpine

WORKDIR /srv/ping

COPY package* ./

RUN npm i

COPY . .

ENV PORT=3000
ENV DB_DIR="/srv/ping/shared"

CMD ["npm", "start"]
