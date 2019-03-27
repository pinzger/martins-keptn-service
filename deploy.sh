#!/bin/sh
REGISTRY_URI=$(kubectl describe svc docker-registry -n keptn | grep IP: | sed 's~IP:[ \t]*~~')

# Deploy service
rm -f config/gen/service.yaml

cat config/service.yaml | \
  sed 's~REGISTRY_URI_PLACEHOLDER~'"$REGISTRY_URI"'~' >> config/gen/service.yaml

kubectl delete -f config/gen/service.yaml
kubectl apply -f config/gen/service.yaml
