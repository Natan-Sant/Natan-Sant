//exercícios

//exercício1
function formatarNome(nomeCompleto) {
    
    const nomeMaiusculo = nomeCompleto.toUpperCase();
    
    const nomeMinusculo = nomeCompleto.toLowerCase();
    
    console.log("Nome em maiúsculas: " + nomeMaiusculo);
    console.log("Nome em minúsculas: " + nomeMinusculo);
}


const nome = "Natan Santanna";
formatarNome(nome);

//exercício2

function verificarLetraA(frase) {
    
    if (frase.includes("a")) {
        
        const posicao = frase.indexOf("a");
        console.log(`A frase contém a letra "a". A primeira ocorrência está na posção: ${posicao}`);
    } else {
        console.log('A frase não contém a letra "a".');
    }
}

const frase1 = "O cachorro está no parque";
const frase2 = "O gato está dormindo";

verificarLetraA(frase1);
verificarLetraA(frase2); 