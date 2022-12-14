up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
laravel-install:
	docker-compose exec app-api composer create-project --prefer-dist "laravel/laravel=8.*" .
create-project:
	@make build
	@make up
	@make laravel-install
	docker-compose exec app-api php artisan key:generate
	docker-compose exec app-api php artisan storage:link
	docker-compose exec app-api chmod -R 777 storage bootstrap/cache
init:
	docker-compose up -d --build
	docker-compose exec app-api composer install
	docker-compose exec app-api cp .env.example .env
	docker-compose exec app-api php artisan key:generate
	docker-compose exec app-api php artisan storage:link
	docker-compose exec app-api chmod -R 777 storage bootstrap/cache
jwt:
	docker-compose exec app-api php artisan cache:clear
	docker-compose exec app-api php artisan config:clear
	docker-compose exec app-api php artisan jwt:secret
remake:
	@make destroy
	@make init
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-web:
	docker-compose logs web
log-web-watch:
	docker-compose logs --follow web
log-app:
	docker-compose logs app
log-app-watch:
	docker-compose logs --follow app
log-db:
	docker-compose logs db
log-db-watch:
	docker-compose logs --follow db
web-api:
	docker-compose exec web-api ash
app-api:
	docker-compose exec app-api bash
migrate:
	docker-compose exec app-api php artisan migrate
fresh:
	docker-compose exec app-api php artisan migrate:fresh --seed
seed:
	docker-compose exec app-api php artisan db:seed
rollback-test:
	docker-compose exec app-api php artisan migrate:fresh
	docker-compose exec app-api php artisan migrate:refresh
cache:
	docker-compose exec app-api composer dump-autoload -o
	@make optimize
	docker-compose exec app-api php artisan event:cache
	docker-compose exec app-api php artisan view:cache
optimize:
	docker-compose exec app-api php artisan optimize
npm:
	@make npm-install
npm-install:
	docker-compose exec web npm install
npm-dev:
	docker-compose exec web npm run dev
npm-watch:
	docker-compose exec web npm run watch
npm-watch-poll:
	docker-compose exec web npm run watch-poll
npm-hot:
	docker-compose exec web npm run hot
yarn:
	docker-compose exec web yarn
yarn-install:
	@make yarn
yarn-dev:
	docker-compose exec web yarn dev
yarn-watch:
	docker-compose exec web yarn watch
yarn-watch-poll:
	docker-compose exec web yarn watch-poll
yarn-hot:
	docker-compose exec web yarn hot
db:
	docker-compose exec db bash
sql:
	docker-compose exec db bash -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
redis:
	docker-compose exec redis redis-cli
ide-helper:
	docker-compose exec app php artisan clear-compiled
	docker-compose exec app php artisan ide-helper:generate
	docker-compose exec app php artisan ide-helper:meta
	docker-compose exec app php artisan ide-helper:models --nowrite
