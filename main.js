// AGUARDA O CARREGAMENTO COMPLETO DO DOCUMENTO
document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
});

/* -----------------------------------------
   1. FUNCIONALIDADE: MENU RESPONSIVO
----------------------------------------- */
function inicializarMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const appNav = document.getElementById("appNav");
    const navLinks = document.querySelectorAll(".nav-link");

    // Abre/Fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener("click", () => {
        appNav.classList.toggle("open");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link interno
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            appNav.classList.remove("open");
        });
    });
}

/* -----------------------------------------
   2. FUNCIONALIDADE: CARDS INFORMATIVOS
----------------------------------------- */
function revelarDetalhe(cardSelecionado) {
    // Localiza o parágrafo de detalhes oculto dentro do card clicado
    const detalhe = cardSelecionado.querySelector(".card-detail");
    
    // Altera a classe 'hidden' (escondido/visível)
    detalhe.classList.toggle("hidden");
    
    // Feedback visual opcional: destaca de leve o card ativo
    if (!detalhe.classList.contains("hidden")) {
        cardSelecionado.style.borderColor = "var(--cor-principal)";
    } else {
        cardSelecionado.style.borderColor = "#ddd";
    }
}

/* -----------------------------------------
   3. FUNCIONALIDADE: LINHA DO TEMPO
----------------------------------------- */
// Dados fictícios estruturados que mudarão dinamicamente na tela
const dadosLinhaTempo = [
    {
        titulo: "Agricultura Tradicional",
        texto: "Processos manuais, alta dependência do clima sem dados precisos e maior esforço físico para o produtor rural."
    },
    {
        titulo: "Agricultura Conectada (Hoje)",
        texto: "Uso de drones para mapeamento de pragas, tratores guiados por GPS e sensores que medem a umidade do solo em tempo real."
    },
    {
        titulo: "Agricultura Autônoma (Amanhã)",
        texto: "Inteligência Artificial prevendo colheitas com meses de antecedência, robôs cuidando do plantio e emissão zero de carbono."
    }
];

function mudarLinhaTempo(index, elementoClicado) {
    // Remove o status 'active' de todas as etapas da linha do tempo
    const todosItens = document.querySelectorAll(".timeline-item");
    todosItens.forEach(item => item.classList.remove("active"));
    
    // Adiciona o status 'active' apenas na etapa clicada
    elementoClicado.classList.add("active");
    
    // Atualiza o conteúdo da caixa de texto explicativa
    const boxConteudo = document.getElementById("timelineContent");
    boxConteudo.innerHTML = `
        <h3>${dadosLinhaTempo[index].titulo}</h3>
        <p>${dadosLinhaTempo[index].texto}</p>
    `;
}

/* -----------------------------------------
   4. FUNCIONALIDADE: CALCULADORA ECOLÓGICA
----------------------------------------- */
function calcularImpacto() {
    const inputHectares = document.getElementById("hectares");
    const resultadoCalc = document.getElementById("resultadoCalc");
    
    // Pega o valor digitado e transforma em número inteiro
    const hectares = parseInt(inputHectares.value);
    
    // Validação simples para evitar campos vazios ou números negativos
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, digite um número válido de hectares maior que zero.");
        return;
    }
    
    // Cálculos lógicos baseados em estimativas médias de sustentabilidade:
    // - 15.000 litros de água economizados por hectare/ano com gotejamento inteligente
    // - Redução estável de até 35% de defensivos químicos usando IA e sensores
    // - 1 hectare tecnológico gera energia limpa para cerca de 2 casas
    const aguaEconomizada = hectares * 15000;
    const reducaoInsumos = 35; 
    const energiaCasas = hectares * 2;
    
    // Injeta os resultados processados nas respectivas tags HTML
    document.getElementById("resAgua").innerText = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById("resInsumos").innerText = reducaoInsumos;
    document.getElementById("resEnergia").innerText = energiaCasas;
    
    // Remove a classe 'hidden' para exibir o painel de resultados na tela do app
    resultadoCalc.classList.remove("hidden");
    
    // Faz a rolagem automática até o resultado para melhorar a experiência do usuário
    resultadoCalc.scrollIntoView({ behavior: 'smooth' });
}