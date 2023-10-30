FROM mongodb/mongodb-community-server:latest
COPY mongo-init.js /docker-entrypoint-initdb.d/

# docker run --name mongo -d -p 27017:27017 mongodb/mongodb-community-server:latest

EXPOSE 27017

ENV MONGO_INITDB_ROOT_USERNAME="nkjs"
ENV MONGO_INITDB_ROOT_PASSWORD="password"
ENV MONGO_INITDB_DATABASE="patients-db"
