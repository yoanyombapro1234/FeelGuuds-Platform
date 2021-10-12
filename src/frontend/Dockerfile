FROM node:14-alpine as base

# base stage
WORKDIR /src
COPY package*.json /
EXPOSE 3000

# production stage
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

# development stage
FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["npm", "bin/www"]
