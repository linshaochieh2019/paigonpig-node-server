// Firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./credentials/serviceAccountKey.json');

// Check if the service account key is valid
if (!serviceAccount || !serviceAccount.project_id) {
  console.error('Service account key is not valid. Exiting...');
  process.exit(1);
}

// Initialize Firebase app (only once)
initializeApp({
  credential: cert(serviceAccount)
});

// Initialize Firestore and export the instance
const db = getFirestore('paigonpig-nosql');
module.exports = db;
