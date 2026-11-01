#!/bin/bash
# Run on Amazon Linux 2023 / RHEL / CentOS EC2 as: sudo bash install-httpd.sh
set -e
dnf install -y httpd
cp -r site/* /var/www/html/
chown -R apache:apache /var/www/html
systemctl enable --now httpd
echo "Open http://<your-server-public-ip>/"
