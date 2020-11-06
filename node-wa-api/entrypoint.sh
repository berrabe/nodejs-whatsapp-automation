#!/bin/bash

while [[ True ]]; do

	nc -z $DATABASE_HOST 3306 >/dev/null 2>&1

	if [[ $? -eq 0 ]]; then
		echo " [+] DATABASE CONNECTED [ $DATABASE_HOST ]"
		break
	else
		echo " [!] ERROR | DATABASE NOT CONNECTED [ $DATABASE_HOST ] ... WAIT 10 SECS"
		sleep 10
	fi

	sleep 1
	
done


echo "============================================================"
echo -e " [=] STARTING NODE-WHATSAPP-AUTOMATION DOCKER\n"

echo " [=] DATABASE HOST = $DATABASE_HOST"
echo " [=] DATABASE USER = $DATABASE_USER"
echo " [=] DATABASE PASSWORD = $DATABASE_PASSWORD"
echo " [=] DATABASE NAME = $DATABASE_NAME"


echo " [=] CHANGING DB CONFIG"
sed -i -- 's/mariaDB/'"$DATABASE_HOST"'/g; s/root/'"$DATABASE_USER"'/g; s/dutamedia_dev/'"$DATABASE_PASSWORD"'/g; s/db_otpwhatsapp/'"$DATABASE_NAME"'/g' server.js


echo " [=] CHANGING SERVER CONFIG"
find src/ -type f -exec sed -i 's/localhost/'"$SERVER_URL"'/g; s/8000/'"$SERVER_PORT"'/g' {} +

exec "$@"
