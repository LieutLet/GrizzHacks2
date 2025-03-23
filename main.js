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


  // Link to the "UPLOAD A LINK" button (no id, so access by class)
  const uploadLinkButton = document.querySelector(".button:nth-of-type(3)");
  uploadLinkButton.addEventListener("click", function () {
      alert("Upload Link button clicked!");
  });
});
  