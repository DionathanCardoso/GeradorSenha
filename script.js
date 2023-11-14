let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassWord = document.querySelector("#valor");
let passWord = document.querySelector("#password");
let containerPassword=document.querySelector("#container-password")


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let novaSenha = "";

sizePassWord.innerHTML=sliderElement.value;
 slider.oninput = function(){
     sizePassWord.innerHTML = this.value;
 }
  
function generatePassword(){
    let pass = "";
    for(let i=0, n=charset.length; i<sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random()*n))
}
    containerPassword.classList.remove("hide");
    passWord.innerHTML=pass;
    novaSenha=pass;
}
function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}