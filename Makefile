DOCKER_COMPOSE = docker compose
NPM = npm install
RM_RF = rm -rf

# Rules to launch app locally or with docker compose
all: backend frontend start-docker

backend:
	@echo "\033[32mInstalling backend dependencies...\033[0m"
	@cd backend && $(NPM)
frontend:
	@echo "\033[32mInstalling frontend dependencies...\033[0m"
	@cd frontend && $(NPM)

start-local: backend frontend
	@echo "\033[32mStarting backend and frontend locally...\033[0m"
	@cd backend && npm start &
	@cd frontend && npm start &

start-docker: backend frontend
	@echo "\033[32mStarting Docker Compose...\033[0m"
	$(DOCKER_COMPOSE) up --build

# Rules to clean
clean: clean-backend clean-frontend docker-clean

clean-backend:
	@echo "\033[32mCleaning backend dependencies...\033[0m"
	@cd backend && $(RM_RF) node_modules

clean-frontend:
	@echo "\033[32mCleaning frontend dependencies..."
	@cd frontend && $(RM_RF) node_modules

docker-clean:
	@echo "\033[32mStopping and removing Docker containers, networks, and volumes...\033[0m"
	$(DOCKER_COMPOSE) down --volumes --remove-orphans
	@echo "\033[32mPruning Docker system...\033[0m"
	docker system prune -f

.PHONY: all backend frontend start-docker clean clean-backend clean-frontend docker-clean