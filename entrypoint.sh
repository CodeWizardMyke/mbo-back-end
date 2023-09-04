#!/bin/sh

npx sequelize db:create
npx sequelize db:migrate

npm start