document.addEventListener("DOMContentLoaded", () => {
    // 1. Redirecionamento dos links de navegação (Navbar)
    const navLinks = {
        "Início": "inicio.html",
      "Soluções": "solucoes.html",
      "Recursos": "recursos.html",
      "Preços": "precos.html"
    };
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const text = link.textContent.trim();
        if (navLinks[text]) {
          window.location.href = navLinks[text];
        }
      });
    });
  
    // 2. Botões de ação do Cabeçalho
    const btnlogin = document.querySelector(".btn-outline");
    const btnExperimente = document.querySelector(".btn-primary");
  
    if (btnlogin) {
      btnlogin.addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }
  
    if (btnExperimente) {
      btnExperimente.addEventListener("click", () => {
        window.location.href = "cadastro.html";
      });
    }
  
    // 3. Envio do Formulário de Login
    const loginForm = document.querySelector(".form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página
  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Aqui você fará a validação no futuro. Por enquanto, simula o sucesso:
        console.log("Tentativa de login com:", email);
        
        // Redireciona para o painel principal do usuário após logar
        window.location.href = "dashboard.html";
      });
    }
  });