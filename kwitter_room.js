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
user_name = localStorage.getItem ("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {  
      firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
           childKey  = childSnapshot.key;
           Room_names = childKey;
          
           //new code
    
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
      
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}