

var getimage = document.querySelector(".container")
console.log(getimage);

var heart = document.querySelector("i")

heart.style.fontSize="0px"
getimage.addEventListener("dblclick",function () {
    heart.style.fontSize ="80px"
    var time = 2

    setTimeout(() => {
        heart.style.fontSize = "0px";
        
    }, 1000);
})