// Inicialização
document.addEventListener("DOMContentLoaded", init);
let ordenacao = "preco"; // Define a ordenação inicial como "preco"

// Função para exibir o mostruário quando o botão for clicado
function mostrarMostruario() {
const mostruario = document.getElementById("mostruario");
if (mostruario.style.display === "none") {
mostruario.style.display = "grid";
} else {
mostruario.style.display = "none";
}
}

// Função para ordenar os itens por preço
function ordenarPorPreco() {
ordenacao = "preco"; // Atualiza a ordenação para "preco"
const categorias = document.getElementsByClassName("categoria");
for (let i = 0; i < categorias.length; i++) {
const categoria = categorias[i];
const itens = categoria.getElementsByClassName("item");

const sortedItens = Array.from(itens).sort((a, b) => {
    const precoA = parseFloat(a.innerText.split("Preço: R$ ")[1]);
    const precoB = parseFloat(b.innerText.split("Preço: R$ ")[1]);
    return precoA - precoB;
});

for (let j = 0; j < sortedItens.length; j++) {
    categoria.appendChild(sortedItens[j]);
}
}
}

// Função para ordenar os itens por ordem alfabética
function ordenarPorOrdemAlfabetica() {
ordenacao = "alfabetica"; // Atualiza a ordenação para "alfabetica"
const categorias = document.getElementsByClassName("categoria");
for (let i = 0; i < categorias.length; i++) {
const categoria = categorias[i];
const itens = categoria.getElementsByClassName("item");

const sortedItens = Array.from(itens).sort((a, b) => {
    const textoA = a.getElementsByTagName("strong")[0].innerText.toLowerCase();
    const textoB = b.getElementsByTagName("strong")[0].innerText.toLowerCase();
    return textoA.localeCompare(textoB);
});

for (let j = 0; j < sortedItens.length; j++) {
    categoria.appendChild(sortedItens[j]);
}
}
}

// Função para ordenar os itens com base na ordenação atual
function ordenarItens() {
if (ordenacao === "preco") {
ordenarPorPreco();
} else if (ordenacao === "alfabetica") {
ordenarPorOrdemAlfabetica();
}
}