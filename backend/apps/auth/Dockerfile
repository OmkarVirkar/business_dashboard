FROM node:20.12.2-alpine3.19 as development

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM node:20.12.2-alpine3.19 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./apps/auth/package.json ./
COPY ./apps/auth/package-lock.json ./

RUN npm install --production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/app/auth/main"]