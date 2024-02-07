    // Dados de materiais, acabamentos, cubas e cooktop;


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
    "Ocre Itabira": 300,
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
    "Cuba N¹46x30/14": 215,
    "Cuba N¹46x30/17": 235,
    "Cuba N²56x32/14": 235,
    "Cuba N²56x32/17": 285,
    "Cuba Oval Pequena": 185,
    "Cuba Oval Grande": 205
    };

    const cooktop = {
    "Sem Corte": 0,
    "Com Corte Cooktop": 60
    };

    // Função para calcular o valor total
    function calculo_valor_total() {

    // Obtenção dos valores selecionados
    const material = document.getElementById("material").value;
    const p_materiais = materiais[material];
    const p_cubas = cubas[document.getElementById("cubas").value];
    const p_cooktop = cooktop[document.getElementById("cooktop").value];
    const acabamento = document.getElementById("acabamento").value;
    const p_acabamento = acabamentos[acabamento];
    const comp_pia = parseFloat(document.getElementById("comprimento-pia").value);
    const larg_pia = parseFloat(document.getElementById("largura-pia").value);
    const larg_saia = parseFloat(document.getElementById("largura-saia").value);
    const larg_espelho = parseFloat(document.getElementById("largura-espelho").value);
    const lados_M_saia = parseInt(document.getElementById("lados-maiores-saia").value);
    const lados_m_saia = parseInt(document.getElementById("lados-menores-saia").value);
    const lados_M_espelho = parseInt(document.getElementById("lados-maiores-espelho").value);
    const lados_m_espelho = parseInt(document.getElementById("lados-menores-espelho").value);


    // Cálculos
    let area_pia = larg_pia * comp_pia;
    let preço_pia = area_pia * p_materiais;

    let lados_saia = (lados_m_saia * larg_pia) + (lados_M_saia * comp_pia);
    let area_saia = lados_saia * larg_saia;
    let valor_saia = area_saia * p_materiais;

    let lados_espelho = (lados_m_espelho * larg_pia) + (lados_M_espelho * comp_pia);
    let area_espelho = lados_espelho * larg_espelho;
    let valor_espelho = area_espelho * p_materiais;

    let comp_saia = lados_saia;
    let p_acabamentoTotal = comp_saia * p_acabamento;

    let valorTotal = preço_pia + valor_saia + valor_espelho + p_acabamentoTotal + p_cubas + p_cooktop;
    document.getElementById("resultado").innerHTML = `
        O valor total da pia é <strong>R$${valorTotal.toFixed(2)}</strong>;<br>
        Preço da área da pia: R$${preço_pia.toFixed(2)};<br>
        Preço da saia: R$${valor_saia.toFixed(2)};<br>
        Preço do espelho: R$${valor_espelho.toFixed(2)};<br>
        Preço do acabamento: R$${p_acabamentoTotal.toFixed(2)};<br>
        Preço da cuba: R$${p_cubas.toFixed(2)};<br>
        Corte Cooktop: R$${p_cooktop.toFixed(2)}.<br>
        Obs: <br>
        Material utilizado: ${material};<br>
        Preço do Material: R$${p_materiais.toFixed(2)}.
        `;
    }
    
    //saber oq esá sendo selecionado
const check_box_lado = document.querySelectorAll('.checkbox-lado');
const check_box_lado_espelho = document.querySelectorAll('.checkbox-lado-espelho');
const opções_selecionadas = document.getElementById('opcoes-selecionadas');

function exibir_opções_selecionadas() {
let opções = "Opções selecionadas: ";
let opção_selecionada = false;

check_box_lado.forEach(checkbox => {
    if (checkbox.checked) {
    opção_selecionada = true;
    opções += "saia " + checkbox.getAttribute('data-lado') + ", ";
    }
});

check_box_lado_espelho.forEach(checkbox => {
    if (checkbox.checked) {
    opção_selecionada = true;
    opções += "espelho " + checkbox.getAttribute('data-lado') + ", ";
    }
});

if (opção_selecionada) {
    opções_selecionadas.textContent = opções.slice(0, -2);
} else {
    opções_selecionadas.textContent = "";
}
}

check_box_lado.forEach(checkbox => {
checkbox.addEventListener('change', exibir_opções_selecionadas);
});

check_box_lado_espelho.forEach(checkbox => {
checkbox.addEventListener('change', exibir_opções_selecionadas);
});

