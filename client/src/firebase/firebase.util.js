import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
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

const firebaseApp = initializeApp(config);

export const auth = getAuth();
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createUserProfileDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

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

  return userSnapshot;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
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

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'collections');
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
// };
export const getCategoriesAndDocuments = async (collections) => {
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const transformedCollection = querySnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
