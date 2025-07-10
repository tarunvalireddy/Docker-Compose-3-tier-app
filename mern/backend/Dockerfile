FROM node:18.9.1 as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=build /app .

EXPOSE 5050

CMD ["./server.js"]

