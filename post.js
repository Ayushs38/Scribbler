

function enableEditMode() {
  var postTitleElement = document.getElementById("post-title");
  var postTextElement = document.getElementById("post-text");
  var editButton = document.getElementById("edit-button");
  var saveButton = document.getElementById("save-button");

  postTitleElement.contentEditable = true;
  postTextElement.contentEditable = true;

  postTitleElement.classList.add("editable");
  postTextElement.classList.add("editable");

  editButton.style.display = "none";
  saveButton.style.display = "inline-block";
}

function saveChanges() {
  var postTitleElement = document.getElementById("post-title");
  var postTextElement = document.getElementById("post-text");
  var editButton = document.getElementById("edit-button");
  var saveButton = document.getElementById("save-button");

  postTitleElement.contentEditable = false;
  postTextElement.contentEditable = false;

  postTitleElement.classList.remove("editable");
  postTextElement.classList.remove("editable");

  editButton.style.display = "inline-block";
  saveButton.style.display = "none";
}














var likeCount = 0; // Initialize the like count

function increaseLikeCount() {
  likeCount++; // Increase the like count by 1

  var likeCountElement = document.getElementById("like-count");
  likeCountElement.textContent = likeCount + " person liked this!";
}



function addComment() {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value;
  
    if (commentText.trim() !== "") {
      var commentList = document.getElementById("comment-list");
  
      var li = document.createElement("li");
      var div = document.createElement("div");
      div.classList.add("comment");
      var p = document.createElement("p");
      p.textContent = commentText;
  
      div.appendChild(p);
      li.appendChild(div);
      commentList.appendChild(li);
  
      commentInput.value = ""; // Clear the comment textarea
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var commentSubmitBtn = document.getElementById("comment-submit");
    commentSubmitBtn.addEventListener("click", addComment);
  });
  