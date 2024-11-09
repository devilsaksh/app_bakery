# Start from the official NGINX image
FROM nginx:latest

# Copy the application files to the default NGINX location
COPY index.html /usr/share/nginx/html/index.html
COPY menu.html /usr/share/nginx/html/menu.html
COPY order.html /usr/share/nginx/html/order.html
COPY script.js /usr/share/nginx/html/script.js
COPY Style.css /usr/share/nginx/html/Style.css
