function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("will1")) {
        image.src = "../IMG/novia1.jpg";
 
    } else {
        image.src = "../IMG/novia2.jpg";
 
    }
}
	
function changeImage2() {
    var image = document.getElementById('myImage');
    if (image.src.match("will1")) {
        image.src = "../IMG/novia2.jpg";
 
    } else {
        image.src = "../IMG/novia1.jpg";
 
    }
}
	
function mostrar(){
document.getElementById('oculto').style.display = 'block';}

function ocultar(){
document.getElementById('oculto').style.display = 'none';}
