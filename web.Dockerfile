FROM node:lts-alpine3.19 as builder

COPY ./web/ /tmp/build
WORKDIR /tmp/build
RUN npm install && npm run build

FROM nginx:stable-alpine3.17-slim
COPY --from=builder /tmp/build/dist/ /usr/share/nginx/html