# Flixa – streaming landing page on Apache httpd

## Option A: EC2 / Linux server
    unzip netflix-httpd.zip && cd netflix-httpd
    sudo bash install-httpd.sh
Open `http://<public-ip>/`. Allow inbound TCP 80 in the security group.

## Option B: Docker
    docker build -t flixa .
    docker run -d -p 8080:80 flixa
Open `http://localhost:8080`.

## Option C: Manual
    sudo dnf install -y httpd          # or: sudo apt install apache2
    sudo cp -r site/* /var/www/html/   # Ubuntu service name: apache2
    sudo systemctl enable --now httpd

## Troubleshooting
- 403: `sudo chown -R apache:apache /var/www/html` and, with SELinux, `sudo restorecon -Rv /var/www/html`
- Not reachable: check security group port 80 and `sudo systemctl status httpd`
