FROM node


ENV DATABASE_HOST mariaDB
ENV DATABASE_USER root
ENV DATABASE_PASSWORD dutamedia_dev
ENV DATABASE_NAME db_otpwhatsapp
ENV SERVER_URL localhost
ENV SERVER_PORT 8000



RUN  apt update \
     && apt install -y wget gnupg ca-certificates python3 make autoconf gcc g++ \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
     && apt update \
     && apt install -y google-chrome-stable \
     && rm -rf /var/lib/apt/lists/* \
     && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
     && chmod +x /usr/sbin/wait-for-it.sh


# ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
# RUN chmod +x /usr/local/bin/dumb-init


WORKDIR /app
COPY source/ .
RUN npm install


COPY entrypoint.sh .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]


EXPOSE 8000
# ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "start"]
