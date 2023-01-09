node steps: <br>
----------- <br>
mkdir nodejs-simple-rest <br>
cd nodejs-simple-rest <br>
npm init <br>
npm install express <br>
node index.js <br>

git: <br>
---- <br>
echo "# nodejs-simple-rest" >> README.md <br>
git init <br>
git add -A <br>
git commit -m "first commit" <br>
git branch -M main <br>
git remote add origin https://github.com/maheshpeddigithub/nodejs-simple-rest.git <br>
git push -u origin main <br>

Docker: <br>
------- <br>
docker build . -t cloudmahesh/nodejs-simple-rest <br>
docker images <br>
docker run -p 8081:8080 cloudmahesh/nodejs-simple-rest <br>
curl -i http://localhost:8081/api/v1/cars <br>

docker ps <br>
docker logs <container id> <br>
docker exec -it <container id> /bin/bash <br>
docker kill <container id> (or) docker stop <container id> <br>

docker push cloudmahesh/nodejs-simple-rest <br>
docker pull cloudmahesh/nodejs-simple-rest <br>

docker stop $(docker ps -a -q) <br>
docker rm $(docker ps -a -q) <br>
docker rmi $(docker images -q) <br>


minikube: <br>
--------- <br>
minikube start <br>
minikube stop <br>

minikube image load cloudmahesh/nodejs-simple-rest:latest <br>
minikube image ls <br>

minikube service nodejs-simple-rest <br>

minikube tunnel <br>


Kubectl: <br>
-------- <br>
kubectl apply -f k8s-nodejs-simple-rest.yml <br>
kubectl get deployments <br>
kubectl get pods <br>
kubectl get services <br>
kubectl get services <br>
kubectl delete -f k8s-nodejs-simple-rest.yml <br>

kubectl create deployment hello-node --image=registry.k8s.io/echoserver:1.4 <br>
kubectl expose deployment hello-node --type=LoadBalancer --port=8080 <br>
kubectl get services <br>
kubectl get svc <br>

kubectl exec --stdin --tty nodejs-simple-rest-7f4f5cd5df-lrlnv -- /bin/bash <br>
kubectl exec --stdin --tty nodejs-simple-rest-7f4f5cd5df-lrlnv -- /bash <br>
kubectl exec --stdin --tty nodejs-simple-rest-7f4f5cd5df-lrlnv -- /sh <br>
kubectl exec --stdin --tty nodejs-simple-rest-7f4f5cd5df-lrlnv -- /bin/sh <br>

kubectl delete service nodejs-simple-rest <br>
kubectl delete deployment nodejs-simple-rest <br>