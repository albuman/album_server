FROM node:8.17.0

WORKDIR /usr/src/app
RUN apt-get update
RUN apt-get install -y git
RUN git clone https://github.com/albuman/album_server.git ./
RUN npm install
EXPOSE 8000

CMD [ "npm", "start", "--", "port", "8000", "dbport", "5432", "dbhost", "psql"]