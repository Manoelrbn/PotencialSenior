
document.addEventListener('DOMContentLoaded', function () {
    carregarDadosCurriculo();
});

function carregarDadosCurriculo() {
    const curriculo = JSON.parse(localStorage.getItem('curriculo'));
    
    if (curriculo) {
        // Dados Pessoais
        document.getElementById('nome').textContent = curriculo.nome;
        document.getElementById('email').textContent = `E-mail: ${curriculo.email}`;
        document.getElementById('idade').textContent = `Idade: ${curriculo.idade} anos`;
        document.getElementById('nacionalidade').textContent = `País de nacionalidade: ${curriculo.nacionalidade}`;
        
        // Endereço
        document.getElementById('endereco').textContent = curriculo.endereco;
        document.getElementById('celular').textContent = `Celular: ${curriculo.celular}`;
        
        // Foto de Perfil
        if (curriculo.foto) {
            document.getElementById('foto-preview').src = curriculo.foto;
        }

        // Resumo Profissional
        document.getElementById('resumo').textContent = curriculo.resumo;

        // Formação Acadêmica
        const formacaoAcademicaContainer = document.getElementById('formacao-academica');
        curriculo.formacaoAcademica.forEach(formacao => {
            const formacaoElement = document.createElement('div');
            formacaoElement.innerHTML = `
                <strong>${formacao.escolaridade}</strong><br>
                <p>${formacao.nomeCurso} - ${formacao.instituicao}<br>
                ${formacao.anoInicio} - ${formacao.anoConclusao}</p>
            `;
            formacaoAcademicaContainer.appendChild(formacaoElement);
        });

        // Histórico Profissional
        const historicoProfissionalContainer = document.getElementById('historico-profissional');
        curriculo.historicoProfissional.forEach(experiencia => {
            const experienciaElement = document.createElement('div');
            experienciaElement.innerHTML = `
                <strong>${experiencia.cargo} - ${experiencia.anoInicioProfissional}/${experiencia.anoTerminoProfissional}</strong><br>
                <p>${experiencia.empresa} - ${experiencia.cidadeProfissional}</p>
                <p>${experiencia.descricaoCargo}</p>
            `;
            historicoProfissionalContainer.appendChild(experienciaElement);
        });
    } else {
        console.log("Nenhum currículo encontrado no localStorage.");
    }
}

function toggleEdit() {
    const isEditing = document.querySelector('.editable[contenteditable="true"]') !== null;
    const elements = document.querySelectorAll('.editable');
    const button = document.querySelector('.edit-btn');
    
    if (isEditing) {
        elements.forEach(el => el.setAttribute('contenteditable', 'false'));
        button.textContent = 'Editar currículo';
    } else {
        elements.forEach(el => el.setAttribute('contenteditable', 'true'));
        button.textContent = 'Salvar';
    }
}
