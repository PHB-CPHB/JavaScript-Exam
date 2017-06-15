import React from "react";
var User = require('../dbController/UserSchema')

function newUser (username, password) {
  var currentUser = User({
    username : username,
    password : password,
    role : "user"
  })

  currentUser.save(function(err){
    if(err) throw err;
    console.log("User created");
   })

}

const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
    <div>
      <input id="username" type="text" placeholder="Username"/>
      <input id="password" type="password" placeholder="Password"/>
      <button onclick={newUser(document.getElementById("username"), document.getElementById("password"))}/>
    </div>
  </div>
)

export default Home;
