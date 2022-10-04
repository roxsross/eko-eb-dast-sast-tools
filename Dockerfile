FROM node:14-alpine3.14 

ENV NODE_ENV uat

ENV PORT 3000

WORKDIR /app
COPY . /app
RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]
