function changeImage(id,newSrc){

  document.getElementById(id).src=newSrc;


}

function changeBack(id,originalSrc){

  document.getElementById(id)=originalSrc;
}

document.getElementById("goggins").addEventListener("click",function(){

  changeImage("goggins","/stayhard.jpeg");

})

document.getElementById("/stayhard.jpeg").addEventListener("click",function(){

  changeBack("/stayhard.jpeg","goggins");

})
