import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCUr0gF7XLlN8WOKqold_dH9PyM-TRgn8Y",
    authDomain: "coworkapp-7e60a.firebaseapp.com",
    databaseURL: "https://coworkapp-7e60a.firebaseio.com",
    projectId: "coworkapp-7e60a",
    storageBucket: "coworkapp-7e60a.appspot.com",
    messagingSenderId: "894915179149"
  };
  const fire=firebase.initializeApp(config);
  export default fire;