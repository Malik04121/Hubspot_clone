window.onload=function onlod(){
    let software=document.querySelector(".soft1")
    software.style.display="none";
    let resource=document.querySelector(".res1")
    resource.style.display="none";
}
let soft=document.querySelector(".soft");
soft.addEventListener("mousemove",show)
function show(){
    let software=document.querySelector(".soft1")
    software.style.display="block";
    let resource=document.querySelector(".res1")
    resource.style.display="none";
}
let soft1=document.querySelector(".soft");
soft1.addEventListener("mouseover",show)
soft1.addEventListener("mouseout",rem)
function show(){
    let software=document.querySelector(".soft1")
    software.style.display="block";
    let resource=document.querySelector(".res1")
    resource.style.display="none";
}

function rem(){
    let software=document.querySelector(".soft1")
    software.style.display="none";
    let resource=document.querySelector(".res1")
    resource.style.display="none";
}

// ***********************************************************************************************
let resourc=document.querySelector(".res");
resourc.addEventListener("mousemove",show1)
function show1(){
    let software=document.querySelector(".soft1")
    software.style.display="none";
    let resource=document.querySelector(".res1")
    resource.style.display="block";
}
let resources=document.querySelector(".res");
resources.addEventListener("mouseover",show2)
resources.addEventListener("mouseout",rem1)
function show2(){
    let software=document.querySelector(".soft1")
    software.style.display="none";
    let resource=document.querySelector(".res1")
    resource.style.display="block";
}

function rem1(){
    let software=document.querySelector(".soft1")
    software.style.display="none";
    let resource=document.querySelector(".res1")
    resource.style.display="none";
}





