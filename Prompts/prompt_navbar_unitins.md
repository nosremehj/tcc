# Prompt Estrutural para Geração da Navbar - Padrão UNITINS

**Contexto:** Ao solicitar para uma IA (ex: Stitch AI, ChatGPT, Claude) criar ou atualizar uma página do sistema da Unitins, cole as suas regras do que a página deve fazer, e por fim **cole este prompt abaixo** para garantir que a barra de navegação saia sempre com o selo do Governo e o layout corretos.

---

```text
Atue como um Engenheiro de Front-end Especialista em Design Systems.
Sua missão é gerar ou atualizar a <nav class="navbar"> desta página para que ela siga estritamente o Padrão Master da Universidade Estadual do Tocantins (UNITINS).

ESTRUTURA OBRIGATÓRIA DA NAVBAR:
A Navbar deve possuir o estilo visual com `backdrop-filter: blur`, cor baseada nas variáveis CSS de fundo e border-bottom suave. Ela é sempre dividida obrigatoriamente em 3 blocos em display flex (space-between e align-items center):

1. BLOCO ESQUERDO (A Marca - Fixo):
Obrigatório. Deve conter o agrupamento de logomarcas.
- A âncora principal contendo a imagem oficial da logo da Unitins (`<img src="https://www.unitins.br/uniPerfil/Logomarca/Imagem/09997c779523a61bd01bb69b0a789242" alt="Logo Unitins" style="height: 45px;">`).
- Uma linha fina divisória vertical (separador).
- A imagem oficial da logo do Governo do Estado do Tocantins (`logo-gov.png`) mantendo as suas cores institucionais em qualquer variante de tema.

2. BLOCO CENTRAL (Dinâmico / Contextual):
Este bloco varia conforme o módulo da página que estamos desenvolvendo:
- Regra SIBUNI: Inserir um `<div class="nav-search">` com um input arredondado, ícone de lupa e texto de placeholder "Pesquisar no acervo...".
- Regra IPROTOCOLO: Posição livre para incluir eventuais títulos internos, menus retráteis ou deixado vazio.
- Regra PORTAL LOGIN: Deixar completamente vazio (espaço em branco fluído) para dar foco ao botão de login.

3. BLOCO DIREITO (Ações - Fixo):
Obrigatório. O agrupamento `<div class="nav-actions">` deve estar alinhado à direita e conter a exata ordem de elementos abaixo, lado a lado:
- Redes Sociais: 4 ícones simples e clicáveis (Instagram, Facebook, YouTube, LinkedIn).
- Theme Toggle: 1 pequeno botão apenas com o ícone para alternar Dark/Light mode (ex: ícone de lua ou sol das bibliotecas do Phosphor Icons). Sem textos, apenas o ícone.
- Seletor de Idioma: Um elemento ou botão de `<select>` limpo, permitindo a escolha entre "Português" (PT) e "English" (EN).
- Botão de Ação Principal: Um botão primário de destaque (ex: classe `.btn-primary`). O texto dele dependerá da página ("Entrar", no caso geral; "Acesso Administrativo / Servidor", no caso interno do iProtocolo).

DIRETRIZES TÉCNICAS ADICIONAIS:
- Não recrie variáveis CSS globais se eu já as forneci. Reutilize `var(--primary-blue)`, `--text-dark`, etc.
- Mantenha a acessibilidade perfeita: todos os botões que possuem apenas ícones (como o de tema e redes sociais) devem obrigatoriamente conter a tag `aria-label="DESCRIÇÃO"`.
- Use a biblioteca Phosphor Icons ou FontAwesome (conforme o padrão já incluído na página).
```
