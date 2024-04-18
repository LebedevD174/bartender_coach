FROM node

ENV NODE_ENV=production

# Здесь ваши переменные окружения
ENV DATABASE_URL=
ENV TOKEN_ACCESS=laksdffijqoiji41294i9024totksdfk-010i34osdfs 
ENV TOKEN_REFRESH=JKSksjdngNKS654Df21l1kalsdff0lFDLNKDSkk94r293iWjiJerjklr23SFIaijldsg 

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 80

CMD node app.js
