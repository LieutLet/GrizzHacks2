
function changeImage(id,newSrc){
  document.getElementById(id).src=newSrc;
}

function changeBack(id,originalSrc){


// Example JavaScript to interact with the page
console.log("JavaScript is connected!");

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Link to the "HELP" button
  const helpButton = document.getElementById("Help");
  helpButton.addEventListener("click", function () {
    window.location.href = "help.html";
  
  });
document.getElementById("Upload").addEventListener("click", function () {
  // Trigger the hidden file input
  document.getElementById("fileInput").click();
});

// Handle file selection
document.getElementById("fileInput").addEventListener("change", function () {
  const selectedFile = this.files[0]; // Get the first selected file
  if (selectedFile) {
      alert(`File "${selectedFile.name}" has been selected!`);
  } else {
      alert("No file selected. Please try again.");
  }
});

/* 
  // Link to the "UPLOAD A LINK" button (no id, so access by class)
  const uploadLinkButton = document.querySelector(".button:nth-of-type(3)");
  uploadLinkButton.addEventListener("click", function () {
      alert("Upload Link button clicked!");
  });*/
});
  
//For arrow button
function changeArrowImage() {
  const buttonImage = document.getElementById("arrowButton");
  // Check the current image source and toggle to the other image
  console.log("entered click");
  if (buttonImage.src.includes("Variant2.png")) {
      buttonImage.src = "Arrow Button.png";
      console.log("Should be new image");
  } else {
      buttonImage.src = "Varient2.png";
      console.log("Should be old image");
  }
}


  document.getElementById(id)=originalSrc;
}


document.getElementById("goggins").addEventListener("click",function(){

  changeImage("goggins","/stayhard.jpeg");

})

document.getElementById("/stayhard.jpeg").addEventListener("click",function(){

  changeBack("/stayhard.jpeg","goggins");

})

