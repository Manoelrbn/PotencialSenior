document.addEventListener("DOMContentLoaded", function() {
    var cadastro_vagas = [{
        nome_empresa: "Nome da empresa",
        titulo_vaga: "Título da vaga",
        faixa_salarial: "A combinar",
        localizacao: "Remoto / Híbrido",
        beneficios: ["Assistência Médica","Assistência Odontológica","Vale Transporte", "Vale Alimentação"],
        descrição:"Breve resumo sobre a vaga",
        responsabilidades: ["Compartilhar insights e estratégias com base em sua trajetória profissional.", "Mentorar e orientar equipes mais jovens, promovendo o aprendizado intergeracional.", "Participar de projetos que valorizem a diversidade e a inclusão.", "Contribuir com ideias para a melhoria contínua dos nossos processos e produtos."],
        requisitos: ["Experiência significativa em sua área de atuação (preferencialmente acima de 15 anos).", "Habilidades de comunicação e empatia.", "Capacidade de adaptação a novas tecnologias e metodologias.", "Desejo de continuar aprendendo e se desenvolvendo."]
    }];
    
    var TituloVaga = document.getElementById("TituloVaga"); 
    var Titulo = document.createElement("h1");
    Titulo.textContent = `${cadastro_vagas[0].titulo_vaga}`;
    TituloVaga.appendChild(Titulo);
    const lista = document.querySelector(".fa-ul.Listas");
    const faixaSalarialLi = document.createElement("li");
    faixaSalarialLi.innerHTML = `<span class="fa-li"><i class="fa-regular fa-dollar-sign"></i></span><strong>Faixa Salarial: </strong> ${cadastro_vagas[0].faixa_salarial}`;
    const localizacaoLi = document.createElement("li");
    localizacaoLi.innerHTML = `<span class="fa-li"><i class="fa-solid fa-location-dot"></i></span><strong>Localização: </strong> ${cadastro_vagas[0].localizacao}`;
    lista.appendChild(faixaSalarialLi);
    lista.appendChild(localizacaoLi);
    const listaBeneficios = document.querySelector(".Listas.Beneficios");
    cadastro_vagas[0].beneficios.forEach(function(beneficio) {
        const beneficioItem = document.createElement("li");
        beneficioItem.textContent = beneficio;
        listaBeneficios.appendChild(beneficioItem);
    });
    const listaResponsabilidades = document.querySelector(".Listas.Responsabilidades");
    cadastro_vagas[0].responsabilidades.forEach(function(responsabilidade) {
        const responsabilidadeItem = document.createElement("li");
        responsabilidadeItem.textContent = responsabilidade;
        listaResponsabilidades.appendChild(responsabilidadeItem);
    });

    const listaRequisitos = document.querySelector(".Listas.Requisitos");
    cadastro_vagas[0].requisitos.forEach(function(requisito) {
        const requisitoItem = document.createElement("li");
        requisitoItem.textContent = requisito;
        listaRequisitos.appendChild(requisitoItem);
    });
});

function mostrarConfirmação()
{
    var mensagem = document.getElementById("Confirmação");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    mensagem.style.display = "block";
}