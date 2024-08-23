const username = "ashishkumarmishra"
const email ="jdmishra7503@gmail.com"
const password = 123456 


//this is again a simple function to validate the form and if the form is validated then the user will be 
// redirected to the facebook page
function validateForm() {

    var givenName = document.getElementById("userName").value;

    givenName = givenName.toLowerCase().replace(/\s+/g,"");
    console.log(givenName);


    var  givenEmail = document.getElementById("userEmail").value;
    console.log(givenEmail);

    var givenPass = document.getElementById("userPass").value;
    console.log(givenPass);
    

    if (username == givenName && email == givenEmail && password == givenPass){


        alert("verification successful redirecting to main page")
        //redirecting using the javascript object 
        window.location.href = 'index2.html';
        return true

    } 
    
    else{
            alert("please eneter correct credentials")
            return false;
        
    }

    
}



//again getting the friendship status
var friendshipStatus = document.querySelector(".girlStatus");
console.log(friendshipStatus);

var addFriend = document.querySelector(".addFriend")
console.log(addFriend);

//on click the sent request button this finction will evoke and the request will be send 
function sentFriendrequest() {
    friendshipStatus.innerHTML = "Request sent"
    friendshipStatus.style.color ="grey"


    //the request will be accepted by the girl in 2 second
    // set time out make out code asynchronous
    setTimeout(function(){
        alert("Request accepetd");
        friendshipStatus.innerHTML ="Request Accepted"
        friendshipStatus.style.color = "green"

    },5000)
}



//id the button remove friend is clickeed the this fnuction will be invoked and the another user will not be friends anyore
function removeFrined(){
    friendshipStatus.innerHTML ="friend removed ";
    friendshipStatus.style.color = "red"

}

