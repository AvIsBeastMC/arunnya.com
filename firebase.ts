import 'firebase/firestore'
import 'firebase/analytics'

import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_api,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
    measurementId: process.env.NEXT_PUBLIC_measurementId
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;