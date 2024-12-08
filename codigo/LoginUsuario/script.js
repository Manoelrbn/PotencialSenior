// URLs para redirecionamento
const LOGIN_SUCCESS_URL = 'pagina_inicial.html';
const REGISTER_SUCCESS_URL = '/pmg-es-2024-2-ti1-2401100-potencial-senior/codigo/Curriculo/curriculo.html';
const LOGIN_REDIRECT_URL = '/pmg-es-2024-2-ti1-2401100-potencial-senior/codigo/CanditadoVaga/cadastroDeVaga.html';

// Função para processar o login
function processLoginForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Recupera os dados do usuário do localStorage
  const usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));

  // Verifica se o login é válido comparando com os dados armazenados
  if (usuarioCadastrado && usuarioCadastrado.email === username && usuarioCadastrado.senha === password) {
    alert('Login bem-sucedido!');
    window.location.href = LOGIN_SUCCESS_URL; // Redireciona após login bem-sucedido
  } else {
    alert('Usuário ou senha incorretos');
  }  
}

// Função para processar o cadastro
function salvaCadastro(event) {
  event.preventDefault();
  const email = document.getElementById('txt_email').value;
  const senha = document.getElementById('txt_senha').value;
  const senha2 = document.getElementById('txt_senha2').value;

  // Verifica se as senhas coincidem
  if (senha !== senha2) {
    alert('As senhas não conferem!');
    return;
  }

  // Cria um objeto com os dados do usuário
  const usuario = {
    email: email,
    senha: senha
  };

  // Salva o objeto no localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  // Limpa os campos após o cadastro
  document.getElementById('register-form').reset();
  window.location.href = REGISTER_SUCCESS_URL;
}

// Substitui o onsubmit do formulário de login para usar a nova função
document.getElementById('login-form').onsubmit = processLoginForm;

// Substitui o onsubmit do formulário de cadastro para usar a nova função
document.getElementById('register-form').onsubmit = salvaCadastro;