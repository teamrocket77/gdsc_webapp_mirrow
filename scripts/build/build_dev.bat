@REM Batch Script to Build Project as a Docker Image + run locally.

cd ..
cd ..
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build app_dev
docker-compose up app_dev