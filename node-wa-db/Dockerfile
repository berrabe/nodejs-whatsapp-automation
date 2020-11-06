FROM alpine

RUN apk add --no-cache mariadb mariadb-client mariadb-server-utils pwgen && \
    rm -f /var/cache/apk/*

RUN mkdir /docker-entrypoint-initdb.d && \
    mkdir -p /scripts/pre-exec.d && \
    mkdir -p /scripts/pre-init.d && \
    chmod -R 755 /scripts

WORKDIR /DB
ADD files/ .
RUN chmod 755 -R .

EXPOSE 3306

VOLUME ["/var/lib/mysql"]

ENV WHATSAPP_DB_NAME db_otpwhatsapp

ENTRYPOINT ["./run.sh"]
