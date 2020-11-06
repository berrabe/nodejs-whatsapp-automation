<p align="center">
  <img src="docs/logo.png">
</p>

<br/><br/>

### 1 - RUNNING THIS APP? EEzzz ..
---
because it is docker based, make sure you have installed **docker** and **docker-compose**.
and the rest, please follow the steps below.



- Clone this repo
```sh
> git clone https://github.com/berrabe/nodejs-whatsapp-automation.git
> cd nodejs-whatsapp-automation
```



- a little configuration you have to do, all these values are default, change according to your needs. replace it in a file called **docker-compose.yml**
> :warning: `NOTE : the value of [ DATABASE_PASSWORD | MYSQL_ROOT_PASSWORD ] and [ DATABASE_NAME | WHATSAPP_DB_NAME ] must be the same`

```sh
# this is default config for whatsapp-bot container
- DATABASE_HOST=mariaDB
- DATABASE_USER=root
- DATABASE_PASSWORD=berrabe
- DATABASE_NAME=whatsapp_berrabe
- SERVER_URL=localhost
- SERVER_PORT=8000

# this is default config for whatsapp-db container
- MYSQL_ROOT_PASSWORD=berrabe
- WHATSAPP_DB_NAME=whatsapp_berrabe
```


- and it's time to run this application
```sh
# run the stack
> docker-compose up -d

# to get a qr code in the terminal, you have to run this command, then scan the qr code in the whatsapp smartphone app
> docker-compose logs -f
```

<br/><br/>