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
    // Botão para adicionar nova formação
    document.querySelector('.button-formacao').addEventListener('click', function() {
        const novaFormacao = document.createElement('div');
        novaFormacao.classList.add('formacao-grupo');
        novaFormacao.innerHTML = `
            <div class="input-group">
                <label for="escolaridade-${Date.now()}">Nível de escolaridade*</label>
                <input type="text" id="escolaridade-${Date.now()}" name="escolaridade[]" required>
            </div>
            <div class="input-group">
                <label for="tipo-curso-${Date.now()}">Tipo do curso*</label>
                <input type="text" id="tipo-curso-${Date.now()}" name="tipo-curso[]" required>
            </div>
            <div class="input-group">
                <label for="nome-curso-${Date.now()}">Nome do curso*</label>
                <input type="text" id="nome-curso-${Date.now()}" name="nome-curso[]" required>
            </div>
            <div class="input-group">
                <label for="instituicao-${Date.now()}">Instituição*</label>
                <input type="text" id="instituicao-${Date.now()}" name="instituicao[]" required>
            </div>
            <div class="input-group">
                <label for="situacao-${Date.now()}">Situação atual*</label>
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
                <label for="ano-inicio-${Date.now()}">Ano de início</label>
                <input type="text" id="ano-inicio-${Date.now()}" name="ano-inicio[]">
            </div>
            <div class="input-group">
                <label for="ano-conclusao-${Date.now()}">Ano de conclusão</label>
                <input type="text" id="ano-conclusao-${Date.now()}" name="ano-conclusao[]">
            </div>
        `;
        
        document.getElementById('fomacao-academica-java').appendChild(novaFormacao);
    });

    // Botão para adicionar nova profissão
    document.querySelector('.button-profissao').addEventListener('click', function() {
        const novaProfissao = document.createElement('div');
        novaProfissao.classList.add('profissao-grupo');
        novaProfissao.innerHTML = `
            <div class="input-group">
                <label for="empresa-${Date.now()}">Empresa*</label>
                <input type="text" id="empresa-${Date.now()}" name="empresa[]" required>
            </div>
            <div class="input-group">
                <label for="cargo-${Date.now()}">Cargo*</label>
                <input type="text" id="cargo-${Date.now()}" name="cargo[]" required>
            </div>
            <div class="input-group">
                <label for="cidade-profissional-${Date.now()}">Cidade*</label>
                <input type="text" id="cidade-profissional-${Date.now()}" name="cidade-profissional[]" required>
            </div>
            <div class="input-group">
                <label for="ano-inicio-profissional-${Date.now()}">Ano de início</label>
                <input type="text" id="ano-inicio-profissional-${Date.now()}" name="ano-inicio-profissional[]">
            </div>
            <div class="input-group">
                <label for="ano-termino-profissional-${Date.now()}">Ano de término</label>
                <input type="text" id="ano-termino-profissional-${Date.now()}" name="ano-termino-profissional[]">
            </div>
            <div class="input-group">
                <label for="descricao-cargo-${Date.now()}">Descrição do cargo*</label>
                <textarea id="descricao-cargo-${Date.now()}" name="descricao-cargo[]" rows="4" required></textarea>
            </div>
        `;
        
        document.getElementById('historico-profissional-java').appendChild(novaProfissao);
    });
});
// Função para salvar os dados no localStorage
function salvarNoLocalStorage() {
    const formData = new FormData(document.getElementById('curriculoForm'));
    
    const dadosCurriculo = {
        nome: formData.get('nome'),
        idade: formData.get('idade'),
        nacionalidade: formData.get('nacionalidade'),
        endereco: formData.get('endereco'),
        numero: formData.get('numero'),
        complemento: formData.get('complemento'),
        cidade: formData.get('cidade'),
        estado: formData.get('estado'),
        telefone: formData.get('telefone'),
        celular: formData.get('celular'),
        resumo: formData.get('resumo'),
        formacaoAcademica: [],
        historicoProfissional: [],
        informacoesComplementares: formData.get('informacoes-complementares')
    };

    // Coletando as informações de formação acadêmica
    const formacoes = document.querySelectorAll('.formacao-grupo');
    formacoes.forEach(formacao => {
        const escolaridade = formacao.querySelector('[name="escolaridade[]"]').value;
        const tipoCurso = formacao.querySelector('[name="tipo-curso[]"]').value;
        const nomeCurso = formacao.querySelector('[name="nome-curso[]"]').value;
        const instituicao = formacao.querySelector('[name="instituicao[]"]').value;
        const situacao = formacao.querySelector('[name="situacao[]"]:checked')?.value;
        const anoInicio = formacao.querySelector('[name="ano-inicio[]"]').value;
        const anoConclusao = formacao.querySelector('[name="ano-conclusao[]"]').value;

        dadosCurriculo.formacaoAcademica.push({
            escolaridade, tipoCurso, nomeCurso, instituicao, situacao, anoInicio, anoConclusao
        });
    });

    // Coletando as informações de histórico profissional
    const experiencias = document.querySelectorAll('.profissao-grupo');
    experiencias.forEach(experiencia => {
        const empresa = experiencia.querySelector('[name="empresa[]"]').value;
        const cargo = experiencia.querySelector('[name="cargo[]"]').value;
        const cidadeProfissional = experiencia.querySelector('[name="cidade-profissional[]"]').value;
        const anoInicioProfissional = experiencia.querySelector('[name="ano-inicio-profissional[]"]').value;
        const anoTerminoProfissional = experiencia.querySelector('[name="ano-termino-profissional[]"]').value;
        const descricaoCargo = experiencia.querySelector('[name="descricao-cargo[]"]').value;

        dadosCurriculo.historicoProfissional.push({
            empresa, cargo, cidadeProfissional, anoInicioProfissional, anoTerminoProfissional, descricaoCargo
        });
    });

    // Armazenando no localStorage
    localStorage.setItem('curriculo', JSON.stringify(dadosCurriculo));

    alert('Currículo salvo com sucesso!');
}

