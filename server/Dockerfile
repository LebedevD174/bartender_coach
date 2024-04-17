FROM node

ENV NODE_ENV=production

# Здесь ваши переменные окружения
ENV DATABASE_URL=postgres://postgres:postgres@94.26.229.98:5432/b_bartender_coach
ENV TOKEN_ACCESS=e1MT3SvgHg4jMWOC 
ENV TOKEN_REFRESH=WbYFCcYv0a65va5R 

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 80

CMD node app.js
