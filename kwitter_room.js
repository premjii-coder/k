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
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

  }
  function get_data(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
        room_name=childKey;
        console.log(room_name);
        row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    });
});
  }
  get_data();
  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
  }
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }
