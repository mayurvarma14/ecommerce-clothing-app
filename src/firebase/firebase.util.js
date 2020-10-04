import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAkdNi8fE2GPe45xrVPqRzwwiZXvQitTCA',
  authDomain: 'ecommerce-clothing-db-ce020.firebaseapp.com',
  databaseURL: 'https://ecommerce-clothing-db-ce020.firebaseio.com',
  projectId: 'ecommerce-clothing-db-ce020',
  storageBucket: 'ecommerce-clothing-db-ce020.appspot.com',
  messagingSenderId: '179395034617',
  appId: '1:179395034617:web:0efcd2daaf5d2898499128',
  measurementId: 'G-PMEFQLH2ZZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;