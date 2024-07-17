const imageArray = [
    {
        image: "images/N1.jpg",
        name: "harry"
    },
    {
        image: "images/N2.jpg",
        name: "john",
    },
    {
        image: "images/N3.jpg",
        name: "khan",
    },
    {
        image: "images/N4.jpg",
        name: "kulam",
    },
   
]
function userimages(users) {
    const userdata = document.getElementById("list");
    imageArray.forEach(item => {
        const userlist = document.createElement("li");
        userlist.classList.add("listitem");
        const userimage = document.createElement("img");
        userimage.setAttribute("class","pics");
        const username = document.createTextNode(item.name)
        userimage.src = item.image
        userlist.appendChild(userimage)
        userlist.appendChild(username)
        userdata.appendChild(userlist)
        
    })
}
userimages(imageArray)