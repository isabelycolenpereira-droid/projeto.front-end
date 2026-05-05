let frases=["Os ecos do céu são as respostas que buscamos, sussurrando esperança em cada batida do nosso coração.", "Quando ouvimos os ecos do céu, encontramos a paz que buscamos na Terra.","Que o eco do céu nos conduza, nos fortaleça e nos inspire a viver com propósito e gratidão"];
    
    function geradorMensagem(){
    let indiceGerado= Math.floor(Math.random()*(frases.length));
    let fraseGerada= frases[indiceGerado];
    document.querySelector("#saída").textContent=fraseGerada

    }