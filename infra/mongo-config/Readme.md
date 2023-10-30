docker run -d --name mongodb -p 27017:27017 -v mongo-data:/data/db mongo-init

kubectl create ns ns1
d:
cd D:\node\weather-app
kubectl apply -f infra\mongo-config\storageclass.yml
kubectl get sc
kubectl apply -f infra\mongo-config\pv.yml
kubectl get pv
kubectl apply -f infra\mongo-config\mongodb-statefulset.yml
kubectl get pods
kubectl apply -f infra\node-app-config\node-app-deployment.yml
kubectl get pods


Refs:  

https://stackoverflow.com/questions/55900878/how-to-connect-mongodb-replica-set-created-with-helm-charts-in-k8s-cluster#:~:text=As%20each%20pod%20is%20created%2C%20it%20gets%20a,you%20need%20to%20use%3A%20%22mongodb%3A%2F%2Fmyuser%3Amydbpwd%40%20skeleton-mongodb-replicaset-0.skeleton-mongodb-replicaset%3A27001%2C%20skeleton-mongodb-replicaset-1.skeleton-mongodb-replicaset%3A27001%2C%20skeleton-mongodb-replicaset-2.skeleton-mongodb-replicaset%3A27001%2F%3FauthSource%3Dadmin%26replicaSet%3Drs0%22

https://www.cloudskillsboost.google/focuses/640?parent=catalog

https://hevodata.com/learn/mongodb-replica-set-3-easy-methods/

https://medium.com/swlh/how-to-setup-mongodb-replica-set-on-kubernetes-in-minutes-5c1e7fd5b5f3

https://bharaths-tomail.medium.com/orchestrating-mongodb-over-kubernetes-with-ssl-authentication-98d441a80505