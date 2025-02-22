const myButton=document.getElementById("mybutton");
const myImg=document.getElementById("myimg");

mybutton.addEventListener('click',event=>{

if(myImg.style.visibility==="hidden"){
    myImg.style.visibility="visible";
    myButton.textContent="hide";
}
    else{
        myImg.style.visibility="hidden";
    myButton.textContent="show";
}
});


