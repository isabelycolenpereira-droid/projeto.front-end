let frases = ["F1", "F2", "F3"];
let frasesCopiada = [...frases];


function geradorMensagem(){
if(frases.length == 0){
frases = [...frasesCopiada];
}
let indiceGerado = Math.floor(Math.random()*(frases.length));
let fraseGerada = frases [indiceGerado];
console.log(fraseGerada);
document.querySelector("#msg").textContent = fraseGerada;
frases.splice(indiceGerado,1);

}
