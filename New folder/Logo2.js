const clickDouble = document.getElementById("image")
const showHeart = document.getElementById("heart1")

clickDouble.addEventListener("dblclick" ,displayHeart)

function displayHeart(){
        showHeart.style.opacity = 0.9
        showHeart.style.scale = 3 
        setTimeout(() => {
            showHeart.style.opacity = 0;
            showHeart.style.scale = 1; 

        }, 2000);
    }