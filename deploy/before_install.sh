#!/bin/sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

. ~/.nvm/nvm.sh

nvm install 10.15

sudo service httpd start
sudo rm -rf /var/www/html/fbl-fe
# npm install -g pm2
# pm2 update