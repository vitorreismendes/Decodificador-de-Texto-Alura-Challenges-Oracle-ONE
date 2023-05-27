
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


//Ligando ao local onde se encontra o texto
const digiteTexto = document.querySelector('.digite-texto');
const resultadoTexto = document.querySelector('.resultado-texto');

// Botão de Encriptação
function btEncriptar() {
    const textoEncriptado = encriptar(digiteTexto.value);
    resultadoTexto.value = textoEncriptado;
    digiteTexto.value = "";
}

// Função do botão de Encriptação
function encriptar(stringEncriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];

    var stringEncriptada =  stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

// Botão de Desencriptação
function btDesencriptar() {
    const textoDesencriptado = desencriptar(digiteTexto.value);
    resultadoTexto.value = textoDesencriptado;
    digiteTexto.value = "";
}

// Função do botão de Desencriptação
function desencriptar(stringDesencriptar) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar
}

// Função do botão de Copiar
document.getElementById('btcopiar').addEventListener('click', btcopiar);

function btcopiar() {
    document.querySelector('.resultado-texto').select();
    document.execCommand('copy');
}
