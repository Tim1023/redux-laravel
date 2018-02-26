# redux-laravel

Please follow the guide.

1. `git clone`
2. `update the .env file along with database connection`
3. `composer install && composer update`
4. `php artisan key:generate`
5. `php artisan migrate`
6. `php artisan db:seed`
7. `npm install`

## Install Passport

Open a terminal window and install the passport using following command

 ```
 php artisan passport:install
 ```
## Update the Passport keys in .env file 
Copy the keys for personal and password grants in `.env` file

```
PERSONAL_CLIENT_ID=1
PERSONAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PASSWORD_CLIENT_ID=2
PASSWORD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
