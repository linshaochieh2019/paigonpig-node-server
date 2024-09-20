# Deployment
Build and Push the Docker Image:
gcloud config set project paigonpig
gcloud builds submit --tag gcr.io/paigonpig/node-server .

Deploy to Cloud Run:
gcloud run deploy node-server \
  --image gcr.io/paigonpig/node-server \
  --platform managed \
  --region asia-east1 \
  --allow-unauthenticated