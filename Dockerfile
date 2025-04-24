# Use the official PHP-Apache image
FROM php:8.2-apache

# Enable Apache mod_rewrite (useful for routing)
RUN a2enmod rewrite

# Copy all project files into the Apache server root
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Open port 80
EXPOSE 80
