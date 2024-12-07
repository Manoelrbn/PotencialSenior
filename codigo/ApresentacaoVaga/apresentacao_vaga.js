const formData = JSON.parse(sessionStorage.getItem("cadastroVagaForm"));

        document.getElementById("exibirEmpresa").textContent = formData.nome_empresa;
        document.getElementById("exibirNome").textContent = formData.nome_vaga;
        document.getElementById("exibirSalario").textContent = formData.salario;
        document.getElementById("exibirLoc").textContent = formData.localizacao;
        document.getElementById("exibirDescricao").textContent = formData.resumo;

        document.addEventListener('DOMContentLoaded', function() {
        const beneficios = localStorage.getItem('beneficios');
        const responsabilidades = localStorage.getItem('responsabilidades');
        const requisitos = localStorage.getItem('requisitos');


        if (beneficios) {
            const beneficiosArray = beneficios.split('\n');
            const lista = document.getElementById('beneficios-lista');
            beneficiosArray.forEach(function(beneficio) {
                const li = document.createElement('li');
                li.textContent = beneficio;
                lista.appendChild(li);
            });
        }

        if (responsabilidades) {
        const responsabilidadesArray = responsabilidades.split('\n');
        const listaResponsabilidades = document.getElementById('exibirResponsabilidades');
        responsabilidadesArray.forEach(function(responsabilidade) {
            const li = document.createElement('li');
            li.textContent = responsabilidade;
            listaResponsabilidades.appendChild(li);
        });
    }

    if (requisitos) {
        const requisitosArray = requisitos.split('\n');
        const listaRequisitos = document.getElementById('exibirRequisitos');
        requisitosArray.forEach(function(requisito) {
            const li = document.createElement('li');
            li.textContent = requisito;
            listaRequisitos.appendChild(li);
        });
    }
        
    });