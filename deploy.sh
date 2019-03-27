#!/bin/sh
REGISTRY_URI=$(kubectl describe svc docker-registry -n keptn | grep IP: | sed 's~IP:[ \t]*~~')

# Create secret for ORG, USER, TOKEN
kubectl create secret generic -n keptn github-credentials --from-literal=org=githuborg --from-literal=user=githubuser --from-literal=token=token

# Deploy service
rm -f config/gen/service.yaml

cat config/service.yaml | \
  sed 's~REGISTRY_URI_PLACEHOLDER~'"$REGISTRY_URI"'~' >> config/gen/service.yaml

kubectl delete -f config/gen/service.yaml --ignore-not-found
kubectl apply -f config/gen/service.yaml
