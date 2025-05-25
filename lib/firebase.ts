"use client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "firebase/remote-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app =
  typeof window !== "undefined" ? initializeApp(firebaseConfig) : null;
const analytics =
  typeof window !== "undefined" && app !== null ? getAnalytics(app) : null;
const firestore =
  typeof window !== "undefined" && app !== null ? getFirestore(app) : null;
const remoteConfig =
  typeof window !== "undefined" && app !== null ? getRemoteConfig(app) : null;

if (remoteConfig !== null) {
  remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
}

export { app, analytics, firestore, remoteConfig };
