#!/bin/bash

SRC_DIR="/var/www/html/"
cd "${SRC_DIR}"

# .envを退避して、/var/www/html配下を削除する
mkdir -p ../deploy
cp .env ../deploy/
rm -r *

# nginx stop
isExistApp=$(pgrep nginx)

if [[ -n  "${isExistApp}" ]]; then
    systemctl stop nginx
fi

# php-fpm stop
isExistPhp=$(pgrep php-fpm)

if [[ -n  "${isExistPhp}" ]]; then
    systemctl stop php-fpm
fi
