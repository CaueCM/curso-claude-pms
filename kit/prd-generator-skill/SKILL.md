---
name: prd-generator
description: >
  Transforma qualquer artefato de produto em um PRD completo + histórias de usuário mapeadas.
  Use este skill sempre que o usuário quiser: gerar um PRD, documentar uma iniciativa, criar histórias de usuário, converter artefatos de discovery em documentação de produto, estruturar uma iniciativa, ou escrever critérios de aceite.
  Dispare quando o usuário mencionar: PRD, product requirements, hipótese, iniciativa, feature, histórias de usuário, user stories, backlog, CSD, certezas suposições dúvidas, árvore de oportunidades, opportunity tree, entrevista com usuário, transcrição de reunião, discovery, épicos, jornada do usuário, mapeamento de histórias, story map, critérios de aceite, ou qualquer artefato de produto que precise ser documentado.
---

# PRD Generator — Discovery to Delivery

Este skill pega qualquer artefato de produto (hipótese, CSD, árvore de oportunidades, entrevista de usuário, transcrição de reunião) e produz:

1. **Extração estruturada** — interpreta o input e extrai o que importa para o PRD
2. **Story Map** — organiza as histórias em épicos → jornadas → histórias antes de escrevê-las
3. **PRD completo** exibido como markdown direto no chat
4. **Histórias de usuário** no formato INVEST com critérios Gherkin

---

## Workflow

Siga exatamente nesta ordem:

1. Identificar tipo de input
2. Extrair insights do artefato
3. Criar Story Map
4. Exibir PRD como markdown no chat
5. Escrever histórias de usuário

---

## Step 1: Identificar Tipo de Input

O usuário pode fornecer qualquer um destes artefatos. Identifique o tipo para saber o que extrair:

**CSD (Certezas, Suposições, Dúvidas)**
Matriz de discovery com três colunas. Reconheça por: presença de "certezas", "suposições/hipóteses", "dúvidas/perguntas", ou o acrônimo CSD.

**Árvore de Oportunidades** (Opportunity Solution Tree)
Estrutura hierárquica: Outcome → Oportunidades → Soluções. Reconheça por: menção a "outcome", "oportunidades", "soluções propostas", estrutura em árvore, ou referência a Teresa Torres / OST.

**Transcrição de Entrevista com Usuário**
Diálogo com um usuário real. Reconheça por: presença de falas atribuídas a entrevistado/entrevistador, perguntas e respostas, ou marcações de tempo.

**Transcrição de Reunião / Workshop**
Notas ou transcrição de reunião de produto. Reconheça por: múltiplos participantes, decisões registradas, ações ou follow-ups.

**Hipótese ou Iniciativa**
Descrição livre de uma ideia ou feature. Trate como input padrão se nenhum dos tipos acima se encaixar.

Se o usuário ainda não enviou nenhum artefato, pergunte: "Qual é o artefato de produto que você quer transformar em PRD? Pode ser uma hipótese, um CSD, uma árvore de oportunidades, uma transcrição de entrevista ou reunião."

---

## Step 2: Extrair Insights do Artefato

Antes de escrever qualquer coisa, faça uma **extração estruturada** do input. Mostre ao usuário o que você extraiu e peça confirmação antes de prosseguir — essa etapa evita que o PRD inteiro seja baseado em uma interpretação errada do artefato.

### Como Extrair por Tipo de Input

#### CSD (Certezas, Suposições, Dúvidas)

Extraia:
- **Problema central**: qual dor ou oportunidade conecta as certezas/dúvidas?
- **Certezas**: o que já sabemos que embasa a iniciativa
- **Suposições críticas**: suposições que, se falsas, invalidam a iniciativa
- **Perguntas abertas**: dúvidas que precisam ser respondidas
- **Público afetado**: quem aparece como usuário ou stakeholder
- **Direção de solução**: se alguma solução emerge implicitamente, capture

#### Árvore de Oportunidades (OST)

Extraia:
- **Outcome desejado**: o resultado de negócio ou usuário no topo da árvore
- **Oportunidade priorizada**: qual ramo está sendo desenvolvido agora e por quê
- **Soluções propostas**: as soluções sob essa oportunidade
- **Pressupostos**: o que precisa ser verdade para a oportunidade existir
- **Métricas implícitas**: como saberíamos que o outcome foi atingido

#### Transcrição de Entrevista com Usuário

Extraia:
- **Perfil do entrevistado**: cargo, contexto, situação
- **Dores principais**: os problemas mais frequentes ou emocionalmente carregados
- **Jobs to be done**: o que o usuário está tentando realizar
- **Comportamentos atuais**: como o usuário resolve o problema hoje (workarounds)
- **Citações-chave**: frases diretas que capturam a dor com força
- **Oportunidades de produto**: o que um produto poderia fazer para ajudar

#### Transcrição de Reunião / Workshop

Extraia:
- **Iniciativa acordada**: o que foi decidido construir/investigar
- **Contexto e motivação**: por que essa iniciativa, agora
- **Escopo acordado**: o que está dentro e fora do escopo
- **Riscos e dependências**: bloqueios ou preocupações levantadas
- **Métricas mencionadas**: números ou metas citados

