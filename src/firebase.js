import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAVGxEYn1-HPorJOoBi3hqfy34w0j6oZrw",
    authDomain: "staradhesive-f3d6b.firebaseapp.com",
    projectId: "staradhesive-f3d6b",
    storageBucket: "staradhesive-f3d6b.appspot.com",
    messagingSenderId: "864302125638",
    appId: "1:864302125638:web:f09a34623bd60745563047",
    measurementId: "G-ESWR8Y2Z6K"
};

// Initialize Firebase
function initFireBase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}


initFireBase();
export { firebase };