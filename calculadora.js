    // Dados de materiais, acabamentos, cubas e cooktops
    const materiais = {
    "Ardósia": 230,
    "Arabesco Samoa": 290,
    "Bege Prime": 980,
    "Branco Dallas": 345,
    "Branco Paraná Claro": 1800,
    "Branco Paraná Escuro": 1400,
    "Branco Prime": 1000,
    "Branco Siena": 540,
    "Cinza Castelo": 300,
    "Cinza Corumbá": 300,
    "Crema Marfil": 1400,
    "Itaúnas": 550,
    "Marrom Café": 620,
    "Marrom Café Comercial": 425,
    "Marrom Coral": 450,
    "Ocre Itatibira": 300,
    "Piracema": 580,
    "Preto Absoluto": 1575,
    "Preto Escovado": 650,
    "Preto São Gabriel": 480,
    "Quartzo Branco": 1650,
    "Santa Cecília": 345,
    "Travertino": 400,
    "Verde": 350,
    "Via Láctea": 650
    };

    const acabamentos = {
    "Boleado": 70,
    "Reto": 50,
    "Meia esquadria": 80
    };

    const cubas = {
    "Sem Cuba": 0,
    "Cuba N¹46x30/14": 180,
    "Cuba N¹46x30/17": 200,
    "Cuba N²56x32/14": 200,
    "Cuba N²56x32/17": 250,
    "Cuba Oval Pequena": 150,
    "Cuba Oval Grande": 170
    };

    const cooktop = {
    "Sem Corte": 0,
    "Com Corte Cooktop": 60
    };
    // Função para calcular o valor total
    function calcularValorTotal() {
    // Obtenção dos valores selecionados
    const material = document.getElementById("material").value;
    const precoMaterial = materiais[material];
    const precoCubas = cubas[document.getElementById("cubas").value];
    const cooktop_ = cooktop[document.getElementById("cooktop").value];
    const acabamento = document.getElementById("acabamento").value;
    const precoAcabamento = acabamentos[acabamento];
    const comprimentoPia = parseFloat(document.getElementById("comprimento-pia").value);
    const larguraPia = parseFloat(document.getElementById("largura-pia").value);
    const larguraSaia = parseFloat(document.getElementById("largura-saia").value);
    const larguraEspelho = parseFloat(document.getElementById("largura-espelho").value);
    const ladosMaiores = parseInt(document.getElementById("lados-maiores-saia").value);
    const ladosMenores = parseInt(document.getElementById("lados-menores-saia").value);
    const ladosMaioresEspelho = parseInt(document.getElementById("lados-maiores-espelho").value);
    const ladosMenoresEspelho = parseInt(document.getElementById("lados-menores-espelho").value);


    // Cálculos
    let areaPia = larguraPia * comprimentoPia;
    let precoPia = areaPia * precoMaterial;

    let ladosSaia = (ladosMenores * larguraPia) + (ladosMaiores * comprimentoPia);
    let areaSaia = ladosSaia * larguraSaia;
    let precoSaia = areaSaia * precoMaterial;

    let ladosEspelho = (ladosMenoresEspelho * larguraPia) + (ladosMaioresEspelho * comprimentoPia);
    let areaEspelho = ladosEspelho * larguraEspelho;
    let precoEspelho = areaEspelho * precoMaterial;

    let comprimentoSaia = ladosSaia;
    let precoAcabamentoTotal = comprimentoSaia * precoAcabamento;

    let valorTotal = precoPia + precoSaia + precoEspelho + precoAcabamentoTotal + precoCubas + cooktop_;
    document.getElementById("resultado").innerHTML = `
        O valor total da pia é <strong>R$${valorTotal.toFixed(2)}</strong>;<br>
        Preço da área da pia: R$${precoPia.toFixed(2)};<br>
        Preço da saia: R$${precoSaia.toFixed(2)};<br>
        Preço do espelho: R$${precoEspelho.toFixed(2)};<br>
        Preço do acabamento: R$${precoAcabamentoTotal.toFixed(2)};<br>
        Preço da cuba: R$${precoCubas.toFixed(2)};<br>
        Corte Cooktop: R$${cooktop_.toFixed(2)}.<br>
        Obs: <br>
        Material utilizado: ${material};<br>
        Preço do Material: R$${precoMaterial.toFixed(2)}.
        `;
    }
    //saber oq esá sendo selecionado
const checkboxLado = document.querySelectorAll('.checkbox-lado');
const checkboxLadoEspelho = document.querySelectorAll('.checkbox-lado-espelho');
const opcoesSelecionadas = document.getElementById('opcoes-selecionadas');

function exibirOpcoesSelecionadas() {
let opcoes = "Opções selecionadas: ";
let algumaOpcaoSelecionada = false;

checkboxLado.forEach(checkbox => {
    if (checkbox.checked) {
    algumaOpcaoSelecionada = true;
    opcoes += "saia " + checkbox.getAttribute('data-lado') + ", ";
    }
});

checkboxLadoEspelho.forEach(checkbox => {
    if (checkbox.checked) {
    algumaOpcaoSelecionada = true;
    opcoes += "espelho " + checkbox.getAttribute('data-lado') + ", ";
    }
});

if (algumaOpcaoSelecionada) {
    opcoesSelecionadas.textContent = opcoes.slice(0, -2);
} else {
    opcoesSelecionadas.textContent = "";
}
}

