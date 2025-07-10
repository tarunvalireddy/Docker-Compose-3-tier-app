# Build Stage
FROM node:18.9.1 AS build

WORKDIR /app

COPY . .
RUN npm install

COPY . .

# Production Stage (distroless)
FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=build /app .

EXPOSE 5173

CMD ["./node_modules/.bin/vite"]
