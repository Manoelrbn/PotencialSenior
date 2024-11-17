document.addEventListener("DOMContentLoaded", function() {
    var cursos = [
        {
            titulo_curso:"Como conseguir um novo emprego?",
            categoria:"Desenvolvimento Pessoal e Profissional",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/Como-Conseguir-um-Novo-Emprego"
        },
        {
            titulo_curso:"Introdução a Administração",
            categoria:"Negócios e Inovação",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/introducao-a-administracao"
        },
        {
            titulo_curso:"Microsoft Excel - Básico",
            categoria:"Produtividade",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/microsoft-excel-2016-basico"
        },
        {
            titulo_curso:"Organização Pessoal",
            categoria:"Desenvolvimento Pessoal e Profissional",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/organizacao-pessoal"
        },
        {
            titulo_curso:"Introdução à Gestão de Projetos",
            categoria:"Negócios e Inovação",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/introducao-a-gestao-de-projetos"
        },
        {
            titulo_curso:"Educação Financeira",
            categoria:"Desenvolvimento Pessoal e Profissional",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/educacao-financeira"
        },
        {
            titulo_curso:"Word na Prática",
            categoria:"Produtividade",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/word-na-pratica"
        },
        {
            titulo_curso:"Pensamento Computacional",
            categoria:"Metodologias de Aprendizagem",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/pensamento-computacional"
        },
        {
            titulo_curso:"Conhecendo o Outlook",
            categoria:"Produtividade",
            plataforma:"Fundação Bradesco",
            link:"https://www.ev.org.br/cursos/microsoft-office-365-conhecendo-o-outlook"
        }
    ];

    
    cursos.forEach(function(curso, index){
        var card = document.getElementById(`card-body${index}`);
        var pcat = document.querySelector(`.descricao${index}`);
        const cards = document.querySelectorAll('.card');
        if (card) {
            card.innerHTML = "";
            const titulo = document.createElement("h5");
            titulo.textContent = curso.titulo_curso;
            card.appendChild(titulo);
            pcat.textContent = curso.categoria;
            card.appendChild(pcat);
            const plataforma = document.createElement("p");
            plataforma.classList.add("plataforma");
            plataforma.innerHTML = `<i class="fa-solid fa-user-graduate" style="color: #bfbfbf;"></i> ${curso.plataforma}`;
            card.appendChild(plataforma);
            const link = document.createElement('a');
            link.href = curso.link; 
            link.classList.add('card-link');
            link.target = "_blank";
            card.parentNode.replaceChild(link, card);
            link.appendChild(card);
        } else {
            console.warn(`Card com ID 'card-body${index}' não encontrado.`);
        }
    })


    

})