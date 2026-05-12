# Melhorias de front-end para implementação no TCC

*Documento alinhado à análise das **interfaces institucionais em produção** no domínio **unitins.br** (IProtocolo, login do Portal do Aluno, SIBUNI/nPortal) e aos protótipos em `Pag/`. O material HTML do repositório funciona como **registro analítico e proposta de evolução** frente ao **estado atual publicado online**, e não como substituto do ambiente oficial. Ajuste referências ABNT e numeração conforme o modelo da instituição.*

**Referências de acesso (produção):** IProtocolo — `https://www.unitins.br/iprotocolo/` · Login Portal do Aluno — `https://www.unitins.br/PortalAluno/Account/Login` · SIBUNI (nPortal) — `https://www.unitins.br/nPortal/sibuni` (e demais rotas do nPortal conforme o estudo).

## 1. Contexto e objetivo

**Problema:** nas **interfaces em uso hoje** (portal acadêmico e serviços correlatos publicados pela UNITINS), observam-se limitações de aderência a boas práticas de **acessibilidade**, **internacionalização**, **semântica HTML5** e **consistência visual** com um vocabulário de Design System unificado.

**Objetivo:** demonstrar, de forma incremental e documentável, como **evoluir** essas telas **em relação ao que está no ar**, sem reescrever o backend no escopo do TCC, alinhando a WCAG 2.1, i18n (PT-BR / EN), tema claro/escuro onde aplicável, identidade cromática institucional e protótipos “light” como referência de arquitetura de informação.

## 2. Eixos de melhoria

### 2.1 Acessibilidade (a11y)

| Melhoria | Onde / exemplo | Justificativa (WCAG) |
|----------|----------------|----------------------|
| Skip link | Login (portal online / proposta) | 2.4.1 — contornar blocos repetidos |
| `:focus-visible` | Proposta vinculada às telas estudadas | 2.4.7 — foco visível |
| `<main id="conteudo">` | Login, IProtocolo (proposta) | 1.3.1 — região principal |
| Landmarks e `aria-label` | Login | Navegação por regiões |
| Rótulos / estado em controles | Idioma, tema, acordeão | 4.1.2 — nome, função, valor |
| Listas semânticas | IProtocolo (proposta) | 1.3.1 — estrutura |
| JSON-LD | BreadcrumbList, WebPage | SEO + dados estruturados |

### 2.2 Internacionalização (i18n)

- PT / EN com dicionário em JS e atributos `data-i18n*`.
- Persistência em `localStorage` (chaves por aplicação) — **complemento** ao idioma da publicação oficial.
- `lang` e `data-lang` no `<html>` com script inicial para evitar “flash” de idioma.
- Links `hreflang` apontando para as **URLs oficiais** em produção.

### 2.3 Tema claro / escuro

- Atributo `data-theme` e CSS de sobrescrita (ex.: tela de login estudada).
- Revisão de contraste em modo escuro (formulário, breadcrumb, rodapé).

### 2.4 Consistência visual (portal em produção / nPortal)

| Token | Uso típico |
|-------|------------|
| `#004093`, `#003c84` | Azul institucional (alinhado ao nPortal / login) |
| `#004cbd` | Acento / gradientes |
| `#18428f` | Botão primário (referência `estilo.css` nPortal) |
| `#ffb100` | Destaque / rodapé tipo “light” |

### 2.5 Protótipos Pag × portal atual (online)

- **`Pag/*_light.html`:** referência de arquitetura (hero, cards, rodapé).
- **Portal atual (unitins.br):** **objeto de análise** — comportamento, conteúdo e fluxos reais dos usuários.
- **Proposta no TCC:** páginas HTML de apoio que **preservam os mesmos destinos e ações** das URLs oficiais, incorporando melhorias de marcação, A11y e UX para **comparação** com o estado publicado.

### 2.6 Formulário (Portal do Aluno — produção)

- Baseline: formulário e fluxos como entregues pelo **sistema em produção**.
- Proposta: Bootstrap 5 (`form-floating`), acordeão `data-bs-*`, `label for`, validação `@unitins.br`, reCAPTCHA com `type="button"` e callback, scroll ao expandir acordeão em telas pequenas.

## 3. Contribuições / resultados esperados

> As melhorias **documentadas e implementadas no material de apoio ao TCC** demonstram a **viabilidade de modernização front-end** em continuidade com as **interfaces oficiais já publicadas**, sem alteração do stack servidor no escopo do estudo, com ganhos em **acessibilidade**, **internacionalização** e **alinhamento cromático** ao ecossistema digital da UNITINS. Os protótipos em `Pag/` funcionam como **especificação visual**; o contraste com o **portal atual online** permite comparar **estado publicado** e **estado proposto** no corpo do trabalho.

## 4. Checklist para o capítulo de resultados

1. Capturas de tela do **portal em produção** (baseline) e da **proposta** (lado a lado, mesma tarefa).
2. Tabela: critério WCAG × implementação × **URL oficial** ou artefato do TCC.
3. Limitações: material de apoio é estático; i18n/tema sem backend; registrar diferenças em relação ao ASP.NET em produção.
4. Avaliação: checklist WCAG ou axe DevTools sobre a **proposta** e, quando possível, inspeção da **publicação online** atual.
5. Síntese de decisões de UX explicitando o vínculo com **unitins.br**.

## 5. Tabela Antes × Depois

| Aspecto | Antes (portal publicado / observado) | Depois (proposta no material do TCC) |
|---------|--------------------------------------|----------------------------------------|
| Idioma | Conforme publicação oficial | PT/EN adicional + `lang` + persistência local |
| Foco | Conforme publicação oficial | `:focus-visible` explícito na proposta |
| Estrutura | Conforme markup em produção | `main`, `footer`, `h1`, listas onde aplicável |
| Rodapé | Conforme cada sistema no ar | Bloco institucional ampliado (onde aplicável) |
| Cor | Varia entre sistemas | Tokens alinhados ao nPortal / login |
| Dados estruturados | Ausente ou parcial | JSON-LD na proposta |

## 6. Referências sugeridas (ABNT)

- W3C — Web Content Accessibility Guidelines (WCAG) 2.1.
- W3C — HTML Living Standard.
- **Interfaces oficiais** UNITINS — `https://www.unitins.br` e subsistemas citados na pesquisa.

## 7. Vocabulário sugerido (evitar “réplica”)

| Em vez de | Preferir |
|-----------|----------|
| réplica | interface **em produção** / **publicada** em unitins.br |
| réplica fiel | **registro** ou **linha de base** do estado atual online |
| cópia local | **material de apoio**, **protótipo** ou **proposta de interface** ancorada nas **URLs oficiais** |
| ambiente réplica | **artefato do TCC** para análise comparativa com o **portal atual** |
