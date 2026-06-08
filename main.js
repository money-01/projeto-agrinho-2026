// ESCUTA O EVENTO DE CARREGAMENTO INICIAL DO NAVEGADOR
document.addEventListener("DOMContentLoaded", () => {
    gerenciarMenu();
});

/* ==========================================================================
   FUNCIONALIDADE 1: MENU RESPONSIVO (OCULTAR / EXIBIR)
   ========================================================================== */
function gerenciarMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const appNav = document.getElementById("appNav");
    const navLinks = document.querySelectorAll(".nav-link");

    // Altera o estado de visualização do menu flutuante
    menuToggle.addEventListener("click", () => {
        appNav.classList.toggle("open");
    });

    // Força o menu a fechar após o clique em uma das seções
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            appNav.classList.remove("open");
        });
    });
}

/* ==========================================================================
   FUNCIONALIDADE 2: CARDS INFORMATIVOS INTERATIVOS
   ========================================================================== */
function revelarDetalhe(card) {
    // Captura o elemento oculto dentro do card clicado
    const detalhe = card.querySelector(".card-detail");
    
    // Liga ou desliga a visibilidade usando a classe utilitária do CSS
    detalhe.classList.toggle("hidden");
    
    // Aplica um feedback visual na borda para destacar módulos abertos
    if (!detalhe.classList.contains("hidden")) {
        card.style.borderColor = "var(--cor-principal)";
    } else {
        card.style.borderColor = "rgba(0, 230, 118, 0.15)";
    }
}

/* ==========================================================================
   FUNCIONALIDADE 3: LINHA DO TEMPO DA AGRICULTURA
   ========================================================================== */
// Banco de dados contendo o histórico a ser impresso na tela
const historicoAgro = [
    {
        titulo: "Fase 01: Agricultura Tradicional",
        texto: "Processos manuais ou analógicos de alta tração física. Forte dependência do clima sem ferramentas de previsão e baixa eficiência por hectare."
    },
    {
        titulo: "Fase 02: Agricultura Digital (Hoje)",
        texto: "Sensoriamento ativo do solo, uso de drones de pulverização localizada, tratores guiados por telemetria de satélites e monitoramento por aplicativos móveis."
    },
    {
        titulo: "Fase 03: Agricultura Autônoma (Amanhã)",
        texto: "Maquinários que operam sem motoristas, inteligência artificial fazendo previsão meteorológica de safras anuais completas e emissão neutra de carbono."
    }
];

function mudarLinhaTempo(indice, itemClicado) {
    // Localiza e limpa o destaque de todas as etapas da linha do tempo
    const todosItens = document.querySelectorAll(".timeline-item");
    todosItens.forEach(item => item.classList.remove("active"));
    
    // Adiciona o destaque gráfico exclusivo ao elemento ativo clicado
    itemClicado.classList.add("active");
    
    // Atualiza a caixa de texto dinâmica com as informações coletadas do array
    const painelConteudo = document.getElementById("timelineContent");
    painelConteudo.innerHTML = `
        <h3>${historicoAgro[indice].titulo}</h3>
        <p>${historicoAgro[indice].texto}</p>
    `;
}

/* ==========================================================================
   FUNCIONALIDADE 4: SIMULADOR ECOLÓGICO (CÁLCULOS LOGÍSTICOS)
   ========================================================================== */
function calcularImpacto() {
    const inputArea = document.getElementById("hectares");
    const containerResultado = document.getElementById("resultadoCalc");
    
    // Converte o valor inserido para número inteiro
    const totalHectares = parseInt(inputArea.value);
    
    // Validador de dados para impedir envios nulos ou negativos
    if (isNaN(totalHectares) || totalHectares <= 0) {
        alert("Erro: Código de dados inválido. Insira um número de hectares acima de zero.");
        return;
    }
    
    // Regras matemáticas fictícias baseadas em médias de tecnologia no campo:
    // - Economia média anual de 15.000 litros de água por hectare monitorado.
    // - Redução estável de 35% de agrotóxicos devido ao mapeamento inteligente de pragas.
    // - Geração de energia limpa (painéis/biomassa) que abastece 2 lares rurais por hectare.
    const litrosAgua = totalHectares * 15000;
    const porcCortada = 35;
    const residenciasSuportadas = totalHectares * 2;
    
    // Exibe e escreve os dados gerados nas tags de destino no HTML
    document.getElementById("resAgua").innerText = litrosAgua.toLocaleString('pt-BR');
    document.getElementById("resInsumos").innerText = porcCortada;
    document.getElementById("resEnergia").innerText = residenciasSuportadas;
    
    // Libera a exibição do bloco removendo a trava do 'hidden'
    containerResultado.classList.remove("hidden");
    
    // Desloca o campo de visão da tela para focar diretamente na resposta processada
    containerResultado.scrollIntoView({ behavior: 'smooth' });
}