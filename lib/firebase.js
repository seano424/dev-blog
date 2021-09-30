import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA-0CnwTcnTp59H_9oCIS7xPLMssI57qWM',
  authDomain: 'dev-blog-200d2.firebaseapp.com',
  projectId: 'dev-blog-200d2',
  storageBucket: 'dev-blog-200d2.appspot.com',
  messagingSenderId: '524390609355',
  appId: '1:524390609355:web:daa5fd81cb6333f2b4864e',
  measurementId: 'G-0PW0R3KCN3',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
