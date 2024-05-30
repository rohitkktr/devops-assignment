# devops-assignment
all done 
1. Create any crud based project with both frontend and backend (no tech stack barrier or any
existing git project will work).
2. using any tool to implement CI/CD Pipeline for auto deployment of the project.
4. for deployment purposes try to dockerize the project and deploy the image.


for quation 3 
3. implementation for auto scaling of the project based on the load.
you need to enable GKE node auto for node auto saling , GKE cluster, you can enable the autoscaler for the node pool:
then apply `deployment.yaml` to enable HPA ,on the basis of CPU utilization and the number of replicas will get change 