FROM node:10.16-alpine

RUN apk update && \
    apk add openssl && \
    apk add yarn
 
WORKDIR /usr/api/
COPY ./packages/backend/package.json ./packages/backend/ecosystem.config.js ./

# RUN yarn install --production
RUN yarn global add pm2

COPY ./packages/backend ./