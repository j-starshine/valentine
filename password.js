const enterBtn = document.getElementById("enterBtn");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

const PASSWORD = "spencer";

enterBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

function checkPassword() {
  const input = passwordInput.value.trim().toLowerCase();

  if (input === PASSWORD) {
    window.location.href = "index.html";
  } else {
    errorText.classList.remove("hidden");
    passwordInput.value = "";
  }
}