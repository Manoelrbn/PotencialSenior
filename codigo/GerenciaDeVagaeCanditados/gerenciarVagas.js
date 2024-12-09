// Função para preencher as vagas cadastradas
document.addEventListener('DOMContentLoaded', function() {
    const vagas = JSON.parse(sessionStorage.getItem("vagasCadastradas"));  // Pega os dados das vagas do sessionStorage

    // Pega o container onde os cards serão exibidos
    const container = document.getElementById('vagas-cadastradas');
    
    // Preenche os novos cards a partir do sessionStorage
    if (vagas && vagas.length > 0) {
        vagas.forEach(function(vaga) {
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.textContent = vaga.nome_vaga || "Título da Vaga";
            
            const description = document.createElement('p');
            description.textContent = vaga.descricao_vaga || "Descrição da vaga não disponível.";

            const editButton = document.createElement('button');
            editButton.classList.add('edit-button');
            editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
            editButton.onclick = function() {
                editarVaga(vaga.id); // Chama a função de editar com o ID da vaga
            };

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteButton.onclick = function() {
                excluirVaga(vaga.id, card); // Chama a função para excluir o card
            };

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(editButton);
            card.appendChild(deleteButton);
            container.appendChild(card);
        });
    }

    // Função para adicionar nova vaga no sessionStorage
    document.querySelector('.add-button').addEventListener('click', function() {
        const novaVaga = {
            id: Date.now(),  // Gera um ID único baseado no timestamp
            nome_vaga: "Nova Vaga",  // Nome da vaga
            descricao_vaga: "Descrição da nova vaga",  // Descrição da vaga
            salario: "R$ 3.000 - R$ 5.000",  // Faixa salarial
            localizacao: "Localização da vaga"  // Localização
        };

        // Recupera as vagas já cadastradas e adiciona a nova
        let vagasArmazenadas = JSON.parse(sessionStorage.getItem("vagasCadastradas")) || [];
        vagasArmazenadas.push(novaVaga);
        sessionStorage.setItem("vagasCadastradas", JSON.stringify(vagasArmazenadas));

        // Atualiza a tela com o novo card
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h2');
        title.textContent = novaVaga.nome_vaga;
        
        const description = document.createElement('p');
        description.textContent = novaVaga.descricao_vaga;

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editButton.onclick = function() {
            editarVaga(novaVaga.id); // Chama a função de editar com o ID da vaga
        };

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.onclick = function() {
            excluirVaga(novaVaga.id, card); // Chama a função para excluir o card
        };

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(editButton);
        card.appendChild(deleteButton);
        container.appendChild(card);
    });
});

// Função para editar uma vaga
function editarVaga(vagaId) {
    sessionStorage.setItem("vagaEdicao", vagaId);
    window.location.href = "/pmg-es-2024-2-ti1-2401100-potencial-senior/codigo/ApresentacaoVaga/cadastro_vaga.html";
}

// Função para excluir uma vaga
function excluirVaga(vagaId, cardElement) {
    // Recupera as vagas cadastradas
    let vagasArmazenadas = JSON.parse(sessionStorage.getItem("vagasCadastradas")) || [];
    
    // Remove a vaga do array
    vagasArmazenadas = vagasArmazenadas.filter(vaga => vaga.id !== vagaId);
    
    // Atualiza o sessionStorage com o novo array de vagas
    sessionStorage.setItem("vagasCadastradas", JSON.stringify(vagasArmazenadas));
    
    // Remove o card da interface
    cardElement.remove();
}
