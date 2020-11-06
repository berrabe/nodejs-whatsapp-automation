#!/bin/bash

sed -i -- 's/mariaDB/'"$DATABASE_HOST"'/g; s/root/'"$DATABASE_USER"'/g; s/dutamedia_dev/'"$DATABASE_PASSWORD"'/g; s/db_otpwhatsapp/'"$DATABASE_NAME"'/g' server.js
find src/ -type f -exec sed -i 's/localhost/'"$SERVER_URL"'/g; s/8000/'"$SERVER_PORT"'/g' {} +
exec "$@"
