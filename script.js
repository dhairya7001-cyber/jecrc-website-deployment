const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
  message.textContent = "Congratulations! Your website is working successfully.";
});
