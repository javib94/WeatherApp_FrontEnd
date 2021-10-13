# Se nombra este stage del docker como builder
FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

# Segundo stage creado
FROM nginx:1.13.9-alpine

COPY  --from=builder app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]