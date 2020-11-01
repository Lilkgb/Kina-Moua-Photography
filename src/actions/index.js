import constants from './../constants';
import * as firebase from 'firebase';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    console.log("user is signed in")
  } else {
    console.log("no user logged in")
  }
})