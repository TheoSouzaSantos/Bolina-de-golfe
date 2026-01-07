const palavras = ["ator", "atriz", "cinema", "tom cruise", "minissérie"];
let palavra = "";
let letrasAcertadas = [];
let letrasErradas = [];
let tentativas = 6;

function escolherPalavra() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
}

function mostrarPalavra() {
    const palavraDisplay = palavra.split("").map(letra => (letrasAcertadas.includes(letra) ? letra : "_")).join(" ");
    document.getElementById("palavra").innerText = palavraDisplay;
}

function atualizarForca() {
    document.getElementById("forca").innerText = `Tentativas restantes: ${tentativas}`;
}

function checarVitoria() {
    if (palavra.split("").every(letra => letrasAcertadas.includes(letra))) {
        document.getElementById("resultado").innerText = "Você venceu!";
        document.getElementById("resultado").className = "win";
        document.getElementById("chutar").disabled = true;
    }
}

function checarDerrota() {
    if (tentativas <= 0) {
        document.getElementById("resultado").innerText = `Você perdeu! A palavra era: ${palavra}`;
        document.getElementById("resultado").className = "loss";
        document.getElementById("chutar").disabled = true;
    }
}

document.getElementById("chutar").addEventListener("click", () => {
    const letraInput = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";

    if (!letraInput || letrasAcertadas.includes(letraInput) || letrasErradas.includes(letraInput)) {
        return;
    }

    if (palavra.includes(letraInput)) {
        letrasAcertadas.push(letraInput);
    } else {
        letrasErradas.push(letraInput);
        tentativas--;
    }

    mostrarPalavra();
    atualizarForca();
    checarVitoria();
    checarDerrota();
});

escolherPalavra();
mostrarPalavra();
atualizarForca();
