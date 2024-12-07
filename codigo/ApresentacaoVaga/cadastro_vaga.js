function submitForm() {

    const beneficios = document.getElementById('beneficios').value;
    const responsabilidades = document.getElementById('responsabilidades').value;
    const requisitos = document.getElementById('requisitos').value;

    localStorage.setItem('beneficios', beneficios);
    localStorage.setItem('responsabilidades', responsabilidades);
    localStorage.setItem('requisitos', requisitos);
    
    window.location.href = 'apresentacao_vaga.html';

    
    const cadastroVagaForm = {
        nome_empresa: document.getElementById("nome-empresa").value,
        cnpj: document.getElementById("cnpj").value,
        categoria_empresa: document.getElementById("categoria-empresa").value,
        nome_vaga: document.getElementById("nome-vaga").value,
        salario: document.getElementById("salario").value,
        localizacao: document.getElementById("localizacao").value,
        resumo: document.getElementById("resumo").value,
    };

    sessionStorage.setItem("cadastroVagaForm", JSON.stringify(cadastroVagaForm));

    window.location.href = 'apresentacao_vaga.html';
}

document.getElementById('cnpj').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '/' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});

document.addEventListener('DOMContentLoaded', function() {
    const cadastroVagaForm = JSON.parse(sessionStorage.getItem("cadastroVagaForm"));
    if (cadastroVagaForm) {
        document.getElementById("nome-empresa").value = cadastroVagaForm.nome_empresa;
        document.getElementById("cnpj").value = cadastroVagaForm.cnpj;
        document.getElementById("categoria-empresa").value = cadastroVagaForm.categoria_empresa;
        document.getElementById("nome-vaga").value = cadastroVagaForm.nome_vaga;
        document.getElementById("salario").value = cadastroVagaForm.salario;
        document.getElementById("localizacao").value = cadastroVagaForm.localizacao;
        document.getElementById("resumo").value = cadastroVagaForm.resumo;
        document.getElementById("beneficios").value = localStorage.getItem('beneficios');
        document.getElementById("responsabilidades").value = localStorage.getItem('responsabilidades');
        document.getElementById("requisitos").value = localStorage.getItem('requisitos');
    }
});