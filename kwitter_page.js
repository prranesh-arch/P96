var firebaseConfig = {
      apiKey: "AIzaSyD7MLiOLuQxp38Ty_MaBSUGia3Bdebw2Wo",
      authDomain: "practice-make-a--man-perfect.firebaseapp.com",
      databaseURL: "https://practice-make-a--man-perfect-default-rtdb.firebaseio.com/",
      projectId: "practice-make-a--man-perfect",
      storageBucket: "practice-make-a--man-perfect.appspot.com",
      messagingSenderId: "337328561978",
      appId: "1:337328561978:web:5a46cc21e45f2d55073a03"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localstorage.getItem("room_name");

    function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value = "";
    }

    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"
      message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      

} });  }); };
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }