function checkCreds()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var badgeNum= document.getElementById("badge number").value;

    if (userName.length > 20 || userName.length< 3)
    {
        document.getElementById("loginStatus").innerHTML = "full name too long or too short";
    }

    else if(badgeNum.length !=3)
     {
         document.getElementById("loginStatus").innerHTML = "Badge is incorrect";
     }
        alert("Access Granted");
        location.replace("csc 102 puppy's")

}        