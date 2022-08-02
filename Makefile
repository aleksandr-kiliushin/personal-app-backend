dev:
	docker-compose -f ./compose.dev.yml up

download-and-init-databases:
	echo "bash /var/app/download-and-init-databases.sh" | docker exec -i personal-app-database bash;

remove-api-image:
	docker rm personal-app-api && docker rmi personal-app-server_api

remove-database-image:
	docker rm personal-app-database && docker rmi personal-app-server_database
