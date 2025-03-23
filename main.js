document.getElementById("ChangeImageButton").addEventListener("click",function ()){


  let img = document.getElementById("help");

  img.src = img.src.includes("")




}

//For arrow button
function changeImage() {
  const buttonImage = document.getElementById("arrowButton");
  // Check the current image source and toggle to the other image
  if (buttonImage.src.includes("Variant2.png")) {
      buttonImage.src = "Arrow Button.png";
  } else {
      buttonImage.src = "Arrow Button.png";
  }
}