// Função para atualizar o acabamento selecionado
function atualizar_acabamento() {
let lados_M_saia = 0;
let lados_m_saia = 0;

const checkboxes = document.querySelectorAll('.checkbox-lado');
const retangulo = document.querySelector('.retangulo');

for (let checkbox of checkboxes) {
    const lado = checkbox.getAttribute('data-lado');
    const lado_elemento = retangulo.querySelector(`.lado.${lado}`);
    
const cuba_element = retangulo.querySelector('.cuba');
const cuba_selecionada = document.getElementById("cubas").value;

if (cuba_selecionada !== "Sem Cuba") {
    cuba_element.style.display = 'block';
} else {
    cuba_element.style.display = 'none';
}
    
// Verifique se o lado correspondente está selecionado na seção espelho    
    const espelho_check_box = document.querySelector(`.checkbox-lado-espelho[data-lado="${lado}"]`);
    if (espelho_check_box && espelho_check_box.checked) {
    checkbox.checked = false; // Desmarque a caixa de seleção se o lado correspondente já estiver marcado
    continuar; // Pular para a próxima iteração
    }
    
    if (checkbox.checked) {
    lado_elemento.classList.add('lado-selecionado');
    if (lado === 'superior' || lado === 'inferior') {
        lado_elemento.classList.add('linha-verde');
        lados_M_saia++;
    } else {
        lados_m_saia++;
    }
    } else {
    lado_elemento.classList.remove('lado-selecionado');
    if (lado === 'superior' || lado === 'inferior') {
        lado_elemento.classList.remove('linha-verde');
    }
    }
}

document.getElementById('lados-maiores-saia').value = lados_M_saia.toString();
document.getElementById('lados-menores-saia').value = lados_m_saia.toString();
}

// Função para atualizar o espelho selecionado   
function atualizar_espelho() {
let lados_M_espelho = 0;
let lados_m_espelho = 0;

const checkboxes = document.querySelectorAll('.checkbox-lado-espelho');
const retangulo = document.querySelector('.retangulo');

for (let checkbox of checkboxes) {
    const lado = checkbox.getAttribute('data-lado');
    const lado_elemento = retangulo.querySelector(`.lado.${lado}`);
    
    // bloqueia se caso o usuário selecionar o mesmo lado
    const saia_check_box = document.querySelector(`.checkbox-lado[data-lado="${lado}"]`);
    if (saia_check_box && saia_check_box.checked) {
    checkbox.checked = false; 
    continue;
    }
    
    if (checkbox.checked) {
    lado_elemento.classList.add('lado-selecionado1');
    if (lado === 'superior' || lado === 'inferior') {
        lado_elemento.classList.add('linha-azul');
        lados_M_espelho++;
    } else {
        lados_m_espelho++;
    }
    } else {
    lado_elemento.classList.remove('lado-selecionado1');
    if (lado === 'superior' || lado === 'inferior') {
        lado_elemento.classList.remove('linha-azul');
    }
    }
}

document.getElementById('lados-maiores-espelho').value = lados_M_espelho.toString();
document.getElementById('lados-menores-espelho').value = lados_m_espelho.toString();
}

    // Função para inicializar o código da saia
    function init() {
    const botão_calcular = document.getElementById("calcular");
    const checkboxes = document.querySelectorAll('.checkbox-lado');

    botão_calcular.addcheck_box_saiaEventListener("click", calculo_valor_total);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', atualizar_acabamento));
    }

    // Função para inicializar o código do espelho
    function init() {
    const botão_calcular = document.getElementById("calcular");
    const checkboxes = document.querySelectorAll('.checkbox-lado');
    const check_box_espelho = document.querySelectorAll('.checkbox-lado-espelho');

    botão_calcular.addEventListener("click", calculo_valor_total);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', atualizar_acabamento));
    check_box_espelho.forEach(checkbox => checkbox.addEventListener('change', atualizar_espelho));
}

function limpar_seleção() {
const check_box_saia = document.querySelectorAll('.checkbox-lado');
const check_box_espelho = document.querySelectorAll('.checkbox-lado-espelho');

check_box_saia.forEach(checkbox => {
    checkbox.checked = false;
});

check_box_espelho.forEach(checkbox => {
    checkbox.checked = false;
});

// Limpa os valores
atualizar_acabamento();
atualizar_espelho();
}

// Botão de limpeza
const botão_limpar = document.getElementById("limpar");
botão_limpar.addEventListener("click", limpar_seleção);