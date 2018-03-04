function myFunction(e){
    e.style.backgroundColor="white";
    e.style.color="black";
}
function normal(e){
    e.style.backgroundColor="#383E4C";
    e.style.color="white"
}
function getData(){
    var name=document.getElementById("name").value;
    var subject=document.getElementById("subject").value;
    var email=document.getElementById("mail").value;
    var comment=document.getElementById("comment").value;
    /*all separate if-s to alert about each empty input*/
    if(!name){
        alert("Name Missing");
    }
    if(!email){
        alert("Email Missing");
    }
    if(!subject){
        alert("Subject missing");
    }
    if(!comment){
        alert("Comment missing");
    }
    else if(name && email && subject && comment){
        alert("Are you sure you want to send following information? \n Name: " + name + "\n E-Mail: " + email +
        "\n Subject: " + subject + "\n Message: " + comment);
    }
}
function clickGreen(){
    var text="This text was updated";
    document.getElementById("green-btn").innerHTML=text;
    document.getElementById("green-btn").style.backgroundColor="pink";
}
/*external button on the navbar will link to my profile*/
var external=document.getElementById("external");
external.onclick=function(){
    external.href="https://github.com/sojaph";
}