#### Hipótese ou Iniciativa (input livre)

Use diretamente — pule a extração se o input já estiver estruturado. Confirme com o usuário o público-alvo e a métrica de sucesso se não estiverem claros.

---

## Step 3: Criar Story Map

Antes de escrever as histórias individuais, organize-as em um **story map** de três níveis.

### Estrutura do Story Map

```
ÉPICO 1: [Nome — atividade principal do usuário]
  Jornada 1.1: [Como o usuário chega / contexto de entrada]
    [Must Have] Historia: [ação do usuário]
    [Should Have] Historia: [ação do usuário]
  Jornada 1.2: [O que o usuário faz no núcleo da atividade]
    [Must Have] Historia: [ação do usuário]

ÉPICO 2: [Nome — segunda atividade principal]
  Jornada 2.1: ...
```

### Regras do Story Map
- **Épicos** = atividades de alto nível do usuário. Use verbos: "Configurar conta", "Consultar histórico", "Completar pedido"
- **Jornadas** = etapas dentro de um épico. São a sequência temporal de ações do usuário
- **Histórias** = ações individuais com valor entregável
- **Prioridade**: Must Have = MVP mínimo; Should Have = próximo passo; Could Have = backlog futuro
- Mínimo de **5 histórias** no total; ideal entre 7 e 12 para uma iniciativa típica

Apresente o story map ao usuário e confirme antes de continuar. Se ele quiser ajustar épicos ou prioridades, faça antes de escrever o PRD.

---

## Step 4: Exibir PRD como Markdown no Chat

Exiba o PRD completo diretamente na resposta, formatado em markdown. **Não gere nenhum arquivo — o objetivo é velocidade.**

Escreva em **Português Brasileiro** seguindo este template:

```markdown
## PRD: [Nome da Iniciativa]

---

### Overview
[2-3 frases resumindo a iniciativa, contexto e o que propõe resolver.]

---

### Problema / Oportunidade
[Descreva a dor ou oportunidade. Seja específico sobre quem é afetado e qual o estado atual.
Se vier de entrevista ou CSD, cite evidências concretas.]

---

### Hipótese
Acreditamos que **[solução proposta]** vai **[resultado esperado]** para **[público-alvo]**.
Saberemos que funcionou quando **[métrica de sucesso]**.

---

### Dados que Justificam a Hipótese
- [ponto 1]
- [ponto 2]
- [ponto 3]

---

### Métricas para Avaliação da Hipótese

**Métrica Primária:** [O único número que determina sucesso ou fracasso.]

**Métricas Secundárias:**
- [métrica 2]
- [métrica 3]

**Métricas de Trade-off:**
- [o que monitorar para detectar efeitos colaterais]

---

### Design do Experimento
- **Timeline:** [estimativa de sprints]
- **Estratégia:** [A/B, feature flag, rollout gradual]
- **Público:** [quem será exposto]
- **Critério de sucesso:** [confiança estatística / tamanho de amostra]

---

### Desenho da Solução
**No escopo:**
- [funcionalidade 1]
- [funcionalidade 2]

**Fora do escopo:**
- [exclusão 1]
- [exclusão 2]

---

### Story Map
[Cole aqui o story map do Step 3]

---

### User Stories / Critérios de Aceite
[Preenchido no Step 5]

---

### Eventos de Analytics
- **nome_do_evento:** quando dispara e quais propriedades captura
```

---

## Step 5: Escrever Histórias de Usuário

Escreva **todas as histórias do story map** seguindo os princípios INVEST, direto no chat após o PRD.

### Formato de Cada História

```
---
**US-XX — [Título curto na perspectiva do usuário]**
**Épico:** [Nome do épico pai] | **Prioridade:** [Must Have / Should Have / Could Have]

**Narrativa:**
Como um [tipo de usuário / persona]
Eu quero [a feature ou ação]
Para que [o valor ou benefício gerado]

**Critérios de Aceite:**

Cenário 1 — [Nome — happy path]:
Dado [contexto inicial] / Quando [ação ou gatilho] / Então [resultado esperado]

Cenário 2 — [Nome — edge case ou erro]:
Dado [contexto inicial] / Quando [ação ou gatilho] / Então [resultado esperado]
---
```

### Diretrizes de Escrita
- Escreva sempre da perspectiva do usuário, não do sistema
- Cada história deve ser completável em 1-3 dias de desenvolvimento
- Cubra o happy path E pelo menos um edge case ou cenário de erro
- Varie as personas quando múltiplos tipos de usuário estão envolvidos
- Histórias "Must Have" devem representar o MVP mínimo que entrega a hipótese

---

## Resumo Final

Após completar todos os passos, informe ao usuário:

1. Resumo do story map — épicos e quantidade de histórias por prioridade
2. Ofereça salvar o PRD como arquivo `.md` se o usuário quiser

---

## Nota de Idioma

Todo o conteúdo gerado (PRD, histórias) deve ser em **Português Brasileiro** salvo instrução explícita do usuário em contrário.
