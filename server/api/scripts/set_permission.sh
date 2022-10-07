#!/bin/bash

SRC_DIR="/var/www/html/"
cd "${SRC_DIR}"

# 退避していた環境変数ファイルを元に戻す
mv ../deploy/.env "${SRC_DIR}"

# owner permission modefied
chown -R ec2-user:ec2-user "${SRC_DIR}"
chmod -R 775 "${SRC_DIR}"
chmod -R 777 "${SRC_DIR}"storage

# run artisan & composer command
composer install
composer dump-autoload
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
