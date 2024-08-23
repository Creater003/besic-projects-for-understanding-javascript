const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
    
         if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

let imageUrl = ["https://images.pexels.com/photos/27359231/pexels-photo-27359231/free-photo-of-lemon-slices-on-a-white-table-with-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17697811/pexels-photo-17697811/free-photo-of-view-of-a-motorboat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/18820793/pexels-photo-18820793/free-photo-of-smiling-black-haired-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17153122/pexels-photo-17153122/free-photo-of-woman-posing-in-green-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/8330846/pexels-photo-8330846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

function selectRandomImage() {
    var random = Math.floor(Math.random()*imageUrl.length)
    console.log(imageUrl.length);
    return imageUrl[random]
    
    
 
}
let  main = document.querySelector(".main")

main.addEventListener("mousemove",
    throttleFunction((dets) => {

        let NewDiv = document.createElement('div')
        NewDiv.classList.add("newdiv")
        console.log('NewDiv');
        document.body.appendChild(NewDiv)
        NewDiv.style.top =dets.y+'px'
        NewDiv.style.left=dets.x+'px'

       let img =  document.createElement('img')


       img.src =selectRandomImage()
        NewDiv.appendChild(img)


       gsap.to(img,{
        y:"0",
        ease: Power3,
        duration: 0.2
           })

        setTimeout(function(){
            NewDiv.remove()
        },1000)




        

        
    }, 100));