const mymodal = new bootstrap.Modal ("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogged()

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function (e){
  e.preventDefault();
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;
  
  const conta = getacount(email);
if(!conta){
  alert("Opps! Verifique o usuário ou a senha.");
  return;
}
if(conta){
  if(conta.password !== password){;
  alert("Opps! Verifique o usuário ou a senha.")
  return;}
}

saveSession(email,checkSession);

  window.location.href = "home.html"

});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
  e.preventDefault();
const email = document.getElementById("email-create-input").value;
const password = document.getElementById("password-create-input").value;

if(email.length < 5){
  alert("Preencha o campo com um email válido.");
  return;
}

if(password.length < 4){
  alert("Preecha a senha com no mínimo 4 digitos.")
  return;
}

saveacount({
  login:email,
  password:password,
  transactions:[]
});

mymodal.hide();

alert("conta criada com sucesso!!");
});

function checklogged(){
if(session){
  sessionStorage.setItem("logged",session);
  logged = session;
}
if(logged){
  saveSession(logged, session);
  window.location.href = "home.html"
}
}
function saveacount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
  if(saveSession){
    localStorage.setItem("session",data);
  }
  sessionStorage.setItem("logged",data);
}

function getacount(key){
const conta = localStorage.getItem(key);

if(conta){
  return JSON.parse(conta); 
}
return"";
}

