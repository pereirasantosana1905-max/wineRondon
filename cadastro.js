// Adicione este trecho dentro do evento "DOMContentLoaded" em script.js

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Novo cadastro:", { name, email });
    window.location.href = "dashboard.html";
  });
}