// Função para carregar os dados do localStorage, se existirem
function carregarDoLocalStorage() {
    const curriculoSalvo = JSON.parse(localStorage.getItem('curriculo'));

    if (curriculoSalvo) {
        document.getElementById('nome').value = curriculoSalvo.nome;
        document.getElementById('idade').value = curriculoSalvo.idade;
        document.getElementById('nacionalidade').value = curriculoSalvo.nacionalidade;
        document.getElementById('endereco').value = curriculoSalvo.endereco;
        document.getElementById('numero').value = curriculoSalvo.numero;
        document.getElementById('complemento').value = curriculoSalvo.complemento;
        document.getElementById('cidade').value = curriculoSalvo.cidade;
        document.getElementById('estado').value = curriculoSalvo.estado;
        document.getElementById('telefone').value = curriculoSalvo.telefone;
        document.getElementById('celular').value = curriculoSalvo.celular;
        document.getElementById('resumo').value = curriculoSalvo.resumo;
        document.getElementById('informacoes-complementares').value = curriculoSalvo.informacoesComplementares;

        // Carregar formações acadêmicas
        curriculoSalvo.formacaoAcademica.forEach((formacao, index) => {
            if (index > 0) {
                document.querySelector('.button-formacao').click(); // Adicionar nova formação
            }
            const formacaoElemento = document.querySelectorAll('.formacao-grupo')[index];
            formacaoElemento.querySelector('[name="escolaridade[]"]').value = formacao.escolaridade;
            formacaoElemento.querySelector('[name="tipo-curso[]"]').value = formacao.tipoCurso;
            formacaoElemento.querySelector('[name="nome-curso[]"]').value = formacao.nomeCurso;
            formacaoElemento.querySelector('[name="instituicao[]"]').value = formacao.instituicao;
            formacaoElemento.querySelector(`[name="situacao[]"][value="${formacao.situacao}"]`).checked = true;
            formacaoElemento.querySelector('[name="ano-inicio[]"]').value = formacao.anoInicio;
            formacaoElemento.querySelector('[name="ano-conclusao[]"]').value = formacao.anoConclusao;
        });

        // Carregar histórico profissional
        curriculoSalvo.historicoProfissional.forEach((experiencia, index) => {
            if (index > 0) {
                document.querySelector('.button-profissao').click(); // Adicionar nova profissão
            }
            const experienciaElemento = document.querySelectorAll('.profissao-grupo')[index];
            experienciaElemento.querySelector('[name="empresa[]"]').value = experiencia.empresa;
            experienciaElemento.querySelector('[name="cargo[]"]').value = experiencia.cargo;
            experienciaElemento.querySelector('[name="cidade-profissional[]"]').value = experiencia.cidadeProfissional;
            experienciaElemento.querySelector('[name="ano-inicio-profissional[]"]').value = experiencia.anoInicioProfissional;
            experienciaElemento.querySelector('[name="ano-termino-profissional[]"]').value = experiencia.anoTerminoProfissional;
            experienciaElemento.querySelector('[name="descricao-cargo[]"]').value = experiencia.descricaoCargo;
        });
    }
}

// Evento para salvar os dados quando o formulário for submetido
document.getElementById('curriculoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    salvarNoLocalStorage(); // Salva os dados no localStorage
});

// Carregar dados do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDoLocalStorage);
