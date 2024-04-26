// recuperando os valores
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");

let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");

// evento de enviar o email
form.addEventListener('submit', (e) => {
  if(email.value == '' && password.value == '') {
    textForm.textContent = 'Preencha os campos, por favor'
  } else if(
    validatorEmail(email.value) === true &&
    validatorPassword(password.value) === true
  ) {
    console.log("Email: " + email.value)
    console.log("Senha: " + password.value)

    textForm.textContent = ''
    textEmail.textContent = ''
    textPassword.textContent = ''
  } else {
    console.log("requisão não atendida")
  }
  e.preventDefault()
  setTimeout(() => {
    email.value = ''
    password.value = ''
  }, 1000)
})

// pega o valor do email e faz a validação
email.addEventListener('keyup', () => {
  if(validatorEmail(email.value) !== true) {
    textEmail.textContent = "Exemplo: nome@abc.com"
  } else {
    textEmail.textContent = ""
  }
})

password.addEventListener('keyup', () => {
  if(validatorPassword(password.value) !== true) {
    textPassword.textContent = `
    Mínimo de 6 caracteres.ㅤㅤㅤㅤㅤㅤ
    Pelo menos 1 número.ㅤㅤㅤㅤㅤㅤㅤ
    Pelo menos 1 caractere especialㅤㅤㅤ
    ㅤ(!, @, #, etc.).`
  } else {
    textPassword.textContent = ""
  }
})

// função de validar o email
function validatorEmail(email) {
  let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email)
}

function validatorPassword(password) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password)
}

// /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
