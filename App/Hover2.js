const Arraypic = [
    {
        image: "Newpics/AK.jpg",
        name: "Akshay Kumar",
    },
    {
        image: "Newpics/BD.jpg",
        name: "Boby Deol",
    },
    {
        image: "Newpics/Ik.JPG",
        name: "Irfan Khan",
    },
    {
        image: "Newpics/SD.jpg",
        name: "Sunny Deol",
    },
    {
        image: "newpics/SK.jpg",
        name: "Salman Khan",
    },
]
// console.log(Arraypic);
function images(elementarray) {
    let id = "list"
    const userlist = document.getElementById(id);
    elementarray.forEach(item => {
        const newlist = document.createElement("li");
        newlist.classList.add("images");
        const userimage = document.createElement("img");
        newlist.setAttribute('data-image', item.image);
        const username = document.createTextNode(item.name);
        userimage.src = item.image
        newlist.appendChild(userimage)
        newlist.appendChild(username)
        userlist.appendChild(newlist)

    })
}
images(Arraypic);

const displayimage = document.getElementById("table");
const listimages = document.querySelectorAll(".images");
listimages.forEach(items => {
    items.addEventListener("mouseenter", () => {
        const imagelink = items.getAttribute("data-image")
        // console.log(imagelink);
        displayimage.src = imagelink
        displayimage.style.display = "block"

    })
    items.addEventListener("mouseleave", function () {
        displayimage.style.display = "none"
    })
    items.addEventListener("mousemove", function () {
        displayimage.style.top = `${e.clientY}px`
        displayimage.style.left = `${e.clientX}px`
    })
})







