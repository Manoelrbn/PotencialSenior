// Função para processar o login
function processaFormLogin(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verifica se existe um cadastro armazenado no localStorage
    var cadastro = JSON.parse(localStorage.getItem('cadastro'));
    if (cadastro && cadastro.email === username && cadastro.senha === password) {
      alert('Login bem-sucedido!');
      window.location.href = '/pmg-es-2024-2-ti1-2401100-potencial-senior/codigo/GerenciaDeVagaeCanditados/gerenciaDeVagaeCanditados.html'; // Redireciona após login
    } else {
      alert('Usuário ou senha incorretos');
    }
  }
  
  // Função para processar o cadastro e armazenar os dados no localStorage
  function salvaCadastro(event) {
    event.preventDefault();
    var email = document.getElementById('txt_email').value;
    var senha = document.getElementById('txt_senha').value;
    var senha2 = document.getElementById('txt_senha2').value;
  
    // Verifica se as senhas coincidem
    if (senha !== senha2) {
      alert('As senhas não conferem!');
      return;
    }
  
    // Verifica se o e-mail já está cadastrado
    var cadastroExistente = JSON.parse(localStorage.getItem('cadastro'));
    if (cadastroExistente && cadastroExistente.email === email) {
      alert('Este e-mail já está cadastrado!');
      return;
    }
  
    // Armazena os dados no localStorage
    var cadastro = {
      email: email,
      senha: senha
    };
  
    // Salva o objeto de cadastro no localStorage
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
  
    // Limpa os campos após o cadastro
    document.getElementById('register-form').reset();
    
    // Alerta de cadastro realizado e redirecionamento
    alert('Cadastro realizado com sucesso!');
    window.location.href = '/pmg-es-2024-2-ti1-2401100-potencial-senior/codigo/ApresentacaoVaga/cadastro_vaga.html';
  }
  