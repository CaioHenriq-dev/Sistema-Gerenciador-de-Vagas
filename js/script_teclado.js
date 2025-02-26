function digitar(caractere) {
    let input = document.getElementById("inputCodigo");
    if (input.value.length < 6) {  // Limita a 6 caracteres
        input.value += caractere;
    }
}

function apagar() {
    let input = document.getElementById("inputCodigo");
    input.value = input.value.slice(0, -1);
}

function confirmar() {
    let input = document.getElementById("inputCodigo").value;
    if (input.length < 6) {
        alert("Código inválido! O código deve ter 6 caracteres.");
    } else {
        alert("Código confirmado: " + input);
        document.getElementById("inputCodigo").value = ""; // Limpa o campo
    }
}