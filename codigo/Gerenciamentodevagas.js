document.addEventListener("DOMContentLoaded", () => {
    const etapas = document.querySelectorAll(".etapa");
    const btnAvancar = document.querySelector(".btn-avancar");
    const btnRejeitar = document.querySelector(".btn-rejeitar")
    let etapaAtual = 0;
  
    btnAvancar.addEventListener("click", () => {
      if (etapaAtual < etapas.length - 1) {
        // Remove a classe "ativa" da etapa atual
        etapas[etapaAtual].classList.remove("ativa");
        
        // Avança para a próxima etapa
        etapaAtual++;
        
        // Adiciona a classe "ativa" na próxima etapa
        etapas[etapaAtual].classList.add("ativa");
      } else {
        alert("O candidato já está na etapa final!");
      }
    });
    
    btnRejeitar.addEventListener("click", () => {
      // Remove a classe "ativa" da etapa atual
      etapas[etapaAtual].classList.remove("ativa");
      
      // Define etapaAtual como 0 (início do processo)
      etapaAtual = 0;
      
      // Adiciona a classe "ativa" à primeira etapa
      etapas[etapaAtual].classList.add("ativa");

      alert("O candidato foi rejeitado e o progresso foi reiniciado.");
    });
  });