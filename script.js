const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area-message");
const textBeforeEncrypt = document.querySelector(".text-before-encrypt");



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    textBeforeEncrypt.style.display = "none";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    textBeforeEncrypt.style.display = "none";
}


function copy() {
    const elementToCopy = document.querySelector('.text-area-message');
    elementToCopy.select();
    elementToCopy.setSelectionRange(0, 99999);
    document.execCommand('copy');

}






function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase()


    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;

}


function desencriptar(stringEncriptada) {

    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase()


    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;

}