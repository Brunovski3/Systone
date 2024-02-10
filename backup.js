// Função para atualizar o espelho selecionado   
function atualizar_espelho() {
    let lados_M_espelho = 0;
    let lados_m_espelho = 0;
    
    const checkboxes = document.querySelectorAll('.checkbox-lado-espelho');
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
    