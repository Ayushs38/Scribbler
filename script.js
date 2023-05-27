// Get the modals and buttons
var signupModal = document.getElementById("signup-modal");
var signinModal = document.getElementById("signin-modal");
var createpostModal = document.getElementById("create-post-modal");
var signupButton = document.getElementById("signup-button");
var signinButton = document.getElementById("signin-button");
var createpostButton = document.getElementById("createpost");
// Get the link to open the sign-up modal
var signupLink = document.getElementById("signup-link");


// When the user clicks the sign-up button, open the sign-up modal
signupButton.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks the sign-in button, open the sign-in modal
signinButton.onclick = function() {
  signinModal.style.display = "block";
}

// When the user clicks the createpost button, open the createpost modal
createpostButton.onclick = function() {
  createpostModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
  if (event.target == createpostModal) {
    createpostModal.style.display = "none";
  }
}

// When the user clicks the close button, close the modal
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
    createpostModal.style.display = "none";
  }
}

// When the link is clicked, hide the sign-in modal and show the sign-up modal
signupLink.onclick = function() {
  signinModal.style.display = "none";
  signupModal.style.display = "block";
}