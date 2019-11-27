FROM node:10

# create app directory
WORKDIR /usr/src/app

# package describes the project
COPY package*.json ./

RUN npm install

# bundles everything
COPY . .

# localhost I believe??
EXPOSE 80

CMD [ "node", "file.js" ]
