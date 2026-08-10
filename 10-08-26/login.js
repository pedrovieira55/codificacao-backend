document.getElementById('loginForm').addEventListener('submit', function(e) {
 
    const usuarioValido = "admin";
    const senhaValida = "123456";

 
    const unameInput = document.getElementById('uname').value;
    const pswInput = document.getElementById('psw').value;

   
    if (unameInput !== usuarioValido || pswInput !== senhaValida) {
        e.preventDefault(); 
        alert("Usuário ou senha incorretos!");
    } else {
        alert("Login realizado com sucesso!");
      
    }
});