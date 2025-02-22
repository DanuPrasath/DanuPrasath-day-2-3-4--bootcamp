let celsius = document.getElementById("celsius");
let fahrenheat = document.getElementById("fahrenheat");


function celToFar(){
    let output =(parseFloat(celsius.value)*9/5)+32;

    fahrenheat.value=parseFloat(output.toFixed(2));
    
}
function farToCel(){
    let output =(parseFloat(fahrenheat.value)-32) *5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output);
}
