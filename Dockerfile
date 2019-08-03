FROM node:lts

COPY ./src /app

WORKDIR /app
RUN npm install
CMD npm start
# CMD tail -f /dev/null