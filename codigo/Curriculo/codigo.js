
function previewFoto(event) {
    const fotoPreview = document.getElementById('foto-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            fotoPreview.src = e.target.result;
        }

        reader.readAsDataURL(file); 
    }
}


document.querySelector('.button-formacao').addEventListener('click', function() {
    const novaFormacao = document.createElement('div');
    novaFormacao.classList.add('fomacao-academica');
    novaFormacao.innerHTML = `
        <div class="input-group">
            <label for="escolaridade">Nível de escolaridade*</label>
            <input type="text" id="escolaridade" name="escolaridade[]" required>
        </div>
        <div class="input-group">
            <label for="tipo-curso">Tipo do curso*</label>
            <input type="text" id="tipo-curso" name="tipo-curso[]" required>
        </div>
        <div class="input-group">
            <label for="nome-curso">Nome do curso*</label>
            <input type="text" id="nome-curso" name="nome-curso[]" required>
        </div>
        <div class="input-group">
            <label for="instituicao">Instituição*</label>
            <input type="text" id="instituicao" name="instituicao[]" required>
        </div>
        <div class="input-group">
            <label for="situacao">Situação atual*</label>
            <div class="radio-group">
                <input type="radio" id="interrompido" name="situacao[]" value="interrompido">
                <label for="interrompido">Interrompido</label>
                <input type="radio" id="cursando" name="situacao[]" value="cursando">
                <label for="cursando">Cursando</label>
                <input type="radio" id="concluido" name="situacao[]" value="concluido">
                <label for="concluido">Concluído</label>
            </div>
        </div>
        <div class="input-group">
            <label for="ano-inicio">Ano de início</label>
            <input type="text" id="ano-inicio" name="ano-inicio[]">
        </div>
        <div class="input-group">
            <label for="ano-conclusao">Ano de conclusão</label>
            <input type="text" id="ano-conclusao" name="ano-conclusao[]">
        </div>
    `;
    
    document.getElementById('fomacao-academica').appendChild(novaFormacao);
});


document.querySelector('.button-profissao').addEventListener('click', function() {
    const novaProfissao = document.createElement('div');
    novaProfissao.classList.add('historico-profissional');
    novaProfissao.innerHTML = `
        <div class="input-group">
            <label for="empresa">Empresa*</label>
            <input type="text" id="empresa" name="empresa[]" required>
        </div>
        <div class="input-group">
            <label for="cargo">Cargo*</label>
            <input type="text" id="cargo" name="cargo[]" required>
        </div>
        <div class="input-group">
            <label for="cidade-profissional">Cidade*</label>
            <input type="text" id="cidade-profissional" name="cidade-profissional[]" required>
        </div>
        <div class="input-group">
            <label for="ano-inicio-profissional">Ano de início</label>
            <input type="text" id="ano-inicio-profissional" name="ano-inicio-profissional[]">
        </div>
        <div class="input-group">
            <label for="ano-termino-profissional">Ano de término</label>
            <input type="text" id="ano-termino-profissional" name="ano-termino-profissional[]">
        </div>
        <div class="input-group">
            <label for="descricao-cargo">Descrição do cargo*</label>
            <textarea id="descricao-cargo" name="descricao-cargo[]" rows="4" required></textarea>
        </div>
    `;

    document.getElementById('historico-profissional').appendChild(novaProfissao);
});


document.getElementById('foto-perfil').addEventListener('change', previewFoto);


const botaoAdicionarFormacao = document.querySelector('.button-formacao');
const botaoAdicionarProfissao = document.querySelector('.button-profissao');

// Função para adicionar uma nova formação
botaoAdicionarFormacao.addEventListener('click', function() {
    // Cria um novo div para a formação acadêmica
    const novaFormacao = document.createElement('div');
    novaFormacao.classList.add('fomacao-academica');
    
    // Cria os campos de entrada para a nova formação
    novaFormacao.innerHTML = `
        <div class="input-group">
            <label for="escolaridade">Nível de escolaridade*</label>
            <input type="text" id="escolaridade" name="escolaridade[]" required>
        </div>
        <div class="input-group">
            <label for="tipo-curso">Tipo do curso*</label>
            <input type="text" id="tipo-curso" name="tipo-curso[]" required>
        </div>
        <div class="input-group">
            <label for="nome-curso">Nome do curso*</label>
            <input type="text" id="nome-curso" name="nome-curso[]" required>
        </div>
        <div class="input-group">
            <label for="instituicao">Instituição*</label>
            <input type="text" id="instituicao" name="instituicao[]" required>
        </div>
        <div class="input-group">
            <label for="situacao">Situação atual*</label>
            <div class="radio-group">
                <input type="radio" id="interrompido" name="situacao[]" value="interrompido">
                <label for="interrompido">Interrompido</label>
                <input type="radio" id="cursando" name="situacao[]" value="cursando">
                <label for="cursando">Cursando</label>
                <input type="radio" id="concluido" name="situacao[]" value="concluido">
                <label for="concluido">Concluído</label>
            </div>
        </div>
        <div class="input-group">
            <label for="ano-inicio">Ano de início</label>
            <input type="text" id="ano-inicio" name="ano-inicio[]">
        </div>
        <div class="input-group">
            <label for="ano-conclusao">Ano de conclusão</label>
            <input type="text" id="ano-conclusao" name="ano-conclusao[]">
        </div>
    `;
    
    // Adiciona a nova formação ao contêiner de formações acadêmicas
    document.getElementById('fomacao-academica').appendChild(novaFormacao);
});

// Função para adicionar uma nova profissão
botaoAdicionarProfissao.addEventListener('click', function() {
    // Cria um novo div para o histórico profissional
    const novaProfissao = document.createElement('div');
    novaProfissao.classList.add('historico-profissional');
    
    // Cria os campos de entrada para a nova profissão
    novaProfissao.innerHTML = `
        <div class="input-group">
            <label for="empresa">Empresa*</label>
            <input type="text" id="empresa" name="empresa[]" required>
        </div>
        <div class="input-group">
            <label for="cargo">Cargo*</label>
            <input type="text" id="cargo" name="cargo[]" required>
        </div>
        <div class="input-group">
            <label for="cidade-profissional">Cidade*</label>
            <input type="text" id="cidade-profissional" name="cidade-profissional[]" required>
        </div>
        <div class="input-group">
            <label for="ano-inicio-profissional">Ano de início</label>
            <input type="text" id="ano-inicio-profissional" name="ano-inicio-profissional[]">
        </div>
        <div class="input-group">
            <label for="ano-termino-profissional">Ano de término</label>
            <input type="text" id="ano-termino-profissional" name="ano-termino-profissional[]">
        </div>
        <div class="input-group">
            <label for="descricao-cargo">Descrição do cargo*</label>
            <textarea id="descricao-cargo" name="descricao-cargo[]" rows="4" required></textarea>
        </div>
    `;
    
    // Adiciona a nova profissão ao contêiner de histórico profissional
    document.getElementById('historico-profissional').appendChild(novaProfissao);
});