const statusElement = document.getElementById("status")
const addFriendElement = document.getElementById("addFriendBtn")
const removeFriendElement = document.getElementById("removeFriendBtn")


//    statusElement.innerText = "Friend"
//    statusElement.classList.remove("unfriend")
//    statusElement.classList.add("friend")

// })

addFriendElement.addEventListener("click", addFriend)
 removeFriendElement.addEventListener("click",removeFriend)
 
 function removeFriend(){
   statusElement.innerText = "unknown"
   statusElement.classList.remove("friend")
   statusElement.classList.add("unFriend")
 }
 function addFriend(){
   statusElement.innerText = "Friend"
   statusElement.classList.remove("unFriend")
   statusElement.classList.add("friend")
 }