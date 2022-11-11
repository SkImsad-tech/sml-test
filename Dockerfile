FROM node:18.11.0

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN npm install --silent --progress=false --production

COPY . .

EXPOSE 3001

CMD ["yarn", "app"]