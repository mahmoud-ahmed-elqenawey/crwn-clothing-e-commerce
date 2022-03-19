// Import firebase app
import { initializeApp } from 'firebase/app';

// Import firebase auth
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

// Import firestore Database
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBweQSZblHbhCaBIfce7uKMzQ_UwsC5a3c',
    authDomain: 'crwn-clothing-db-1e01e.firebaseapp.com',
    projectId: 'crwn-clothing-db-1e01e',
    storageBucket: 'crwn-clothing-db-1e01e.appspot.com',
    messagingSenderId: '689957743915',
    appId: '1:689957743915:web:981ba6b7cde8d5ce15a96e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // check if user data is not exists in document in my collection database
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};
