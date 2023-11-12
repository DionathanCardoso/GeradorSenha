let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassWord = document.querySelector("#valor");
let passWord = document.querySelector("#password");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let novaSenha = "";

sizePassWord.innerHTML=sliderElement.value;
 slider.oninput = function(){
     sizePassWord.innerHTML = this.value;
 }