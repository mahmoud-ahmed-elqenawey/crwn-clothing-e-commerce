// Import firebase app
import { initializeApp } from 'firebase/app';

// Import firebase auth
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

// Import firestore Database
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

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

// Initialize Firebase Providers to sign in
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

facebookProvider.setCustomParameters({
    display: 'popup',
});

// get auth
export const auth = getAuth();

// sign in with Google popup
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

// sign in with Facebook popup
export const signInWithFacebookPopup = () =>
    signInWithPopup(auth, facebookProvider);

// get Database
export const db = getFirestore();

// add collection to and document to firestore database
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

// get Categories And Documents from firestore database
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

// console.log(getCategoriesAndDocuments());

// create User Document in fire store database From Auth
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

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
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

// 'sign Up / create' user with email and password
export const createUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

// 'sign in / login' user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

// 'sign Out / log' out user
export const signOutUser = async () => await signOut(auth);

// Listener when auth state changes
export const onAuthStateChangedListener = async (callback) =>
    onAuthStateChanged(auth, callback);
