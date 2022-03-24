//menue 
let eat =document.querySelector(".eat");
let drink =document.querySelector(".drink");

document.querySelector(".eat-button").addEventListener("click" ,
function(){
    drink.style.display="none";
    eat.style.display="block";
    document.querySelector(".drink-button").classList.remove("activ")
    document.querySelector(".eat-button").classList.add("activ")
}
);
document.querySelector(".drink-button").addEventListener("click" ,
function(){
    eat.style.display="none";
    drink.style.display="block";
    document.querySelector(".eat-button").classList.remove("activ")
    document.querySelector(".drink-button").classList.add("activ")
}
);
//home pages
let page1=document.querySelector(".page-one");
let page2=document.querySelector(".page-two");

setInterval(function (){
    if(page1.style.display==="block"){
       page1.style.display="none",
       page2.style.display="block"
    }
    else{
        page2.style.display="none",
        page1.style.display="block",
        console.log("aya")
    }
    }, 5000);
