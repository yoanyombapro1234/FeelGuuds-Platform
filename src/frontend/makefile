TAG?=latest
NAME:=frontend
DOCKER_REPOSITORY:=feelguuds
DOCKER_IMAGE_NAME:=$(DOCKER_REPOSITORY)/$(NAME)
GIT_COMMIT:=$(shell git describe --dirty --always)
VERSION:=6.0.0

# install npm module dependencies
.PHONY: install-modules
install-modules:
	npm install

# builds a docker container in which the service's executable will run
.PHONY: build-container
build-container: 
	docker build -t $(DOCKER_IMAGE_NAME):$(VERSION) .

# starts the docker container in the background
.PHONY: run-container
run-container: build-container
	@docker run -dp 3000:3000 --name=feelguud-frontend $(DOCKER_IMAGE_NAME):$(VERSION)
	@docker ps


# starts the docker container in the foreground
.PHONY: run-container-live
run-container-live: build-container
	@docker run -p 3000:3000 --name=feelguud-frontend $(DOCKER_IMAGE_NAME):$(VERSION)


lint: ## Runs lint validation
	npm run lint