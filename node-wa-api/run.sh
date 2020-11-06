#!/bin/bash

clear
echo -e "\n\t [=] RUN DOCKER BUILD\n"

docker build -t berrabee/node-whatsapp .

if [[ $? -eq 0 ]]; then
	echo -e "\n\t [+] DOCKER BUILD SUCCESS"
else
	echo -e "\n\t [!] DOCKER BUILD FAILED"
fi
