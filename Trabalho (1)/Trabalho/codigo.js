
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


// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão para adicionar nova formação
    document.querySelector('.button-formacao').addEventListener('click', function() {
        // Cria a nova formação
        const novaFormacao = document.createElement('div');
        novaFormacao.classList.add('formacao-grupo');
        novaFormacao.innerHTML = `
            <div class="input-group">
                <label for="escolaridade">Nível de escolaridade*</label>
                <input type="text" id="escolaridade-${Date.now()}" name="escolaridade[]" required>
            </div>
            <div class="input-group">
                <label for="tipo-curso">Tipo do curso*</label>
                <input type="text" id="tipo-curso-${Date.now()}" name="tipo-curso[]" required>
            </div>
            <div class="input-group">
                <label for="nome-curso">Nome do curso*</label>
                <input type="text" id="nome-curso-${Date.now()}" name="nome-curso[]" required>
            </div>
            <div class="input-group">
                <label for="instituicao">Instituição*</label>
                <input type="text" id="instituicao-${Date.now()}" name="instituicao[]" required>
            </div>
            <div class="input-group">
                <label for="situacao">Situação atual*</label>
                <div class="radio-group">
                    <input type="radio" id="interrompido-${Date.now()}" name="situacao[]" value="interrompido">
                    <label for="interrompido-${Date.now()}">Interrompido</label>
                    <input type="radio" id="cursando-${Date.now()}" name="situacao[]" value="cursando">
                    <label for="cursando-${Date.now()}">Cursando</label>
                    <input type="radio" id="concluido-${Date.now()}" name="situacao[]" value="concluido">
                    <label for="concluido-${Date.now()}">Concluído</label>
                </div>
            </div>
            <div class="input-group">
                <label for="ano-inicio">Ano de início</label>
                <input type="text" id="ano-inicio-${Date.now()}" name="ano-inicio[]">
            </div>
            <div class="input-group">
                <label for="ano-conclusao">Ano de conclusão</label>
                <input type="text" id="ano-conclusao-${Date.now()}" name="ano-conclusao[]">
            </div>
        `;
        
        // Adiciona a nova formação dentro da div com id="fomacao-academica"
        document.getElementById('fomacao-academica-java').appendChild(novaFormacao);
    });
});




document.querySelector('.button-profissao').addEventListener('click', function() {
    const novaProfissao = document.createElement('div');
    novaProfissao.classList.add('formacao-grupo');
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

    document.getElementById('historico-profissional-java').appendChild(novaProfissao);
});


document.getElementById('foto-perfil').addEventListener('change', previewFoto);
