// Inicializando os pontos para cada jogador
let pontos1 = 0;
let pontos2 = 0;

// Referência aos elementos onde os pontos serão exibidos
const pontos1Display = document.getElementById("pontos1");
const pontos2Display = document.getElementById("pontos2");

// Referência aos botões para adicionar pontos
const addPontos1Button = document.getElementById("addPontos1");
const addPontos2Button = document.getElementById("addPontos2");

// Função para adicionar ponto para o Participante 1
addPontos1Button.addEventListener("click", () => {
    pontos1++;
    pontos1Display.textContent = pontos1; // Atualiza os pontos do Participante 1
    verificarVencedor();
});

// Função para adicionar ponto para o Participante 2
addPontos2Button.addEventListener("click", () => {
    pontos2++;
    pontos2Display.textContent = pontos2; // Atualiza os pontos do Participante 2
    verificarVencedor();
});

// Função para verificar quem é o vencedor
function verificarVencedor() {
    if (pontos1 > pontos2) {
        alert("Participante 1 está vencendo!");
    } else if (pontos2 > pontos1) {
        alert("Participante 2 está vencendo!");
    } else {
        alert("Empate! Ambos os participantes têm a mesma quantidade de pontos.");
    }
}


const palavras = [
    "🌶Beijo francês prolongado", "🌶Massagem nas mãos com óleo", "🌶Elogio Intimo", "🌶Dança lenta apertada", "🌶Caricia nos cabelos",
    "💋Beijo no pescoço + sopro", "💋Mordidinha no ombro", "💋Strip truco", "💋Venda nos olhos + alimentação", "💋Jogo dos sentidos",
    "😈Striptease lento", "😈Lambida corporal", "😈Rolepay básico", "😈Jogo do sim/não", "😈Toque intimo por cima da roupa",
    "💦Jogo do castigo", "💦Gravação de audio erótico", "💦Posição kamasutra 1 minuto", "💦Uso de gelo na zona erógena", "💦Orgasmo controlado",
    "⚡Jogo de dominação/submissão", "⚡Fantasias tabus", "⚡Sexo em local incomum", "⚡Brinquedos eróticos", "⚡Lista de desejos sexuais"
];

document.getElementById("gerar").addEventListener("click", function() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    document.getElementById("word").textContent = palavraAleatoria;
});
 /* Aqui está um **guia detalhado** de como jogar cada um dos desafios eróticos, dividido por níveis de ousadia:

---

### **📜 REGRAS BÁSICAS DO JOGO**  
1. **Definam limites** antes de começar (use o sistema de cores: verde/amarelo/vermelho).  
2. **Safeword obrigatória** (ex: "Pare" ou "Abacaxi" para interromper qualquer ação).  
3. **Métodos de escolha**: Cartas, dado (1-5 = nível, 6 = livre escolha) ou app de sorteio.  
4. **Prêmios**: Quem completar mais desafios ganha uma "noite de reinado" ou um vale-fantasia.  

---

### **🌶 NÍVEL 1 - INICIAÇÃO**  
1. **Beijo Francês Prolongado**  
   - Beijem-se por 30 segundos sem parar, com língua e olhos fechados.  
   - **Dica**: Coloque uma música para marcar o tempo.  

2. **Massagem nas Mãos com Óleo**  
   - Massageie as palmas e dedos do parceiro por 1 minuto, com óleo ou hidratante.  
   - **Regra**: O receptor deve ficar de olhos fechados.  

3. **Elogio Íntimo**  
   - Diga uma frase específica sobre o que acha sexy no parceiro hoje (ex: *"Amo como essa calça destaca sua bunda"*).  

---

### **💋 NÍVEL 2 - CONEXÃO**  
6. **Beijo no Pescoço + Sopro**  
   - Beije o pescoço por 10 segundos, depois sopre levemente.  
   - **Dica**: Use os dentes de leve para provocar.  

7. **Strip Poker Básico**  
   - Joguem qualquer jogo de cartas (ex: "21"). Quem perder tira uma peça de roupa.  
   - **Variante**: Dados (número = peças a tirar).  

---

### **😈 NÍVEL 3 - PAIXÃO**  
11. **Striptease Lento**  
   - Quem tirar o desafio deve dançar por 3 minutos, tirando uma peça a cada 30 segundos.  
   - **Dica**: Use "Pour Some Sugar on Me" (Def Leppard) como trilha.  

12. **Lambida Corporal com Chocolate**  
   - Derreta chocolate e desenhe um coração no abdômen/coxas do parceiro. Lamba até "limpar".  

---

### **💦 NÍVEL 4 - LUXÚRIA**  
16. **Orgasmo Controlado**  
   - Um parceiro estimula o outro, mas deve parar **3 vezes** antes do clímax final.  
   - **Regra**: Use um cronômetro (ex: pausas de 15 segundos).  

17. **Jogo do Castigo**  
   - Em qualquer jogo (ex: Jogo da Velha), o perdedor deve cumprir uma ordem erótica combinada antes.  

---

### **⚡ NÍVEL 5 - EXTREMO**  
21. **Brinquedos Eróticos**  
   - Vibrador preso: Uma pessoa fica com o vibrador (controlado pelo parceiro) durante um jogo de tabuleiro.  

22. **Sexo em Local Incomum**  
   - Sorteiem um cômodo da casa (ex: cozinha) e uma posição (ex: de pé).  

---

### **🎯 BÔNUS: SISTEMA DE PONTOS**  
- **1 ponto**: Desafios nível 1-2  
- **2 pontos**: Nível 3-4  
- **3 pontos**: Nível 5  
- **5 pontos**: Troca por "Vale-Fantasia" (ex: *"Massagem com final feliz"*).  

**Exemplo de jogo**:  
1. Rolem o dado (caiu 4 = nível 2).  
2. Tiraram o desafio #7 (Strip Poker).  
3. Quem perder tira uma peça e marca 1 ponto.  

---

### **📥 MATERIAL EXTRA (PARA SEU SITE)**  
Posso criar para você:  
- **PDF das cartas** prontas para imprimir  
- **Tabela de pontuação** personalizável  
- **Versão "Apimentada"** com +50 desafios  

Quer que eu envie um modelo gratuito? 😉 */


/* 💋 DESAFIOS PICANTES (Nível Hardcore)
"Decoração Proibida"

Como jogar: Escreva com hidratante íntimo onde quer ser tocado(a) no corpo do parceiro. Ele(a) deve ler com os lábios.

Dica bônus: Use chantilly para "apagar" as palavras com a boca.

"Roleta Russa Erótica"

Como jogar: Gire uma garrafa no chão. Quem for apontado:

Homem: Faz oral por exatos 2 minutos (cronometrados).

Mulher: Fica de 4 apoiando apenas nas mãos (sem se mover).

"Vibrador Público"

Como jogar: Durante um jogo de cartas (ex: buraco), o perdedor usa vibrador no máximo controlado pelo vencedor.

"Prova de Resistência"

Como jogar: Quem aguentar mais tempo sem gemer enquanto o parceiro estimula seus mamilos com gelo, ganha o direito de amarrar o outro.

"Escravoceta"

Como jogar: O perdedor vira "escravo sexual" por 15 minutos (deve obedecer 3 ordens sem questionar).

😈 MODOS DE JOGO (Escolha 1)
1. Modo Dominador

Ganhador tem direito a:

1 tapa forte (com consentimento)

Escolher a posição do sexo

Gravar um áudio erótico com a voz do perdedor

2. Modo Submissão

Perdedor deve:

Ficar nu(a) por 3 rodadas

Beijar os pés do vencedor

Usar coleira por 1 hora

*/