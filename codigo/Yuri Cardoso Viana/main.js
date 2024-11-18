function editarCurriculo() {
    const info = document.querySelector('.info');
    const editButton = document.querySelector('.dados-pessoais button');

    if (editButton.textContent === 'Editar currículo') {
        
        info.innerHTML = `
            <label>E-mail: <input type="email" id="emailInput" value="luciaandrade@gmail.com"></label><br>
            <label>Idade: <input type="number" id="idadeInput" value="53"></label><br>
            <button onclick="salvarEdicoes()">Salvar</button>
            <button onclick="cancelarEdicoes()">Cancelar</button>
        `;
        editButton.textContent = 'Cancelar edição';
    } else {
        cancelarEdicoes();
    }
}

function salvarEdicoes() {
    const email = document.getElementById('emailInput').value;
    const idade = document.getElementById('idadeInput').value;

    const info = document.querySelector('.info');
    info.innerHTML = `
        <h3>Lúcia de Andrade</h3>
        <p>E-mail: ${email}</p>
        <p>Idade: ${idade} anos</p>
    `;

       document.querySelector('.dados-pessoais button').textContent = 'Editar currículo';
}

function cancelarEdicoes() {
    const info = document.querySelector('.info');
    info.innerHTML = `
        <h3>Lúcia de Andrade</h3>
        <p id="email">E-mail: luciaandrade@gmail.com</p>
        <p id="idade">Idade: 53 anos</p>
    `;
    document.querySelector('.dados-pessoais button').textContent = 'Editar currículo';
}

function atualizarProgresso(id, valor) {
    const progress = document.querySelector(`#${id} progress`);
    progress.value = valor;
}

function abrirFormularioContato() {
    const contatoSection = document.createElement('section');
    contatoSection.classList.add('form-contato');
    contatoSection.innerHTML = `
        <h3>Contato</h3>
        <form onsubmit="enviarFormulario(event)">
            <label>Nome: <input type="text" required></label><br>
            <label>Email: <input type="email" required></label><br>
            <label>Mensagem: <textarea required></textarea></label><br>
            <button type="submit">Enviar</button>
        </form>
        <button onclick="fecharFormularioContato()">Fechar</button>
    `;
    document.body.appendChild(contatoSection);
}

function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    fecharFormularioContato();
}

function fecharFormularioContato() {
    const formSection = document.querySelector('.form-contato');
    if (formSection) {
        formSection.remove();
    }
}

rySelector('.dados-pessoais button').addEventListener('click', editarCurriculo);
document.querySelector('footer button').addEventListener('click', abrirFormularioContato);

atualizarProgresso('candidatura1', 50);  tura
atualizarProgresso('candidatura2', 25);