var firebaseConfig = {
    apiKey: "AIzaSyBZ39jAq9_wAMNGWy5vwRc0UzCqYgPtZdI",
    authDomain: "kwittr-eb500.firebaseapp.com",
    databaseURL: "https://kwittr-eb500-default-rtdb.firebaseio.com",
    projectId: "kwittr-eb500",
    storageBucket: "kwittr-eb500.appspot.com",
    messagingSenderId: "89750582350",
    appId: "1:89750582350:web:a19c0154335c36902ebf1f",
    measurementId: "G-E8ZEEV1PRE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//ADD YOUR FIREBASE LINKS
function add_user(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}