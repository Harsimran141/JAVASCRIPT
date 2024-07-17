const imageArray = [
     
    {image:"images/G2.jpg"},
    {image:"images/G3.jpg"},
    {image:"images/G4.jpg"},
    {image:"images/G5.jpg"},
    {image:"images/G6.jpg"},
    {image:"images/G7.jpg"},
    {image:"images/G8.jpg"},
    {image:"images/G9.jpg"},
    {image:"images/G10.jpg"},
]
//console.log(Pics)
const imageTag = document.getElementById("img")
console.log(imageTag)
const nextArrow = document.getElementById("Next")
//console.log(nextArrow)
const PrevArrow = document.getElementById("Prev")
//console.log(PrevArrow)
const name1 = document.getElementById("name")
const indicator1 = document.getElementById("Newdot")
let newImage = 0
function nextImage() {
    let card = imageArray[newImage]
    console.log(card);
    imageTag.src = card.image
    newImage++
    // name1.innerText = "NATURE"
    if (newImage == imageArray.length) {
        newImage = 0
    }
    let indicator = '';
    for(let index in imageArray){
        if(newImage == index){
            indicator +=  `<div class="dot" style = "opacity: 1;"></div>`

        }
        else{
            indicator += `<div class="dot"></div>`
        }
    }
    indicator1.innerHTML=indicator;
}
nextArrow.addEventListener("click", nextImage)
PrevArrow.addEventListener("click", function () {
    let card1 = imageArray[newImage]
     console.log(card1,newImage)
    imageTag.src = card1.image
    newImage--
    if (newImage == -1) {
        newImage = imageArray.length -1
    }
})