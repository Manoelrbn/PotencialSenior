function submitForm() {
    
    const cadastroVagaForm = {
        nome_empresa: document.getElementById("nome-empresa").value,
        cnpj: document.getElementById("cnpj").value,
        categoria_empresa: document.getElementById("categoria-empresa").value,
        nome_vaga: document.getElementById("nome-vaga").value,
        salario: document.getElementById("salario").value,
        localizacao: document.getElementById("localizacao").value,
        resumo: document.getElementById("resumo").value,
        responsabilidades: document.getElementById("responsabilidades").value,
        requisitos: document.getElementById("requisitos").value
    };

    sessionStorage.setItem("cadastroVagaForm", JSON.stringify(cadastroVagaForm));

    window.location.href = "apresentacao_vaga.html";
}
