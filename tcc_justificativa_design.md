# Justificativa Acadêmica: Modernização e Refatoração de Interface Sustentada por Design System

A transição de uma interface legado para uma abordagem fundamentada num **Design System** moderno não é apenas uma melhoria estética superficial, mas uma evolução fundamental na Engenharia de Software e em Interação Humano-Computador (IHC). Para o contexto do seu TCC (referenciado ao portal *i-Protocolo* ou *SIBUNI* da Unitins), a implementação do design moderno traz os seguintes ganhos empíricos e teóricos:

## 1. Redução da Carga Cognitiva e Consistência (Heurísticas de Nielsen)
A utilização de um Design System padronizado garante que cores, tipografias e espaçamentos sejam matematicamente consistentes (uso de *Design Tokens*). 
- **Argumento para o TCC:** Segundo a *Heurística de Consistência e Padrões* de Jakob Nielsen, sistemas consistentes reduzem o tempo de aprendizado do usuário. Ao padronizar botões, formulários e o *grid* de navegação, a carga cognitiva intrínseca é diminuída, permitindo que o aluno da instituição execute suas tarefas (como abrir um protocolo) de forma mais ágil e com menor probabilidade de erro ("*Error Prevention*").

## 2. Acessibilidade Digital e Inclusão (Diretrizes WCAG)
Como o sistema pertence a uma universidade pública (UNITINS), ele tem o dever cívico e legal de ser inclusivo. O design original muitas vezes falhava em contraste e legibilidade.
- **Argumento para o TCC:** A nova interface moderna aplica princípios das diretrizes WCAG (*Web Content Accessibility Guidelines*), melhorando a taxa de contraste cromático entre fundo e texto, além de estruturar o HTML de forma semântica (tags `<nav>`, `<main>`, `<section>`). A adoção de fontes sem serrilha otimizadas para telas digitais (como *Inter* e *Outfit*) melhora drasticamente a legibilidade para usuários disléxicos ou com baixa visão, tornando a plataforma publicamente acessível.

## 3. Paradigma Mobile-First e Responsividade
A interface original do protótipo possuía posicionamento absoluto ("*pixel perfect rigid*"), o que invibializa a visualização em smartphones.
- **Argumento para o TCC:** A adoção de uma arquitetura responsiva (baseada em CSS *Grid* e *Flexbox*) atende ao cenário atual onde a vasta maioria dos acessos de alunos a sistemas educacionais é realizada via dispositivos móveis. O design moderno garante a adaptação fluída e automática ("*graceful degradation*" e "*progressive enhancement*") do layout para qualquer resolução de tela (desktop, tablet, smartphone), eliminando a necessidade de rolagem horizontal e prevenindo o abandono da página (*bounce rate*).

## 4. O Efeito "Estética-Usabilidade" (Aesthetic-Usability Effect)
Pesquisas no campo clássico de IHC comprovam que usuários percebem interfaces esteticamente agradáveis como sendo "mais fáceis de usar" e mais eficientes do que interfaces menos polidas, mesmo que a arquitetura do código backend seja idêntica (Kurosu & Kashimura, 1995; Norman, 2004).
- **Argumento para o TCC:** A adoção do *Glassmorphism* (elementos translucidos com desfoque de fundo) e de sombras dinâmicas de profundidade ("*soft shadows*") transmite um nível elevado ("*premium*") de confiabilidade do sistema eletrônico da Universidade. Uma percepção profissional do portal acadêmico aumenta a confiança do aluno e reduz a frustração em operações burocráticas sensíveis.

## 5. Microinterações e Feedback Imediato
A interface clássica é excessivamente estática. O modelo moderno refatora botões que ganham animações suaves de translação e sombra (*hover*).
- **Argumento para o TCC:** Na óptica da usabilidade de Donald Norman ("O Design do Dia a Dia"), o "retorno" (*Feedback*) é crucial. As microinterações aplicadas na versão moderna confirmam visualmente ao usuário que o elemento é interagível e que a ação foi registrada preventivamente. Isso resolve o problema de incerteza do aluno quando ele clica num botão e aguarda pelo processamento dos dados do protocolo.

---
> **Dica para sua redação:** Integre essas análises no capítulo de **"Resultados e Discussões"** ou **"Motivações Técnicas"**. Compare como o sistema anterior gerava fricção na obtenção de um protocolo estudantil e como a modernização que você construiu traduz conceitos de Interação Humano-Computador na prática!
