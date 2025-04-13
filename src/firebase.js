import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-id",
  appId: "your-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

import { db } from './firebse.JS';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const addOrder = async (orderData) => {
  try {
    await addDoc(collection(db, 'orders'), {
      ...orderData,
      status: 'pending',
      timestamp: serverTimestamp()
    });
    console.log('Order placed successfully');
  } catch (err) {
    console.error('Error placing order:', err);
  }
};
