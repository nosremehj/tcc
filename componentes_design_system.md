# Biblioteca de Componentes: Design System UNITINS

Esta é a listagem técnica isolada dos macro e micro-componentes criados transversalmente e aplicados nas refatorações das páginas (`SIBUNI`, `iProtocolo` e `Login do Portal`). Elas servem de inventário para a estruturação do seu TCC na fase de "Desenvolvimento / Prototipagem".

### 1. Macro-Componentes Estruturais (Layout Base)
São os alicerces que envelopam as aplicações, garantindo que o portal seja reconhecido instantaneamente independente de qual a sub-página acessada.

*   **Sticky Glassmorphism Navbar (`.navbar`):**
    *   *Onde atua:* Topo global de todas as 6 versões geradas.
    *   *Função:* Cabeçalho flutuante que não some no *scroll*. Utiliza a propriedade de desfoque (backdrop-filter) para elegância. Engloba de forma nativa o botão universal de tema (Light/Dark Mode) e incorpora ícones sociais com propriedades `aria-label`.
*   **Semantic Breadcrumb (`<nav aria-label="Breadcrumb">`):**
    *   *Onde atua:* Logo abaixo do Navbar nas telas internas (ex: iProtocolo).
    *   *Função:* Componente de trilha em formato de cápsula com separadores gráficos (Chevrons). Roteia a jornada do aluno de volta à página mãe mantendo estrita conformidade com rastreadores da web pelo uso do atributo `aria-current="page"`.
*   **Premium Grid Footer (`.footer`):**
    *   *Onde atua:* Rodapé global de todas as páginas.
    *   *Função:* Um bloco desenhado puramente com CSS Grid sob a lei do "Mobile-First". Padroniza a exibição corporativa em apenas 3 colunas independentes (Atendimento, Certificações/e-MEC e Executivo), desabando simetricamente sem quebrar telas menores.

### 2. Componentes de UI e Interação (Micro-Estruturas)
Elementos de montagem que o aluno manipula ativamente com o mouse ou o dedo (touchscreen).

*   **Action & Access Cards (`.action-card` e `.access-card`):**
    *   *Onde atua:* Painel principal do iProtocolo e grade de acessos centrais do SIBUNI.
    *   *Função:* Cartões interativos que agrupam hiperlinks soltos. Eles recebem sombras responsivas (`box-shadow`) que levitam no `:hover` do cursor. Suportam o modo "Highlight" (gradiente de energia amarela/laranja) para forçar o foco de visão numa ação prioritária (ex: *Nova Solicitação*).
*   **Accessible Accordion (`.accordion` / Sanfona):**
    *   *Onde atua:* Seção de Ajuda/Tutoriais no Login e nas listas verticais do iProtocolo.
    *   *Função:* Componente vital de organização de FAQs. Ao invés de usar códigos inseguros, ele injeta matematicamente os controladores virtuais `aria-expanded` (Aberto/Fechado) e `aria-hidden` na montagem DOM para alertar sistemas de deficiência visual no ato do clique.
*   **Nav-Pills / Horizontal Scroll Menu (`.nav-pills`):**
    *   *Onde atua:* Menu de recursos do SIBUNI moderno e SIBUNI Light.
    *   *Função:* Transmuta links imensos de regulamentações em pílulas textuais dispostas em uma única fita horizontal arrastável. Libera quase 70% do espaço vertical inútil dos sub-menus no celular.

### 3. Componentes de Formulário (Forms & Inputs)
Os pontos cirúrgicos de contato, coleta e segurança de tráfego de dados.

*   **Accessible Form Group (`.mod-form-group` e `.mod-input`):**
    *   *Onde atua:* Caixas de digitação de Email e senha da página de Portal Login Modern / Light e na barra nativa de pesquisa do SIBUNI.
    *   *Função:* Institui o emparelhamento obrigatório da tag estrutural de acessibilidade `<label>` ligada ao `id` do input e implementa zonas de impacto (padding) seguras. Asseguram pseudo-classes de destaque ativo com linhas azuis visíveis no código via (`:focus-visible`).
*   **Password Visibility Toggle (`.mod-eye`):**
    *   *Onde atua:* Formulario de acesso (Senha) do Painel do Aluno.
    *   *Função:* Ícone embarcado (in-line text component) com gatilho direto para alterar dinamicamente o `type="password"` por `type="text"`. Seu principal objetivo de métrica de Design é aliviar o "Medo" associado à digitação no teclado touch de smartphones.
*   **News Gradient Covers (`.news-card-cover`):**
    *   *Onde atua:* Base de rodapé de noticiários e informativos no painel do SIBUNI.
    *   *Função:* Impede que uma área de notícias fique desconfigurada caso a ASCOM não anexe uma imagem na matéria. Ele assume a geração autônoma de recortes baseados em um gradiente azul, chumbo ou verde orgânico, assegurando que o card nunca quebre o alinhamento.
    
### 4. O Coração do Design System (Design Tokens)
*   **Theming Variables (`:root` / CSS Variables):**
    *   *Onde atua:* O código mestre.
    *   *Função:* O componente mais silencioso e mortífero do Design System. É o agrupamento primitivo de chaves organizacionais de cores como `var(--primary-blue)` e tamanhos de espaçamento num local único. Foi esse elemento isolado que nos permitiu criar e gerar as páginas "Light" (`iprotocolo_light.html`) com o comando de uma única linha invertendo a polaridade das cores perfeitamente.
