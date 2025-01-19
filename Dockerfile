FROM node:20-alpine AS build 

WORKDIR /usr/arc/app 

COPY package*.json ./

RUN npm install 

COPY . . 

FROM node:20-alpine AS runtime 

WORKDIR /usr/src/app 

COPY --from=build usr/src/app ./ 

EXPOSE 3000

CMD ["npm","run","dev"]