FROM node:alpine

WORKDIR /srv/log-output

COPY package* ./

RUN npm i

COPY . .

ENV PORT=6000
ENV	DB_DIR="/srv/log-output/shared"

CMD ["npm", "start"]
