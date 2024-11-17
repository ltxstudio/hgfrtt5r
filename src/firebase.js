// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFz1hcvq7FvZBU3KxIpDVH1Z6YKwUo98",
  authDomain: "md-to-txt.firebaseapp.com",
  projectId: "md-to-txt",
  storageBucket: "md-to-txt.firebasestorage.app",
  messagingSenderId: "11304797402",
  appId: "1:11304797402:web:7e5af0ac0f1cb95d3e91e3",
  measurementId: "G-YH78GKHW2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