checkboxLado.forEach(checkbox => {
checkbox.addEventListener('change', exibirOpcoesSelecionadas);
});

checkboxLadoEspelho.forEach(checkbox => {
checkbox.addEventListener('change', exibirOpcoesSelecionadas);
});

// Função para atualizar o acabamento selecionado
function atualizarAcabamento() {
let ladosMenores = 0;
let ladosMaiores = 0;

const checkboxes = document.querySelectorAll('.checkbox-lado');
const retangulo = document.querySelector('.retangulo');

for (let checkbox of checkboxes) {
    const lado = checkbox.getAttribute('data-lado');
    const ladoElemento = retangulo.querySelector(`.lado.${lado}`);
    
const cubaElement = retangulo.querySelector('.cuba');
const selectedCuba = document.getElementById("cubas").value;

if (selectedCuba !== "Sem Cuba") {
    cubaElement.style.display = 'block';
} else {
    cubaElement.style.display = 'none';
}
    
    // Check if the corresponding side is selected in the espelho section
    const espelhoCheckbox = document.querySelector(`.checkbox-lado-espelho[data-lado="${lado}"]`);
    if (espelhoCheckbox && espelhoCheckbox.checked) {
    checkbox.checked = false; // Uncheck the checkbox if the corresponding side is already selected
    continue; // Skip to the next iteration
    }
    
    if (checkbox.checked) {
    ladoElemento.classList.add('lado-selecionado');
    if (lado === 'superior' || lado === 'inferior') {
        ladoElemento.classList.add('linha-verde');
        ladosMaiores++;
    } else {
        ladosMenores++;
    }
    } else {
    ladoElemento.classList.remove('lado-selecionado');
    if (lado === 'superior' || lado === 'inferior') {
        ladoElemento.classList.remove('linha-verde');
    }
    }
}

document.getElementById('lados-maiores-saia').value = ladosMaiores.toString();
document.getElementById('lados-menores-saia').value = ladosMenores.toString();
}

// Função para atualizar o espelho selecionado   
function atualizarEspelho() {
let ladosMaioresEspelho = 0;
let ladosMenoresEspelho = 0;

const checkboxes = document.querySelectorAll('.checkbox-lado-espelho');
const retangulo = document.querySelector('.retangulo');

for (let checkbox of checkboxes) {
    const lado = checkbox.getAttribute('data-lado');
    const ladoElemento = retangulo.querySelector(`.lado.${lado}`);
    
    // bloqueia se caso o usuario selecionar o mesmo lado
    const saiaCheckbox = document.querySelector(`.checkbox-lado[data-lado="${lado}"]`);
    if (saiaCheckbox && saiaCheckbox.checked) {
    checkbox.checked = false; 
    continue;
    }
    
    if (checkbox.checked) {
    ladoElemento.classList.add('lado-selecionado1');
    if (lado === 'superior' || lado === 'inferior') {
        ladoElemento.classList.add('linha-azul');
        ladosMaioresEspelho++;
    } else {
        ladosMenoresEspelho++;
    }
    } else {
    ladoElemento.classList.remove('lado-selecionado1');
    if (lado === 'superior' || lado === 'inferior') {
        ladoElemento.classList.remove('linha-azul');
    }
    }
}

document.getElementById('lados-maiores-espelho').value = ladosMaioresEspelho.toString();
document.getElementById('lados-menores-espelho').value = ladosMenoresEspelho.toString();
}

    // Função para inicializar o código da saia
    function init() {
    const calcularButton = document.getElementById("calcular");
    const checkboxes = document.querySelectorAll('.checkbox-lado');

    calcularButton.addEventListener("click", calcularValorTotal);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', atualizarAcabamento));
    }

    // Função para inicializar o código do espelho
    function init() {
    const calcularButton = document.getElementById("calcular");
    const checkboxes = document.querySelectorAll('.checkbox-lado');
    const checkboxesEspelho = document.querySelectorAll('.checkbox-lado-espelho');

    calcularButton.addEventListener("click", calcularValorTotal);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', atualizarAcabamento));
    checkboxesEspelho.forEach(checkbox => checkbox.addEventListener('change', atualizarEspelho));
}

function limparSelecoes() {
const checkboxesSaia = document.querySelectorAll('.checkbox-lado');
const checkboxesEspelho = document.querySelectorAll('.checkbox-lado-espelho');

checkboxesSaia.forEach(checkbox => {
    checkbox.checked = false;
});

checkboxesEspelho.forEach(checkbox => {
    checkbox.checked = false;
});

// Limpa os valores
atualizarAcabamento();
atualizarEspelho();
}

// Botão de limpeza
const limparButton = document.getElementById("limpar");
limparButton.addEventListener("click", limparSelecoes);