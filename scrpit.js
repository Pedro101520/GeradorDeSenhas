// Essa parte serve para modificar os dados ou interagir com o usuario
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

//Aqui é a parte de geração de carateres
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*çÇ";
let novaSenha = "";

//Aqui é para mudar o valor de acordo com a barra
sizePassword.innerHTML = sliderElement.value;

//Aqui é para atualizar o valor do Label de acordo com a barra
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//Aqui é para criar a senha
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    //Aqui é para exibir a senha
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

//Quando o usuario clicar no botão, a senha vai ser copiada
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}