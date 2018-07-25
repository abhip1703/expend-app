import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

const database = firebase.database();
export {firebase, database as default};
// database.ref().set({
//     name: 'Andrew',
//     age: 21,
//     location: {
//         city: 'Mumbai',
//         state: 'Maharashtra'
//     }
//   }).then(() => {
//       console.log('data is saved');
      
//   }).catch((e) => {
//       console.log('failed', e);
      
//   });

//   database.ref('age').set(null);

// // database.ref('age').set(27);

// // database.ref('age').remove().then(() => {
// //     console.log('data removed');
    
// // }).catch((e) => {
// //     console.log(e);
// // });