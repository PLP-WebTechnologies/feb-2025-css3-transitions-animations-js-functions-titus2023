// Color change with animation
const colorBtn = document.getElementById("colorButton");
colorBtn.addEventListener("click", () => {
  colorBtn.classList.toggle("active");
});

// Animated Box movement
let moved = false;
function moveBox() {
  const box = document.getElementById("animatedBox");
  moved = !moved;
  box.style.transform = moved ? "translateX(200px)" : "translateX(0)";
}

// Tab switch
function openTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('show'));
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

  document.getElementById(id).classList.add('show');
  event.target.classList.add('active');
}

// Form with local storage
const form = document.getElementById("userForm");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("useremail");

window.onload = () => {
  const savedName = localStorage.getItem("username");
  const savedEmail = localStorage.getItem("useremail");

  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
};

form.addEventListener("input", () => {
  document.getElementById("nameFeedback").textContent = nameInput.value ? "" : "Name is required";
  document.getElementById("emailFeedback").textContent = /^[^@]+@[^@]+\.[^@]+$/.test(emailInput.value)
    ? ""
    : "Invalid email";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("username", nameInput.value);
  localStorage.setItem("useremail", emailInput.value);
  alert("Info saved in LocalStorage!");
});
