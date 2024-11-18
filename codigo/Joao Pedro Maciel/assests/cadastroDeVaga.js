const vagasTI = [
    {
      cargo: "Desenvolvedor Front-End Pleno",
      descricao: "React, JavaScript, CSS, HTML, API",
      local: "Remoto",
      salario: "A combinar",
      categoria: "Pleno"
    },
    {
      cargo: "Engenheiro de Software Sênior",
      descricao: "Java, Spring, Microservices, REST, Git",
      local: "Belo Horizonte",
      salario: "R$ 12.000,00",
      categoria: "Senior"
    },
    {
      cargo: "Analista de Dados Júnior",
      descricao: "SQL, Python, Power BI, ETL, Excel",
      local: "Remoto",
      salario: "R$ 4.500,00",
      categoria: "Junior"
    },
    {
      cargo: "Desenvolvedor Back-End Pleno",
      descricao: "Node.js, Express, MongoDB, API, Docker",
      local: "Belo Horizonte",
      salario: "R$ 6.000,00",
      categoria: "Pleno"
    },
    {
      cargo: "Administrador de Sistemas",
      descricao: "Linux, Shell Script, AWS, DevOps, CI/CD",
      local: "Remoto",
      salario: "A combinar",
      categoria: "Estagio"
    },
    {
      cargo: "Desenvolvedor Mobile Android",
      descricao: "Kotlin, Android Studio, APIs, Git, UI",
      local: "Belo Horizonte",
      salario: "R$ 7.000,00",
      categoria: "Pleno"
    },
    {
      cargo: "Especialista em Segurança",
      descricao: "Cybersecurity, Firewalls, SIEM, Linux, Cloud",
      local: "Remoto",
      salario: "R$ 10.000,00",
      categoria: "Senior"
    },
    {
      cargo: "Cientista de Dados",
      descricao: "Python, Machine Learning, SQL, Pandas, TensorFlow",
      local: "Belo Horizonte",
      salario: "R$ 11.000,00",
      categoria:"Senior"
    },
    {
      cargo: "DevOps Engineer Pleno",
      descricao: "Docker, Kubernetes, Jenkins, AWS, Terraform",
      local: "Remoto",
      salario: "R$ 9.000,00",
      categoria: "Pleno"
    },
    {
      cargo: "Desenvolvedor Full Stack",
      descricao: "JavaScript, Node.js, React, SQL, API",
      local: "Belo Horizonte",
      salario: "A combinar",
      categoria: "Estagio"
    },
    {
      cargo: "Desenvolvedor Front-End",
      descricao: "HTML, CSS, JavaScript, React, UI/UX",
      local: "São Paulo",
      salario: "R$ 3.000 - R$ 4.000",
      categoria: "Pleno"
    },
    {
      cargo: "Desenvolvedor Back-End",
      descricao: "Node.js, Express, MongoDB, API REST",
      local: "Rio de Janeiro",
      salario: "A combinar",
      categoria: "Júnior"
    },
    {
      cargo: "Engenheiro de Software",
      descricao: "Java, Spring Boot, Microservices, Docker",
      local: "Belo Horizonte",
      salario: "R$ 6.000 - R$ 8.000",
      categoria: "Sênior"
    },
    {
      cargo: "Analista de Dados",
      descricao: "Python, SQL, Power BI, ETL, Data Warehousing",
      local: "Curitiba",
      salario: "R$ 4.500",
      categoria: "Pleno"
    },
    {
      cargo: "Cientista de Dados",
      descricao: "Python, Machine Learning, Pandas, TensorFlow",
      local: "Florianópolis",
      salario: "R$ 8.000 - R$ 10.000",
      categoria: "Sênior"
    },
    {
      cargo: "DevOps Engineer",
      descricao: "AWS, Kubernetes, CI/CD, Terraform",
      local: "Porto Alegre",
      salario: "A combinar",
      categoria: "Pleno"
    },
    {
      cargo: "Desenvolvedor Mobile",
      descricao: "Flutter, Dart, Android, iOS, Firebase",
      local: "Salvador",
      salario: "R$ 5.000 - R$ 6.500",
      categoria: "Júnior"
    },
    {
      cargo: "Desenvolvedor Full Stack",
      descricao: "PHP, Laravel, Vue.js, MySQL",
      local: "Fortaleza",
      salario: "R$ 4.000 - R$ 5.500",
      categoria: "Pleno"
    },
    {
      cargo: "Product Manager",
      descricao: "Scrum, Kanban, Agile, Gestão de Produtos",
      local: "Brasília",
      salario: "R$ 9.000",
      categoria: "Sênior"
    },
    {
      cargo: "Engenheiro de Segurança da Informação",
      descricao: "Cybersecurity, Firewalls, PenTesting, SIEM",
      local: "Campinas",
      salario: "A combinar",
      categoria: "Sênior"
    },
    {
      cargo: "Desenvolvedor Full Stack",
      descricao: "JavaScript, Node.js, React, SQL, API",
      local: "Belo Horizonte",
      salario: "A combinar",
      categoria: "Estágio"
    }
  ];
 
  
  
  function imprimirVaga(titulo, descricao, localizacao, salario) {
    const container = document.querySelector("#vagasContainer");

    const card = document.createElement("div");
    card.classList.add("card");
    
    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    
    const p = document.createElement("p");
    p.textContent = descricao;
   
    const iconeMapa = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconeMapa.setAttribute("width", "16");
    iconeMapa.setAttribute("height", "16");
    iconeMapa.setAttribute("fill", "currentColor");
    iconeMapa.classList.add("iconeMapaVaga");
    iconeMapa.classList.add("bi", "bi-geo-alt-fill");
    iconeMapa.innerHTML = `<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`;
  
    const spanLocalizacao = document.createElement("span");
    spanLocalizacao.style.paddingBottom = "20px";
    spanLocalizacao.textContent = ` ${localizacao}`;
  
   
    const iconeSalario = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconeSalario.setAttribute("width", "16");
    iconeSalario.setAttribute("height", "16");
    iconeSalario.setAttribute("fill", "currentColor");
    iconeSalario.classList.add("bi", "bi-currency-dollar");
    iconeSalario.innerHTML = `<path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>`;
  
    const spanSalario = document.createElement("span");
    spanSalario.textContent = ` ${salario}`;
  
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(iconeMapa);
    card.appendChild(spanLocalizacao);
    card.appendChild(document.createElement("br"));
    card.appendChild(iconeSalario);
    card.appendChild(spanSalario);
  
    container.appendChild(card);
  }


function buscarVaga() {
  let cargo = document.querySelector("#cargo").value.trim().toLowerCase();
  let local = document.querySelector("#local").value.trim().toLowerCase();
  let categoria = document.querySelector("#categoria").value.toLowerCase();
  for (let i = 0; i < vagasTI.length; i++){
    
    
    if (
        (vagasTI[i].cargo.toLowerCase() === cargo.toLowerCase()) ||
        (vagasTI[i].local.toLowerCase() === local.toLowerCase()) &&
        (vagasTI[i].descricao.toLowerCase() === categoria.toLowerCase())
    ) {

        imprimirVaga( vagasTI[i].cargo,  vagasTI[i].descricao,  vagasTI[i].local,  vagasTI[i].salario);
    }
  }
}


const modal = document.getElementById("notificationModal");
const abrirMOdal = document.getElementById("openModal");
const fecharModal = document.querySelector(".close");

abrirMOdal.onclick = function () {
    modal.style.display = "block";
}


fecharModal.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
