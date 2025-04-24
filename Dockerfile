FROM php:8.2-apache

# Install mysqli
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libonig-dev libxml2-dev zip unzip \
    && docker-php-ext-install mysqli \
    && docker-php-ext-enable mysqli

# Avoid ServerName warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Enable mod_rewrite
RUN a2enmod rewrite



# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
