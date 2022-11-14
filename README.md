# nodejs-simple-rest

node steps:

-----------

mkdir nodejs-simple-rest

cd nodejs-simple-rest

npm init

npm install express

node index.js


git:

----

echo "# nodejs-simple-rest" >> README.md

git init

git add -A

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/maheshpeddigithub/nodejs-simple-rest.git

git push -u origin main

Docker:

-------

docker build . -t cloudmahesh/nodejs-simple-rest

docker images

docker run -p 8081:8080 cloudmahesh/nodejs-simple-rest

curl -i http://localhost:8081/api/v1/cars


docker ps

docker logs <container id>

docker exec -it <container id> /bin/bash

docker kill <container id> (or) docker stop <container id>


docker push cloudmahesh/nodejs-simple-rest

docker pull cloudmahesh/nodejs-simple-rest


docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

docker rmi $(docker images -q)


minikube:

---------

minikube start

minikube stop

minikube image load cloudmahesh/nodejs-simple-rest:latest

minikube image ls

minikube service nodejs-simple-rest

minikube tunnel


Kubectl:
--------