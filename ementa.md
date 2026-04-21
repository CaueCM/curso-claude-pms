# Claude para PMs: Do Chat ao Código
### Curso hands-on — 6 horas | Product Arena

---

## Pré-requisitos para os alunos

Faça isso **antes do dia do curso**. Cada item abaixo tem um motivo — sem ele, alguma parte do dia não funciona. Separe cerca de 30 minutos para concluir tudo.

---

### 1. Conta Claude paga (obrigatório — sem isso o curso não começa)

O Claude gratuito tem limite de mensagens e não acessa o Cowork nem os plugins. O curso inteiro roda no Claude pago.

**Qual plano escolher:**

- **Pro** — funciona para o curso. É o mínimo necessário.
- **Max** — recomendado se você quiser aproveitar sem se preocupar com limites. Durante um dia intenso de uso como o curso, o Pro pode atingir o limite de mensagens. O Max tem limites muito mais altos e vai te deixar mais tranquilo para experimentar sem segurar o ritmo. [Veja a diferença entre os planos](https://claude.ai/upgrade)
- **Team** — se sua empresa já tem uma conta Team, peça ao administrador para te adicionar. Equivalente ao Pro em limites, mas com gerenciamento centralizado.

Se ainda não tem conta: acesse [claude.ai/upgrade](https://claude.ai/upgrade) para assinar.

---

### 2. Claude Desktop App (obrigatório — é a interface principal do curso)

O Cowork — que usamos durante toda a manhã — só existe no Desktop. No navegador e no celular ele não aparece.

1. Baixe o instalador em [claude.ai/download](https://claude.ai/download) (disponível para Mac e Windows)
2. Abra o arquivo baixado e siga a instalação normalmente
3. Faça login com a mesma conta Claude paga do passo anterior
4. Verifique que aparece a opção **Cowork** no menu lateral — se aparecer, está tudo certo

---

### 3. Claude Code (obrigatório — usado na parte da tarde, blocos 5 a 7)

Claude Code é uma ferramenta que você instala no terminal e que permite criar protótipos, sites e scripts em conversa com o Claude. É a ferramenta da parte da tarde.

Para instalar, você vai precisar de duas coisas na ordem abaixo:

**3a. Node.js (versão 18 ou mais recente)**

Node.js é o motor que roda o Claude Code. Você provavelmente já tem — verifique antes de instalar.

1. Abra o Terminal (Mac: `Cmd + Espaço` → digite "Terminal") ou PowerShell (Windows: tecla Windows → "PowerShell")
2. Digite `node --version` e pressione Enter
3. Se aparecer algo como `v20.x.x` ou `v22.x.x`, você já tem. Pule para o passo 3b
4. Se não aparecer nada: acesse [nodejs.org/en/download](https://nodejs.org/en/download) e baixe a versão **LTS** para o seu sistema operacional. Siga o instalador com as opções padrão.

**3b. Claude Code**

Com o Node instalado, no mesmo terminal cole o comando abaixo e pressione Enter:

```bash
npm install -g @anthropic-ai/claude-code
```

Aguarde a instalação terminar (pode demorar 1–2 minutos). Depois verifique:

```bash
claude --version
```

Se aparecer o número da versão, está instalado. Documentação completa em [docs.anthropic.com/pt/docs/claude-code](https://docs.anthropic.com/pt/docs/claude-code/overview) caso precise de ajuda.

---

### 4. Git (obrigatório — o Claude Code depende dele)

Git é um sistema de controle de versão. O Claude Code usa ele por baixo dos panos para gerenciar arquivos e mudanças — sem ele, o Code pode dar erro na inicialização.

- **Mac:** Git já vem instalado por padrão na maioria dos casos. Verifique com `git --version` no Terminal. Se não tiver, o próprio Mac vai oferecer instalar automaticamente — aceite.
- **Windows:** Verifique com `git --version` no PowerShell. Se não tiver, baixe em [git-scm.com/download/win](https://git-scm.com/download/win) e instale com as opções padrão (não precisa mexer em nada).

---

### 5. Kit ArenaCash baixado e descompactado (obrigatório — é o material do curso)

Você receberá o kit por email ou link antes do curso. Ele contém todos os documentos da empresa fictícia que vamos usar no dia.

- Baixe o arquivo `.zip`
- Descompacte em algum lugar fácil de achar (ex: Desktop ou Documentos)
- Renomeie a pasta para `ArenaCash-PM`
- Verifique que consegue ver os arquivos `.md`, `.csv`, `.xlsx` e `.pptx` dentro dela

---

### 6. Conta Google/Gmail (recomendado — usado no Bloco 2)

No Bloco 2 vamos conectar o Gmail ao Cowork para extrair o seu tom de voz de escrita a partir dos seus e-mails. Funciona com qualquer conta Google.

- Se você tem Gmail, não precisa fazer nada — só lembrar o login
- Se preferir não usar sua conta pessoal, crie uma conta Google separada só para o curso em [accounts.google.com](https://accounts.google.com)
- Se não quiser usar Gmail de jeito nenhum, tudo bem — o instrutor vai mostrar um caminho alternativo para criar o tom de voz manualmente

---

### Resumo rápido de verificação

Antes do curso, rode esses comandos no terminal e veja se todos respondem sem erro:

```bash
node --version     # deve mostrar v18 ou mais recente
claude --version   # deve mostrar a versão do Claude Code
git --version      # deve mostrar a versão do Git
```

Se algum der erro, consulte o passo correspondente acima ou entre em contato antes do curso.

---

## Bem-vindo à ArenaCash

**Você foi contratado como PM de produto da ArenaCash.**

A ArenaCash é uma empresa de tecnologia financeira criada pela Product Arena. Ela não existe de verdade — mas os problemas que você vai resolver aqui são os mesmos que surgem toda semana no trabalho real de um PM.

Antes do curso, você recebeu o **ArenaCash Kit**: um pacote de documentos e dados que simulam o começo de um ciclo de produto. Ele contém o memo estratégico do CEO com as metas do quarter, transcrições das conversas com o CFO, a CMO e o CTO, dados de produto e financeiros do quarter anterior, tickets de atendimento, o design system da marca e o template oficial de apresentação.

Esses materiais são os mesmos que um PM receberia no primeiro dia numa empresa real. A diferença é que aqui você não vai só ler e analisar — você vai usar o Claude para trabalhar com eles como PM de verdade: entender o negócio, priorizar iniciativas, criar seus documentos de trabalho, apresentar para a liderança, prototipar, codar e publicar.

**A jornada completa do dia:**

Você começa configurando o Claude Code e montando seu ambiente de PM: tom de voz extraído da sua própria escrita, instruções personalizadas com o contexto da ArenaCash e uma skill de apresentação que segue o padrão da empresa. Com o ambiente pronto, você analisa os dados do quarter, prioriza uma iniciativa e valida a decisão com os C-levels via thinking partner. Essa iniciativa vira PRD, depois apresentação para a diretoria, depois protótipo visual com design system aplicado, depois um mapeamento de eventos de analytics — e termina o dia com o app publicado online com uma URL real. Do memo estratégico ao produto no ar, em um dia, dentro do Claude.

> Todo o curso acontece dentro do Claude. Sem slides. Sem sair da plataforma. Os alunos navegam pelos arquivos gerados ao longo do dia como material de referência.

---

## Kit de materiais da ArenaCash (enviado antes do curso)

Os alunos recebem e baixam antes do curso:

```
ArenaCash-Kit/
├── memo-estrategico-q2.md          ← memo do CEO com metas e contexto do quarter
├── organograma-arenacash.md       ← estrutura da empresa, quem é quem
├── dados-quarter-q1.csv            ← métricas de produto (funil, ativação, churn, NPS)
├── financeiro-q1.xlsx              ← receita, custos, runway, CAC, LTV
├── atendimento-q1.csv              ← tickets de suporte categorizados
├── transcricao-cfo.md              ← conversa com o CFO sobre prioridades
├── transcricao-cmo.md              ← conversa com a CMO sobre growth
├── transcricao-cto.md              ← conversa com o CTO sobre capacidade técnica
├── template-apresentacao.pptx      ← template oficial de PPT da ArenaCash
├── design-system-arenacash.md     ← cores, fontes, componentes visuais da marca
└── guia-de-eventos-arenacash.pdf  ← convenções de naming e catálogo de eventos de analytics
```

---

## Visão geral do dia

| Bloco | Horário | Tema | Formato |
|-------|---------|------|---------|
| 1 | 09:00–09:45 | Fundamentos: Chat vs. Cowork vs. Code | Demo ao vivo + exercício |
| — | 09:45–09:50 | Como pensar em tokens | Conversa rápida de mindset |
| 2 | 09:50–10:40 | Setup do PM na ArenaCash | Exposição + exercícios |
| — | 10:40–10:55 | Coffee break | |
| 3 | 10:55–11:40 | MCP, dados e priorização de iniciativas | Demo + exercícios |
| 4 | 11:40–12:30 | Skills, apresentação e validação | Exposição + exercícios |
| — | 12:30–13:45 | Almoço | |
| 5 | 13:45–14:30 | Do Cowork ao Code: transição e setup | Exposição + exercício |
| 6 | 14:30–15:30 | Prototipagem visual e mapeamento de eventos | Exercícios hands-on |
| — | 15:30–15:45 | Coffee break | |
| 7 | 15:45–16:45 | Codando a feature e lançando o app | Exercício final |
| 8 | 16:45–17:00 | Encerramento | Discussão aberta |

---

## Bloco 1 — Fundamentos: Chat vs. Cowork vs. Code (09:00–09:45)
### "Você não está usando o Claude. Está conversando com ele. Tem uma diferença enorme."

**Objetivo:** Nivelar o grupo e construir o modelo mental correto. Todo mundo sai sabendo quando usar Chat, quando usar Cowork e quando usar Code.

### Parte expositiva — O mapa do território (15 min)

O instrutor abre o Claude Desktop e mostra as três interfaces lado a lado:

**Claude Chat** — você pergunta, ele responde. Bom para brainstorm, análise rápida, reescrita de texto. É uma conversa. Não tem memória entre sessões, não mexe nos seus arquivos, não conecta com nada.

**Claude Cowork** — você delega, ele executa. Cowork lê e cria arquivos na sua máquina, encadeia tarefas sozinho, enxerga imagens, conecta com Gmail/Slack/Drive, agenda tarefas recorrentes. Não é chat — é um operador que trabalha na sua pasta.

**Claude Code** — você descreve, ele constrói. Terminal que entende português. Cria protótipos, ferramentas, scripts, sites. Para PMs que querem prototipar e codar sem depender de engenharia.

Analogia para fixar:
- Chat = ligar para um colega e pedir opinião
- Cowork = delegar uma tarefa para um assistente com acesso à sua mesa
- Code = sentar com um dev e ir construindo junto

**Onde cada interface funciona — Desktop, Web e Mobile**

| Interface | Desktop (Mac/Win) | Web (claude.ai) | Mobile (iOS/Android) |
|-----------|-------------------|-----------------|----------------------|
| Chat | ✅ completo | ✅ completo | ✅ completo |
| Cowork | ✅ completo | ❌ não disponível | ❌ não disponível |
| Code | ✅ via terminal | ❌ não aplicável | ❌ não aplicável |

**O que o mobile NÃO faz:** não acessa arquivos, não roda skills/plugins/MCPs, não tem memória de Projects, não executa Code. **Quando é útil:** brainstorm rápido em deslocamento, reescrita de mensagens curtas, tirar dúvida pontual. **Regra prática:** trabalho real = Desktop. Mobile = satélite.

### Exercício 1 — Setup e primeiro contato com a ArenaCash (15 min)

O objetivo deste exercício é duplo: colocar a pasta funcionando dentro do Cowork e fazer a primeira leitura da ArenaCash com o Claude. Ao final, cada aluno vai ter o ambiente pronto e um resumo executivo do quarter na tela.

**Passo 1 — Criar a pasta de trabalho (2 min)**

- **Mac:** Abra o Finder → vá para Documentos → clique com o botão direito → Nova Pasta → nomeie `ArenaCash-PM`
- **Windows:** Abra o Explorador de Arquivos → vá para Documentos → clique com o botão direito → Nova Pasta → nomeie `ArenaCash-PM`

Agora copie todos os arquivos do kit recebido antes do curso para dentro desta pasta. Ela deve ficar assim:

```
ArenaCash-PM/
├── memo-estrategico-q2.md
├── organograma-arenacash.md
├── dados-quarter-q1.csv
├── financeiro-q1.xlsx
├── atendimento-q1.csv
├── transcricao-cfo.md
├── transcricao-cmo.md
├── transcricao-cto.md
├── template-apresentacao.pptx
├── design-system-arenacash.md
└── guia-de-eventos-arenacash.pdf
```

**Passo 2 — Conectar a pasta ao Cowork (3 min)**

1. Abra o **Claude Desktop App**
2. No menu lateral esquerdo, clique em **Cowork**
3. Clique em **"+ New Project"** (ou "Novo Projeto")
4. Dê o nome: `ArenaCash — Meu Setup de PM`
5. Clique em **"Connect Folder"** (ou "Conectar Pasta")
6. Navegue até a pasta `ArenaCash-PM` que você acabou de criar e selecione-a
7. Confirme — o Cowork vai listar os arquivos da pasta no painel lateral

> O que acabou de acontecer: o Claude agora "enxerga" todos os arquivos da pasta. Ele pode ler, criar e editar arquivos ali dentro sem você precisar copiar e colar nada.

**Passo 3 — Exploração inicial (5 min)**

Com a pasta conectada, digite no chat do Cowork:

> *"Me diz o que tem nessa pasta e o que você consegue fazer com ela."*

Observe: o Claude lista os arquivos, identifica o tipo de conteúdo de cada um e já sugere o que pode fazer — resumir, analisar, cruzar dados. Ele ainda não leu nada a fundo, só mapeou o terreno.

**Passo 4 — Primeira leitura da ArenaCash (5 min)**

Agora mande a primeira tarefa real:

> *"Lê o memo-estrategico-q2.md e o organograma-arenacash.md e me faz um resumo executivo da situação da ArenaCash neste quarter: contexto do negócio, metas do Q2 e quem são os principais líderes."*

Observe: o Claude leu dois arquivos separados, cruzou as informações e entregou um resumo coerente. Esse resumo vai ser o ponto de partida de tudo que vem depois no dia.

> **O que fixar aqui:** você não colou nenhum texto no chat. Não resumiu o documento antes de mandar. Só apontou os arquivos e delegou a tarefa. Isso é Cowork funcionando — e é assim que vamos trabalhar o dia inteiro.

---

## Sessão — Como pensar em tokens (5 min)
### "Token é como minuto de reunião: o que se mede, se gerencia."

No Exercício 1, você mandou um prompt claro com arquivos referenciados e recebeu um resumo executivo de primeira. Isso não é só boa prática — é economia real. Quatro princípios para carregar o dia inteiro:

**1. Prompt bom de primeira = economia.** Um prompt vago vira 4–5 idas e vindas. Cada turno carrega toda a conversa acumulada. Se você está mandando o segundo "na verdade quero...", já gastou mais do que um prompt completo teria custado.

**2. Contexto no lugar certo.** Instruções no Projeto (escreve uma vez, vale pra toda conversa) > repetir contexto a cada mensagem. Referenciar arquivos ("lê o arquivo X") > colar conteúdo no chat. Output salvo em arquivo > "me mostra aqui na tela".

**3. Conversas curtas.** Quando terminar uma tarefa, abra uma nova conversa. Conversas longas ficam pesadas e perdem foco. E edite ao invés de regerar — se 90% do output está bom, ajuste o parágrafo ruim, não peça tudo de novo.

**4. Modelo certo pra tarefa.** Opus = caro, para problemas complexos que exigem raciocínio profundo. Sonnet = dia a dia. Haiku = tarefas leves e rápidas. Skills entregam resultado bom de primeira, evitando o ciclo de iteração que consome tokens.

---

## Bloco 2 — Setup do PM na ArenaCash (09:50–10:40)
### "O segredo não é o prompt. É o contexto que você dá antes do prompt."

**Objetivo:** Montar o ambiente completo de trabalho do PM na ArenaCash: projeto com memória, instruções personalizadas com o organograma como referência, tom de voz calibrado e integração com Gmail.

### Parte expositiva — A arquitetura do Cowork (10 min)

**1. O que é um Projeto**

No Cowork, um Projeto é o seu espaço de trabalho permanente. Pense nele como uma sala dedicada para um contexto específico: ele tem uma pasta conectada no seu computador, instruções que você escreve uma vez e valem pra sempre, e uma memória que persiste entre conversas.

A diferença prática em relação a uma conversa avulsa: quando você abre uma nova task dentro de um projeto, o Claude já sabe quem você é, em que empresa trabalha e quais são as regras de como você gosta de trabalhar. Você não precisa reexplicar isso toda vez.

Regra de ouro: **a memória é isolada por projeto**. O que o Claude aprende no projeto da ArenaCash não vaza para outros projetos. Isso é bom — cada contexto fica separado.

**2. As duas camadas de memória**

Todo projeto tem duas camadas que funcionam juntas:

*Instruções do Projeto — você escreve, o Claude obedece:* são as regras fixas que o Claude lê no início de toda conversa. É aqui que você coloca quem você é, como trabalha, quais são as convenções do time, o que nunca pode acontecer. Enquanto as instruções estiverem lá, o Claude vai seguir. Exemplo: "Nunca invente dados. Sempre salve outputs como arquivos na pasta."

*Auto Memory — o Claude escreve, você pode editar:* conforme você trabalha, o Claude vai salvando notas sobre você — suas preferências, correções que você fez, padrões que observou. Isso fica num arquivo `memory.md` dentro do projeto. Você pode abrir, editar e apagar qualquer coisa que ele anotou.

> **Demo ao vivo:** instrutor abre o `memory.md` de um projeto real e mostra o que o Claude anotou sozinho ao longo de algumas sessões de uso.

**3. O ecossistema em volta do Projeto**

Um Projeto não existe sozinho — ele organiza tudo mais:

- **Tarefa (Task)** = uma conversa dentro do projeto. Cada tarefa começa com o contexto do projeto carregado. Pode ser avulsa (você inicia na hora) ou agendada (roda automaticamente em horários definidos)
- **Skill** = um pacote de instruções que ensina o Claude a produzir um tipo específico de output com qualidade consistente. Quem instala é você; quem usa é o Claude quando precisa
- **Agent/Sub-agent** = quando uma tarefa é grande demais, o Claude quebra em partes e delega para si mesmo em paralelo, como se fossem assistentes trabalhando ao mesmo tempo
- **Connector** = a ponte para ferramentas externas (Gmail, Slack, Drive, Jira...). O Claude acessa, busca e age nessas ferramentas sem você sair do Cowork
- **Plugin** = um bundle completo com skills + connectors + sub-agents empacotados — você instala de uma vez e ganha um conjunto de capacidades prontas

```
Projeto
├── Instruções (.md)   ← você escreve, Claude lê toda sessão
├── Memória (.md)      ← Claude escreve, persiste entre sessões
├── Tarefas
│   ├── Avulsas (cada conversa que você inicia)
│   └── Agendadas (rodam automaticamente)
├── Skills instaladas
│   ├── Nativas (pptx, xlsx, docx, pdf)
│   ├── Customizadas (as suas, que você vai criar hoje)
│   └── Da comunidade (instaladas do repositório)
├── Connectors (Gmail, Slack, Drive, Jira...)
└── Plugins (bundles de skills + connectors)
```

### Exercício 3 — Criando o Projeto "PM na ArenaCash" (15 min)

**Entregável:** um arquivo `instrucoes-projeto.md` salvo na pasta `ArenaCash-PM`, com as suas instruções personalizadas de PM. Esse documento vai dizer ao Claude — em toda conversa daqui pra frente — quem você é, como trabalha e quais são as regras do jogo. É o seu briefing permanente.

---

**Passo 1 — Criar o Projeto no Cowork (3 min)**

1. No Claude Desktop, clique em **Cowork** no menu lateral
2. Clique no botão **"+ New Project"** no topo do painel esquerdo
3. No campo de nome, escreva: `ArenaCash — Meu Setup de PM`
4. Clique em **"Connect Folder"** e selecione a pasta `ArenaCash-PM` que você criou no Exercício 1
5. Confirme — o projeto aparece na lista e a pasta está vinculada

> Você acabou de criar o workspace do dia. Todas as tarefas que você abrir a partir de agora dentro deste projeto vão herdar a pasta e, em breve, as instruções que você vai escrever.

---

**Passo 2 — Escrever as instruções do projeto (12 min)**

Este é o passo mais importante do bloco. As instruções do projeto são o que transformam o Claude de um assistente genérico em um colaborador que conhece você e a ArenaCash.

No chat do projeto, mande o seguinte prompt:

> *"Me ajuda a criar o arquivo instrucoes-projeto.md. Ele vai conter minhas instruções permanentes como PM. Me faz as perguntas necessárias para preencher as seções abaixo, uma de cada vez, e depois gera o arquivo completo na pasta."*

O Claude vai te guiar. As seções que o arquivo deve ter:

```markdown
## Quem sou eu
- [Seu nome], PM de produto na ArenaCash
- Meu squad: [descrever área de atuação]
- Ferramentas que uso no dia a dia: [ex: Slack, Google Drive, Linear, Jira]

## Contexto da empresa
- Leia o arquivo organograma-arenacash.md para entender a estrutura da empresa e quem é quem
- Leia o memo-estrategico-q2.md para entender as metas e prioridades do quarter
- Nosso foco no Q2: [preencher com o que você leu no memo no Exercício 1]

## Como eu trabalho
- Tom de comunicação: [formal? direto? casual? dê exemplos]
- Frameworks que uso: [ex: RICE, OKRs, Jobs to Be Done, Story Mapping]
- Prefiro outputs: [ex: sempre em arquivo, nunca só no chat; listas curtas; textos diretos]

## Regras que nunca podem ser quebradas
- Nunca invente dados — se não tiver a informação, pergunte antes de responder
- Sempre salve os outputs como arquivos na pasta do projeto
- Quando mencionar pessoas da empresa, consulte o organograma-arenacash.md
- Quando criar documentos, siga o padrão visual do design-system-arenacash.md
```

Quando o Claude gerar o arquivo, abra-o no Finder/Explorador e verifique que está em `ArenaCash-PM/instrucoes-projeto.md`. Se precisar ajustar algum trecho, edite direto no arquivo ou peça ao Claude para corrigir.

> **Por que isso importa:** a partir deste momento, toda nova conversa dentro deste projeto começa com o Claude já sabendo quem você é, em que empresa trabalha, como prefere se comunicar e quais são as regras. Você não vai repetir esse contexto mais uma vez no dia.

**Arquivo gerado:** `instrucoes-projeto.md`

### Exercício 4 — Tom de Voz (20 min)

**Por que isso importa:** ao longo do dia, você vai pedir ao Claude para escrever textos no seu lugar — emails, mensagens para o time, trechos de apresentação. Se o Claude não sabe como você escreve, o resultado vai soar genérico ou fora do seu estilo. O `tom-de-voz.md` resolve isso: você cria uma vez, referencia nas instruções do projeto, e todo texto que o Claude gerar vai soar como você.

**Entregável:** arquivo `tom-de-voz.md` salvo na pasta `ArenaCash-PM`, com o seu perfil de comunicação documentado. Ao final do exercício, você vai usar esse arquivo para gerar uma mensagem real para o seu tech lead — e comparar se ela soa como você.

---

**Passo 1 — Criar o tom de voz**

Escolha o caminho de acordo com o que você preparou nos pré-requisitos:

---

*Caminho A — Extrair do Gmail (recomendado, 10 min)*

Primeiro, conecte sua conta Google ao Cowork:

1. No Claude Desktop, clique em **Settings** (ícone de engrenagem) no menu lateral
2. Vá em **Connectors**
3. Localize **Gmail** na lista e clique em **Connect**
4. Uma janela do Google vai abrir — faça login e autorize o acesso
5. Volte ao Cowork. O Gmail agora aparece como connector ativo

Para verificar que funcionou, mande no chat:

> *"Busca meus últimos 3 emails enviados e me mostra o assunto e as primeiras linhas de cada um."*

O Claude vai retornar os emails direto da sua caixa. Agora, para extrair o tom de voz:

> *"Acessa meus últimos 20 emails enviados. Analisa como eu escrevo e identifica padrões em: saudação e fechamento, nível de formalidade, tamanho típico dos parágrafos, uso de listas ou texto corrido, expressões que aparecem com frequência e tom geral (direto, empático, técnico, informal...). Com base nisso, gera um arquivo tom-de-voz.md na pasta do projeto documentando meu perfil de comunicação."*

---

*Caminho B — Construir manualmente (10 min)*

Use este caminho se preferiu não conectar o Gmail. Mande o seguinte prompt:

> *"Vou te ajudar a criar meu arquivo tom-de-voz.md. Me faz perguntas sobre como eu me comunico — uma pergunta por vez, espera minha resposta antes de continuar. Quando tiver informação suficiente, gera o arquivo tom-de-voz.md na pasta do projeto com meu perfil documentado."*

O Claude vai conduzir a conversa: vai perguntar sobre saudações, formalidade, tamanho de textos, expressões que você usa, o que evita, como prefere dar feedback, etc. Responda naturalmente — é uma conversa, não um formulário. Ao final, ele gera o arquivo com tudo organizado.

---

**Passo 2 — Registrar o tom de voz nas instruções do projeto (3 min)**

Abra o arquivo `instrucoes-projeto.md` que você criou no Exercício 3 e adicione a seguinte linha na seção "Como eu trabalho":

```
- Sempre que for escrever qualquer texto no meu nome — email, mensagem, apresentação — leia o arquivo tom-de-voz.md e siga esse estilo.
```

Ou peça ao Claude:

> *"Atualiza o instrucoes-projeto.md para incluir uma regra dizendo que sempre que for escrever texto no meu nome, deve ler o tom-de-voz.md."*

---

**Passo 3 — Teste: sua primeira mensagem real (7 min)**

Agora vamos verificar se o tom de voz funciona. Você é PM do Squad de Onboarding & Ativação. Seu tech lead é o **Ricardo Sato**. Há um bug no sistema de ativação que está atrasando há mais tempo do que você considera aceitável, e você precisa comunicar isso com clareza — sem soar agressivo, mas deixando claro o impacto.

Mande o seguinte prompt:

> *"Lê o organograma-arenacash.md para entender quem é o Ricardo Sato e qual é o contexto do Squad de Onboarding & Ativação. Lê também o tom-de-voz.md. Escreve uma mensagem de Slack para o Ricardo dizendo que estou preocupado com o tempo que o bug no sistema de ativação está levando para ser resolvido, que isso está impactando a ativação de novos usuários — a meta principal do nosso squad no Q2 — e que preciso entender o status e um prazo realista para fechamento. Use meu tom de voz."*

Leia a mensagem gerada. Ela soa como você escreveria? Se não, ajuste o `tom-de-voz.md` e peça para regerar. Esse ciclo de calibrar → testar → ajustar é exatamente como o arquivo deve evoluir com o tempo.

**Arquivos gerados:** `tom-de-voz.md` (atualização em `instrucoes-projeto.md`)

---

## ☕ Coffee break (10:40–10:55)

---

## Bloco 3 — MCP e Conexões (10:55–11:40)
### "O Claude sozinho é bom. Plugado nas suas ferramentas, é transformador."

**Objetivo:** Entender o que é MCP e por que ele importa, conectar o Google Drive ao Cowork, explorar os arquivos da ArenaCash de dentro do Drive, cruzar esses dados com informações do cenário atual de fintechs buscadas na internet, e gerar um documento Google Doc automaticamente com a análise produzida.

---

### Parte expositiva — O que é MCP e como funciona (8 min)

Nos blocos anteriores, você conectou o Gmail e o Claude buscou emails direto da sua caixa. Isso não foi mágica — foi MCP funcionando. Agora vamos entender o mecanismo.

**MCP = Model Context Protocol.** O Claude, por padrão, é um cérebro isolado: ele sabe muita coisa, mas não enxerga o que está fora da conversa. O MCP é o protocolo que abre canais entre o Claude e o mundo externo — suas ferramentas, seus dados, seus sistemas.

Como funciona na prática:

```
Você pede: "Busca no meu Drive os arquivos da ArenaCash"
    ↓
Claude entende o que você quer
    ↓
Claude chama o Connector do Google Drive via MCP
    ↓
Connector autentica com sua conta Google (OAuth — você autoriza uma vez)
    ↓
Connector acessa o Drive, localiza os arquivos e devolve para o Claude
    ↓
Claude lê, analisa e entrega o resultado para você
```

O Claude nunca acessa suas ferramentas diretamente — ele sempre passa pelo Connector, que é um intermediário seguro. Você controla quais permissões cada Connector tem, e ações destrutivas (deletar, enviar mensagens, modificar permissões) sempre pedem confirmação antes de executar.

**O ecossistema de Connectors hoje:**
- Mais de 50 connectors disponíveis nativamente (Google Drive, Gmail, Slack, Notion, Jira, Linear, Figma, Salesforce, HubSpot...)
- Qualquer empresa pode criar o próprio connector — o protocolo é aberto
- Você já usou MCP quando conectou o Gmail no Bloco 2. O Drive é o segundo connector do dia

**O que connectors fazem:** ler e listar dados, criar rascunhos e documentos, buscar e filtrar conteúdo.
**O que NÃO fazem sem confirmação sua:** enviar emails, postar mensagens, deletar arquivos, modificar permissões.

---

### Exercício 5 — Conectar o Google Drive e explorar os arquivos (10 min)

**Entregável:** Google Drive conectado ao Cowork e um resumo dos arquivos da ArenaCash lido diretamente de lá — mostrando que o Claude enxerga o mesmo conteúdo que existe no seu computador, mas acessado via nuvem.

---

**Passo 1 — Conectar o Google Drive (3 min)**

1. No Claude Desktop, clique em **Settings** no menu lateral
2. Vá em **Connectors**
3. Localize **Google Drive** e clique em **Connect**
4. Uma janela do Google vai abrir — faça login com a mesma conta onde estão os arquivos da ArenaCash e autorize o acesso
5. O Google Drive aparece agora como connector ativo no painel

---

**Passo 2 — Verificar que o Claude enxerga os arquivos (3 min)**

Antes de avançar, vamos confirmar que a conexão funcionou e que o Claude acessa os mesmos arquivos:

> *"Acessa meu Google Drive e lista os arquivos da pasta ArenaCash-PM. Me diz o nome de cada arquivo e o tipo de conteúdo que ele tem."*

Observe: o Claude navegou pelo Drive, encontrou a pasta e listou os arquivos — os mesmos que estão no seu computador. Isso acontece porque você fez upload da pasta para o Drive antes do curso, ou porque seu computador sincroniza automaticamente via Google Drive for Desktop. Dois caminhos, mesmo resultado.

---

**Passo 3 — Primeira leitura via Drive (4 min)**

Agora peça ao Claude para ler os documentos diretamente do Drive e gerar um resumo executivo:

> *"Lê o memo-estrategico-q2.md e o organograma-arenacash.md que estão no meu Google Drive, na pasta ArenaCash-PM. Com base nesses dois arquivos, me faz um resumo de no máximo meia página com: qual é o momento da ArenaCash, quais são as prioridades do Q2 e quem são os líderes-chave que preciso conhecer."*

> **O que fixar:** você não abriu o Drive, não copiou nenhum texto, não fez download de nada. O Claude leu, processou e entregou — a partir de uma conversa em linguagem natural. Esse é o modelo de trabalho com connectors.

---

### Exercício 6 — Análise cruzada: dados da ArenaCash + cenário de fintechs (18 min)

**Entregável:** arquivo `03-conexoes/analise-estrategica-q2.md` com uma análise que cruza os dados internos da ArenaCash com o cenário competitivo atual de fintechs, incluindo 5 iniciativas priorizadas para o Q2.

---

**Passo 1 — Ler os dados internos do Drive (5 min)**

> *"Acessa meu Google Drive, pasta ArenaCash-PM. Lê os arquivos dados-quarter-q1.csv, financeiro-q1.xlsx e atendimento-q1.csv. Cruza as informações e me diz:*
> *1. Estado geral da ArenaCash no Q1 — o que foi bem, o que foi mal e o que mais preocupa*
> *2. Os 3 maiores problemas que precisam de atenção no Q2*
> *3. As maiores oportunidades de impacto*
> *Compara com as metas do memo-estrategico-q2.md."*

Observe: o Claude leu quatro arquivos de fontes diferentes (CSV, Excel, Markdown) via Drive e cruzou os dados. Guarde este diagnóstico — o próximo passo vai contextualizá-lo no mercado.

---

**Passo 2 — Pesquisar o cenário de fintechs na internet (8 min)**

Agora o Claude vai buscar contexto externo para enriquecer a análise:

> *"Pesquisa na internet o cenário atual de fintechs de investimento no Brasil: principais tendências de 2025 e 2026, comportamento dos usuários, o que está crescendo, o que está perdendo força e quais são os principais desafios de ativação e retenção nesse segmento. Usa fontes confiáveis — relatórios de mercado, cobertura de imprensa especializada, dados públicos."*

Observe: o Claude saiu do Drive, foi para a internet, buscou e sumarizou fontes externas. Isso é o MCP em dois modos diferentes — dados privados (Drive) e dados públicos (web) — na mesma sessão.

---

**Passo 3 — Cruzar e gerar a análise completa (5 min)**

> *"Agora cruza os dois lados: o que você encontrou nos dados internos da ArenaCash com o que você pesquisou sobre o mercado de fintechs. Com base nisso, propõe 5 iniciativas para o Q2 que enderecem os problemas identificados e estejam alinhadas com as tendências de mercado. Para cada iniciativa, inclui: descrição em uma linha, por que faz sentido agora (dado interno + contexto de mercado), e estimativa de Reach, Impact, Confidence e Effort (framework RICE). Ranqueie da mais impactante para a menos e salva tudo no arquivo 03-conexoes/analise-estrategica-q2.md."*

**Arquivo gerado:** `03-conexoes/analise-estrategica-q2.md`

---

### Exercício 7 — Gerar um Google Doc automaticamente (10 min)

**Entregável:** um Google Doc criado diretamente no seu Drive com a análise estratégica — sem copiar e colar nada, gerado pelo Claude via connector.

---

**Passo 1 — Criar o documento no Drive (7 min)**

> *"Pega o conteúdo do arquivo 03-conexoes/analise-estrategica-q2.md e cria um Google Doc no meu Drive com esse conteúdo. Nomeie o documento 'Análise Estratégica ArenaCash — Q2'. Organiza com títulos e subtítulos claros, e inclui uma capa com o nome do documento, a data de hoje e meu nome."*

Observe: o Claude pegou um arquivo local, acessou o Drive via connector e criou um documento Google nativo — formatado, nomeado e pronto para compartilhar com outras pessoas da empresa.

---

**Passo 2 — Verificar e compartilhar (3 min)**

Abra o Google Drive no navegador e confirme que o documento aparece lá. Clique no Doc e veja a formatação.

Para testar o ciclo completo, peça:

> *"Compartilha o documento 'Análise Estratégica ArenaCash — Q2' com [email de um colega] como visualizador."*

Observe: o Claude executou uma ação no Google Drive — não só leu, mas agiu. Criou um documento e o compartilhou. Esse é o nível de automação que os connectors permitem.

> **O que fixar neste bloco:** você conectou duas fontes externas (Drive e internet), cruzou dados privados com contexto público, e o resultado saiu como um documento colaborativo no Google Drive — sem sair do Cowork. O próximo bloco vai usar essa análise para construir skills e validar a iniciativa com os C-levels.

---

### Exercício 8 — Tarefa agendada: briefing diário de mercado (9 min)

Tudo o que você fez agora — pesquisar notícias, cruzar com contexto, gerar um documento no Drive — pode rodar sozinho, todo dia, sem você precisar pedir. Vamos criar essa automação.

**Entregável:** uma tarefa agendada ativa no Cowork que, toda manhã às 9h, busca as principais notícias de economia e mercado financeiro do dia anterior, monta um slide de uma página em PowerPoint com o resumo e salva no seu Google Drive.

---

**Passo 1 — Criar a tarefa agendada (5 min)**

Mande o seguinte prompt:

> *"Cria uma tarefa agendada chamada 'Briefing diário de mercado'. Todo dia às 9h da manhã, ela deve:*
> *1. Pesquisar na internet as principais notícias de economia e mercado financeiro do dia anterior — foco em fintechs, juros, regulação financeira e comportamento do consumidor*
> *2. Selecionar as 3 a 5 notícias mais relevantes para um PM de fintech*
> *3. Criar um arquivo PowerPoint de uma única página com: título 'Briefing de Mercado — [data]', os destaques em bullets curtos e uma linha de 'impacto para a ArenaCash' ao final*
> *4. Salvar o arquivo no meu Google Drive com o nome briefing-mercado-[data].pptx"*

Observe: o Cowork cria a tarefa, exibe a frequência configurada (diária, 9h) e o fluxo de execução. Você pode ver em **Tasks → Scheduled** no menu lateral.

---

**Passo 2 — Testar agora (3 min)**

Não espere até amanhã — clique em **"Run Now"** na tarefa recém-criada para executá-la imediatamente.

Após a execução, abra o Google Drive e confirme que o arquivo `briefing-mercado-[data].pptx` apareceu. Abra o PowerPoint e avalie: as notícias fazem sentido? O formato está como você esperava? Se quiser ajustar — mudar o foco das notícias, o layout do slide, o critério de seleção — edite o prompt da tarefa e rode novamente.

---

**Boas práticas rápidas (1 min)**

- Sempre teste com "Run Now" antes de confiar no agendamento automático
- Tarefas que enviam mensagens ou emails pedem confirmação sua antes de executar
- Revise as tarefas agendadas mensalmente — tarefa abandonada consome tokens sem entregar valor

> **O que fixar:** você acabou de montar um assistente que trabalha enquanto você dorme. Toda manhã, antes do café, o briefing de mercado já está no Drive — sem nenhuma ação sua. Isso é automação real com MCP + connectors funcionando juntos.

---

## Bloco 4 — Skills, Validação e Apresentação (11:40–12:30)
### "Skill é o que separa o Claude genérico do Claude que trabalha do jeito que você precisa."

**Objetivo:** Entender o que são skills e por que elas existem, criar o Thinking Partner para validar a iniciativa prioritária gerada no Bloco 3, e construir a skill de apresentação para chegar ao almoço com um PPT pronto para apresentar à diretoria.

---

### Parte expositiva — O que são skills e por que um PM precisa delas (10 min)

O Claude, sem instrução específica, entrega resultado genérico. Com uma skill bem escrita, ele entrega resultado profissional — no padrão certo, na estrutura certa, com o nível de qualidade que você precisaria pedir dezenas de vezes para chegar manualmente.

**Para um PM, isso importa especialmente em dois momentos:**

*Validação de iniciativas.* O dia a dia de um PM é cheio de ideias que precisam ser testadas contra a realidade da empresa antes de avançar. Quanto mais rápido você consegue simular esse teste — com os stakeholders certos, na perspectiva certa — menos tempo você gasta defendendo a ideia errada. Uma skill de validação faz isso em minutos.

*Comunicação recorrente.* PPTs para diretoria, relatórios de quarter, briefings de sprint — são documentos que seguem sempre o mesmo padrão. Uma skill aprende esse padrão uma vez e aplica em todo output, sem que você precise re-explicar o template, o tom de voz ou o nível de detalhe.

**Os três tipos de skill:**

*Skills nativas* — já vêm com o Claude e rodam automaticamente quando você pede certos tipos de output: pptx para apresentações, xlsx para planilhas, docx para documentos Word, pdf para PDFs. Você já usou sem perceber.

*Skills da comunidade* — criadas e compartilhadas por outros usuários. Repositório de referência: `github.com/BehiSecc/awesome-claude-skills`. Bom ponto de partida antes de criar do zero.

*Skills customizadas* — as suas. Criadas quando o padrão genérico não serve: precisa seguir o template da empresa, capturar um processo específico, ou produzir um output que só faz sentido no seu contexto.

**Quando criar vs. quando instalar:** se já existe uma skill boa para o que você precisa, instale e adapte. Crie do zero quando: você repete a mesma tarefa mais de três vezes, o output precisa seguir um padrão da empresa, ou a qualidade genérica não é suficiente para o público.

**Como uma skill funciona por dentro:** é um arquivo markdown (`.md`) salvo em `.claude/skills/nome-da-skill/SKILL.md`. Contém: quando a skill deve ser acionada (trigger), o que ela deve fazer passo a passo, qual é o output esperado e quais são as regras que nunca podem ser quebradas. O Claude lê esse arquivo e segue as instruções como se fossem um briefing permanente.

> **Demo ao vivo:** instrutor mostra o mesmo pedido feito sem skill e com skill — a diferença de qualidade, estrutura e consistência entre os dois outputs. "Você não vai querer voltar para o genérico."

---

### Exercício 9 — Criando e usando o Thinking Partner (20 min)

O Bloco 3 gerou 5 iniciativas ranqueadas por RICE e contextualizadas no mercado. Antes de apostar o quarter em uma delas, você precisa testá-las contra as prioridades reais de quem vai aprovar o orçamento e o roadmap. É aí que entra o Thinking Partner.

**Entregável:** skill `thinking-partner` instalada no projeto + decisão documentada com a iniciativa #1 escolhida e validada pelos C-levels.

---

**Passo 1 — Criar a skill Thinking Partner (10 min)**

> *"Cria uma skill chamada `thinking-partner` com as seguintes especificações:*
>
> *- Trigger: sempre que eu pedir para discutir, avaliar ou validar uma decisão, iniciativa ou priorização*
> *- O que ela faz: lê os arquivos organograma-arenacash.md, transcricao-cfo.md, transcricao-cmo.md e transcricao-cto.md. Com base nesses documentos, cria três personas — Juliana (CFO), Beatriz (CMO) e Diego (CTO) — cada uma com o perfil de preocupações, prioridades e estilo de comunicação extraídos das transcrições reais. Quando eu apresentar uma iniciativa ou decisão, cada persona se posiciona: apoia, questiona ou rejeita — com os argumentos que aquele C-level usaria de verdade.*
> *- Output: perspectiva de cada C-level → síntese de onde há consenso e onde há conflito → pontos de atenção que o PM deve endereçar antes de apresentar*
> *- Regras: nunca inventar posições que não estejam nas transcrições; sempre citar o argumento específico do C-level; se não houver dado suficiente na transcrição, sinalizar isso em vez de inventar"*

Observe: o Claude criou a pasta `.claude/skills/thinking-partner/` com o arquivo `SKILL.md` dentro. Abra o arquivo e leia — você vai ver as instruções que acabou de ditar transformadas em um briefing estruturado. Essa é a anatomia de uma skill.

**Arquivo gerado:** `.claude/skills/thinking-partner/SKILL.md`

---

**Passo 2 — Validar as iniciativas com os C-levels (7 min)**

Agora use a skill que acabou de criar. Copie a lista de iniciativas que veio do Bloco 3 e mande:

> *"Usa a skill thinking-partner. Apresento as 5 iniciativas priorizadas que geramos para o Q2 da ArenaCash: [cole aqui a lista do arquivo analise-estrategica-q2.md]. Quero ouvir a Juliana, a Beatriz e o Diego sobre cada uma: quem apoia qual, onde há conflito de prioridade entre eles, e qual iniciativa teria mais chance de aprovação da diretoria hoje."*

Observe: o Claude lê as transcrições, monta as três personas e conduz um debate entre elas baseado nos dados reais. Você não está inventando o que os C-levels pensariam — está simulando com o que eles já disseram.

---

**Passo 3 — Escolher a iniciativa #1 (3 min)**

Leia a síntese do Thinking Partner e tome sua decisão. Em seguida, documente:

> *"Com base no debate do Thinking Partner, escolhi a iniciativa [nome]. Cria um arquivo 04-skills/decisao-iniciativa.md com: qual iniciativa foi escolhida, os principais argumentos de cada C-level que influenciaram a decisão, e as objeções que precisarei endereçar na apresentação."*

Essa decisão vai alimentar o próximo exercício — a apresentação que você vai levar para a diretoria.

**Arquivo gerado:** `04-skills/decisao-iniciativa.md`

---

### Exercício 10 — Skill de Apresentação + PPT para a diretoria (20 min)

Com a iniciativa escolhida e validada, é hora de montar o argumento visual. Vamos criar uma skill que conhece o seu tom de voz, o template da ArenaCash e o design system — e gera o PPT já no padrão certo, sem que você precise ajustar cor por cor ou slide por slide.

**Entregável:** arquivo `04-skills/apresentacao-iniciativa.pptx` pronto para apresentar à diretoria da ArenaCash — com a identidade visual correta, escrito no seu tom de voz, e com o conteúdo já aprovado pelo Thinking Partner.

---

**Passo 1 — Criar a skill de apresentação (8 min)**

> *"Cria uma skill chamada `arena-presentation` com as seguintes especificações:*
>
> *- Trigger: sempre que eu pedir para criar uma apresentação ou deck*
> *- O que ela faz: antes de escrever qualquer slide, lê três arquivos — tom-de-voz.md para saber como eu escrevo, template-apresentacao.pptx para entender a estrutura e o estilo visual da ArenaCash, e design-system-arenacash.md para aplicar cores, fontes e componentes corretos. Com esse contexto, estrutura o conteúdo em slides lógicos para o público especificado.*
> *- Output: arquivo .pptx salvo na pasta do projeto*
> *- Regras: máximo 5 bullets por slide; títulos curtos e diretos, sem verbos no infinitivo; sempre incluir slide de agenda no início e slide de 'próximos passos' no final; nunca usar fonte ou cor que não esteja no design system"*

Observe: a skill reúne três artefatos que você criou ao longo do dia (tom de voz, template, design system) e os aplica automaticamente em todo PPT que você pedir daqui pra frente. Você criou isso uma vez — vai usar para sempre.

**Arquivo gerado:** `.claude/skills/arena-presentation/SKILL.md`

---

**Passo 2 — Gerar o PPT da iniciativa (7 min)**

> *"Usa a skill arena-presentation. Cria uma apresentação de 8 slides sobre a iniciativa [nome da iniciativa escolhida no Passo 3 do Exercício 9]. O público é a diretoria da ArenaCash — Paulo (CPO), Juliana (CFO), Beatriz (CMO) e Diego (CTO). A apresentação deve incluir: contexto do quarter e por que essa iniciativa é prioritária agora, o problema que ela resolve com dados do Q1, a solução proposta, o RICE score com justificativa, roadmap de 3 meses, riscos e como mitigá-los, e o ask para a liderança — o que você precisa deles para avançar. Salva como 04-skills/apresentacao-iniciativa.pptx."*

---

**Passo 3 — Revisão final com o Thinking Partner (5 min)**

Antes de dar o PPT como pronto, submeta ao mesmo comitê que validou a iniciativa:

> *"Usa a skill thinking-partner. Lê o arquivo 04-skills/apresentacao-iniciativa.pptx. Quero que a Juliana, a Beatriz e o Diego reajam à apresentação como se fosse a reunião de diretoria real: o que cada um compraria sem questionamento, o que cada um questionaria, e o que está faltando para convencer quem está mais cético."*

Ajuste os slides com base no feedback. O critério não é perfeição — é: os argumentos do C-level mais cético estão endereçados na apresentação?

> **Reflexão de encerramento da manhã:** você chegou ao Bloco 4 com dados e iniciativas. Sai dele com uma decisão validada pelos C-levels e um PPT no padrão da empresa, escrito no seu tom de voz, pronto para ir à diretoria. Isso levaria dias numa semana normal. Levou 20 minutos. Na parte da tarde, essa iniciativa vira protótipo, recebe eventos de analytics e sobe para a internet com uma URL real.

**Arquivos gerados:** `.claude/skills/thinking-partner/SKILL.md`, `.claude/skills/arena-presentation/SKILL.md`, `04-skills/decisao-iniciativa.md`, `04-skills/apresentacao-iniciativa.pptx`

---

## 🍽️ Almoço (12:30–13:45)

---

## Bloco 5 — Do Cowork ao Code: Transição e Setup (13:45–14:30)
### "A internet inteira fala de Code. Mas entenda quando vale e quando é matar mosca com canhão."

**Objetivo:** Entender quando sair do Cowork pro Code, instalar o Claude Code, e mostrar que os arquivos da manhã continuam funcionando. Matar o FOMO.

### Parte expositiva — Quando Code faz sentido (15 min)

A regra de decisão: Cowork é pra quem quer delegar trabalho com contexto e arquivos. Code é pra quando você precisa ir além.

**1. Prototipação funcional** — Cowork cria documentos. Code cria coisas que *rodam*: telas, dashboards, sites interativos. "A distância entre uma ideia e um protótipo na tela agora é uma conversa no terminal."

**2. Conexão com Git** — Code lê repositórios, entende estrutura, cria branches, commita, abre PRs. PM que quer entender o que mudou no último deploy ou revisar um diff: é aqui.

**3. Análise de código** — PM não precisa escrever código, mas muitas vezes precisa *entender*. Code explica em português: "esse endpoint faz o quê?", "onde fica a lógica de precificação?"

**4. SQL e queries** — Cowork não conecta em banco de dados. Code sim. Escreve e executa queries, processa resultados, gera gráficos.

**5. MCP servers customizados** — No Cowork, ~50 connectors prontos. No Code, qualquer API vira MCP server: banco interno, Linear, Figma, Metabase, Amplitude.

**6. Ferramentas standalone** — Code constrói coisas que rodam sozinhas: calculadoras, dashboards, scripts. O Code é a fábrica — o produto não depende do Claude depois.

**7. Hooks e validação automática** — Scripts que rodam antes/depois de ações. "Antes de commitar, verifica se o PRD tem todas as seções obrigatórias."

| Cenário | Cowork | Code |
|---------|--------|------|
| Documentos (Word, Excel, PPT) | ✅ melhor | possível |
| Email / Slack | ✅ connectors | possível via MCP |
| Tasks agendadas | ✅ nativo | possível |
| Protótipos funcionais (HTML, React) | ❌ | ✅ melhor |
| Conexão com Git | ❌ | ✅ melhor |
| SQL e dados pesados | ❌ | ✅ melhor |
| MCP servers customizados | ❌ | ✅ melhor |
| Ferramentas standalone | ❌ | ✅ melhor |
| Hooks e automação | ❌ | ✅ melhor |

**Regra de bolso:** output é *arquivo* → Cowork. Output é *ferramenta* ou envolve *código* → Code.

### Exercício 11 — Setup do Code + continuidade (15 min)

**Passo 1 — Abrir o terminal e entrar na pasta (2 min)**

- **Mac:** pressione `Cmd + Espaço`, digite "Terminal" e pressione Enter
- **Windows:** pressione a tecla Windows, digite "PowerShell" e pressione Enter

No terminal, navegue até a pasta da ArenaCash:

```bash
cd ~/Documents/ArenaCash-PM
```

> Se você colocou a pasta em outro lugar, ajuste o caminho. No Mac, `~` é o atalho para a pasta do seu usuário.

**Passo 2 — Iniciar o Claude Code (2 min)**

Ainda no terminal, dentro da pasta `ArenaCash-PM`, digite:

```bash
claude
```

O Claude Code vai iniciar e já vai ler automaticamente os arquivos da pasta. Você vai ver uma confirmação de que ele encontrou o diretório.

**Passo 3 — Verificar continuidade com o Cowork (5 min)**

O primeiro teste é confirmar que o Code enxerga os mesmos arquivos que o Cowork criou de manhã. Digite no chat do Code:

> *"Lê o tom-de-voz.md e me mostra em 3 pontos como eu escrevo."*

O Claude leu o mesmo arquivo que o Cowork criou horas atrás. Mesma pasta, mesmos arquivos — os dois ambientes compartilham a mesma fonte de verdade. Para confirmar, edite uma linha do `tom-de-voz.md` pelo Code e abra o Cowork logo depois: a alteração aparece nos dois lados.

**Passo 4 — Criar o CLAUDE.md (6 min)**

No Cowork, as instruções ficam nas configurações do projeto. No Code, elas ficam em um arquivo chamado `CLAUDE.md` na raiz da pasta. Vamos criar esse arquivo a partir das instruções que você já escreveu:

> *"Lê o arquivo instrucoes-projeto.md. Cria um arquivo CLAUDE.md na raiz da pasta adaptando o conteúdo para o formato do Claude Code — mais direto, sem seções de configuração de interface, focado em contexto e regras de trabalho."*

A partir de agora, toda sessão de Code iniciada dentro dessa pasta vai começar com o Claude já sabendo quem você é e qual é o contexto da ArenaCash.

**Arquivo gerado:** `CLAUDE.md`

---

### Exercício 12 — Conectar ao Git e explorar o repositório da ArenaCash (15 min)

O Git é o sistema que a engenharia usa para versionar código. Para um PM, o valor não é commitar — é conseguir navegar pelo repositório e entender o que está lá, sem precisar pedir para um dev abrir o projeto e explicar. O Claude Code é o tradutor que faz isso possível em português.

Além disso, o instrutor disponibilizou todos os arquivos consolidados do curso em um repositório Git. Você vai clonar esse repositório agora — e ao final vai ter uma cópia local completa, organizada, pronta para usar no restante do dia.

**Entregável:** repositório da ArenaCash clonado na sua máquina + leitura guiada pelo Claude do que está lá dentro.

---

**Passo 1 — O que é Git e GitHub em 60 segundos (1 min)**

Git é um sistema de controle de versão: ele registra cada mudança feita em arquivos ao longo do tempo, quem fez, quando e por quê. GitHub é o serviço online onde esses repositórios ficam armazenados e compartilhados.

Para um PM: Git é onde o time de engenharia vive. Saber navegar por lá significa conseguir ver o que mudou no último deploy, entender a estrutura do projeto, ou puxar arquivos atualizados sem depender de ninguém.

---

**Passo 2 — Clonar o repositório da ArenaCash (5 min)**

Abra o terminal (ou use o mesmo que está aberto do exercício anterior). Saia da pasta ArenaCash-PM e vá para Documentos:

```bash
cd ~/Documents
```

Agora clone o repositório com o comando abaixo — o instrutor vai passar a URL exata no chat do curso:

```bash
git clone https://github.com/[url-do-repositório]/arenacash-kit.git
```

Aguarde o download terminar. Você vai ver os arquivos sendo baixados linha por linha. Ao final, entre na pasta:

```bash
cd arenacash-kit
```

Para verificar que os arquivos chegaram, liste o conteúdo:

```bash
ls
```

Você deve ver os mesmos arquivos do kit: `memo-estrategico-q2.md`, `organograma-arenacash.md`, `dados-quarter-q1.csv`, e todos os outros.

---

**Passo 3 — Abrir o Claude Code dentro do repositório (2 min)**

Ainda dentro da pasta `arenacash-kit`, inicie o Claude Code:

```bash
claude
```

O Claude vai ler a pasta automaticamente. Agora ele está operando dentro do repositório Git — e consegue enxergar não só os arquivos, mas também o histórico de mudanças.

---

**Passo 4 — Explorar o repositório com o Claude (7 min)**

Agora peça ao Claude para fazer o que levaria horas fazer manualmente:

> *"Lê todos os arquivos desta pasta e me faz um mapa do repositório: o que cada arquivo contém, como eles se relacionam entre si e qual seria a ordem lógica de leitura para alguém que está chegando no projeto pela primeira vez."*

Observe: o Claude leu todos os arquivos e entregou uma visão estruturada do repositório — o tipo de coisa que normalmente você pediria para um dev sênior explicar em uma reunião de onboarding.

Para ir além, teste:

> *"Tem alguma diferença entre os arquivos desse repositório e os que estão na minha pasta ArenaCash-PM? O que está aqui que não está lá?"*

Isso simula um uso real: você recebeu um repositório atualizado e quer entender rapidamente o que mudou em relação à versão que você tinha.

> **O que fixar:** você não escreveu uma linha de código. Não precisou entender a sintaxe do Git além de dois comandos. O Claude fez a leitura, o cruzamento e a explicação. Para um PM, essa é a forma certa de usar o Git — como fonte de verdade sobre o produto, acessada em linguagem natural.

---

## Bloco 6 — Prototipagem Visual e Mapeamento de Eventos (14:30–15:30)
### "PM que prototipa valida mais rápido, erra mais barato e influencia mais."

**Objetivo:** Transformar a apresentação aprovada de manhã em imagens de tela prontas para comunicar a iniciativa, criar a skill de mapeamento de eventos a partir do guia da ArenaCash, e sair com o tracking plan documentado em Excel e Word.

---

### Exercício 13 — Gerando as imagens das telas a partir da apresentação (25 min)

Você aprovou a iniciativa com a diretoria. Tem o PPT, tem o RICE, tem o roadmap. O próximo problema concreto de um PM é este: como você comunica para o time de design e engenharia o que precisa ser construído, antes de qualquer sprint de discovery?

A resposta tradicional é: agenda reunião, explica verbalmente, aguarda o designer fazer um wireframe, revisa, itera. Isso leva dias e depende de agenda de outra pessoa.

Com o Claude, você sai dessa reunião com imagens das telas na mão — geradas a partir da apresentação que você já tem, aplicando o design system da ArenaCash. Não é o Figma final do designer. É o suficiente para: alinhar o time antes do refinamento, ter uma referência visual concreta para discutir, e já entregar insumo para o próximo exercício — o mapeamento de eventos.

**Entregável:** imagens das telas principais da iniciativa salvas na pasta `06-prototipo/`, prontas para compartilhar com o time e usar como base do mapeamento de eventos.

---

**Passo 1 — Briefing visual (5 min)**

Abra o Cowork (pode voltar do Code para cá — os arquivos são os mesmos). Com a apresentação e o design system na pasta, mande:

> *"Lê o arquivo 04-skills/apresentacao-iniciativa.pptx e o design-system-arenacash.md. Com base na iniciativa apresentada, descreve as 2 ou 3 telas principais que essa feature precisaria ter — quais são, o que o usuário faz em cada uma e quais são os elementos de interface presentes (botões, campos, cards, gráficos, navegação)."*

O Claude vai listar as telas com descrição detalhada de cada uma. Revise: faz sentido com o que você imaginou para a iniciativa? Ajuste a descrição se precisar antes de gerar as imagens.

---

**Passo 2 — Gerar as imagens das telas (15 min)**

Para cada tela descrita no Passo 1, mande um prompt de geração de imagem. Use o design system como referência de identidade visual:

> *"Gera uma imagem da [nome da tela — ex: 'tela de onboarding passo 1']. A tela deve: [cole a descrição que o Claude gerou no passo anterior para essa tela]. Usa as cores do design system da ArenaCash: cor primária [cor do arquivo], fonte [fonte do arquivo], estilo visual limpo e moderno de fintech mobile. A imagem deve parecer um mockup de alta fidelidade de um app iOS."*

Repita para cada tela. Salve cada imagem gerada com um nome claro:

> *"Salva essa imagem como 06-prototipo/tela-[nome].png"*

---

**Passo 3 — Revisão e ajuste (5 min)**

Abra as imagens geradas e avalie:
- A identidade visual está alinhada com o design system?
- Os elementos de interface fazem sentido para o fluxo da iniciativa?
- Um designer ou desenvolvedor conseguiria entender o que construir a partir disso?

Se algo não ficou certo, descreva o ajuste em português e peça para regerar aquela tela específica. O loop é: descrever → gerar → revisar → ajustar — sem Figma, sem design, sem esperar.

**Arquivos gerados:** `06-prototipo/tela-[nome].png` (uma por tela)

---

### Exercício 14 — Criando a skill Event Mapper (35 min)

Você tem as telas. Agora vem um passo que muita equipe esquece — ou faz tarde demais: definir os eventos de analytics antes do desenvolvimento começar.

Para um PM, isso importa por uma razão simples: se o evento não foi mapeado antes do sprint, ele não vai estar no código quando a feature for ao ar. E dado que não foi ao ar com o evento, você não vai ter dados. E sem dados, você não consegue medir se a iniciativa que levou o quarter inteiro para construir está funcionando ou não.

Mapear eventos antes do desenvolvimento não é trabalho de engenharia — é decisão de produto. Você define o que precisa medir para saber se a iniciativa funcionou. O time de engenharia implementa. A skill torna esse processo rápido e padronizado.

Em vez de instalar uma skill pronta, vamos criar essa skill do zero — exatamente como fizemos com o Thinking Partner — mas desta vez usando um documento real da ArenaCash como base: o **Guia de Eventos**, que está na sua pasta desde o início do dia.

**Entregável:** skill `event-mapper` instalada no projeto + planilha Excel e documento Word com todos os eventos mapeados das telas geradas.

---

**Passo 1 — Entender o Guia de Eventos (5 min)**

Antes de criar a skill, o Claude precisa ler e internalizar as regras de mapeamento da ArenaCash. Mande:

> *"Lê o arquivo guia-de-eventos-arenacash.pdf. Me explica: quais são as convenções de nomenclatura dos eventos, quais tipos de evento existem (screen view, click, state change...), quais propriedades cada evento deve ter, e quais são as regras que nunca podem ser quebradas no mapeamento."*

Leia o resumo que o Claude entregar. Você vai reconhecer as convenções — e vai usá-las como critério de revisão quando a skill mapear os eventos das suas telas.

---

**Passo 2 — Criar a skill Event Mapper (15 min)**

> *"Cria uma skill chamada `event-mapper` com as seguintes especificações:*
>
> *- Trigger: sempre que eu enviar uma imagem de tela, um conjunto de screenshots ou uma listagem de telas e pedir para mapear os eventos*
> *- O que ela faz: lê o arquivo guia-de-eventos-arenacash.pdf para aplicar as convenções da ArenaCash. Analisa cada tela recebida — identificando todos os elementos interativos: botões, links, campos, toggles, cards clicáveis, mudanças de estado, e carregamentos de tela. Para cada elemento, define o evento correspondente seguindo a nomenclatura do guia.*
> *- Output 1: planilha Excel com as colunas — nome do evento, tipo (screen\_view / click / state\_change), tela de origem, elemento disparador, propriedades do evento, e status (novo / já existe)*
> *- Output 2: documento Word com o contexto de cada evento — descrição em linguagem humana do que ele captura e por que importa para o produto*
> *- Regras: seguir rigorosamente a convenção de nomenclatura do guia (snake\_case, padrão tela\_ação); nunca criar eventos duplicados; sinalizar quando um elemento não tiver evento correspondente no guia e sugerir um novo seguindo o padrão"*

Observe: a skill foi construída em cima de um documento real da sua empresa — não de uma regra genérica. Isso é a diferença entre uma skill que qualquer um poderia usar e uma skill que só faz sentido na ArenaCash.

**Arquivo gerado:** `.claude/skills/event-mapper/SKILL.md`

---

**Passo 3 — Mapear os eventos das telas geradas (15 min)**

Com a skill criada, é hora de usá-la. No Cowork, abra uma nova tarefa e anexe as imagens das telas que você salvou no Exercício 13:

> *"Usa a skill event-mapper. Mapeia os eventos de analytics dessas telas: [anexe as imagens tela-[nome].png]. Segue as convenções do guia de eventos da ArenaCash e entrega o Excel e o Word na pasta 06-prototipo/."*

Enquanto o Claude processa, observe o que ele está fazendo: analisando cada elemento interativo visível nas imagens, associando ao tipo de evento correspondente, e aplicando a nomenclatura do guia.

Ao receber os arquivos, revise:
- Os nomes dos eventos seguem o padrão do guia?
- Algum elemento interativo ficou de fora?
- As propriedades de cada evento estão completas?

Se encontrar algo errado, ajuste na conversa: "o evento do botão X deveria ser `ativacao_continuar_click`, não `botao_continuar_click`" — e peça para corrigir no arquivo.

**Arquivos gerados:** `06-prototipo/eventos-mapeados.xlsx`, `06-prototipo/eventos-contexto.docx`

---

### 🎁 Exercício bônus — Prototipagem com Claude Design (para quem tiver acesso)

> *Este exercício é opcional. O Claude Design está disponível nos planos **Pro, Max, Team e Enterprise** — mas é uma feature em research preview que precisa ser habilitada. Se o seu plano for Team ou Enterprise, verifique com o administrador se a funcionalidade foi ativada para a sua conta.*

**Como acessar:** abra o navegador e vá para [claude.ai/design](https://claude.ai/design). Se o seu plano tiver acesso, a interface vai carregar direto. Se não tiver, o Claude vai informar qual plano dá acesso.

---

O Claude Design tem dois painéis: chat à esquerda, canvas à direita. Você descreve o que quer em português no chat, e o Claude gera o design diretamente no canvas — interativo, ajustável, em alta fidelidade. Em vez de esperar uma imagem gerada por prompt, você itera visualmente: move elementos, ajusta hierarquia, muda componentes, tudo em linguagem natural.

**Passo 1 — Configurar o design system da ArenaCash**

Antes de gerar qualquer tela, configure o design system para que o Claude Design aplique a identidade visual correta. No chat do Claude Design, mande:

> *"Vou trabalhar com o design system da ArenaCash. As cores principais são [cole as cores do design-system-arenacash.md], a fonte é [fonte do arquivo] e o estilo visual é fintech mobile, limpo e moderno. Guarda essas configurações para usar em todas as telas que eu pedir."*

**Passo 2 — Recriar as telas em alta fidelidade**

> *"Cria as telas da iniciativa [nome] da ArenaCash em alta fidelidade: [descreva as telas — ou cole a descrição que o Claude gerou no Exercício 13]. Aplica o design system configurado: cores, fonte e estilo. Quero ver: [nome da tela 1], [nome da tela 2] e [nome da tela 3]."*

Itere no canvas: peça ajustes de layout, espaçamento, hierarquia de informação, estados de botão, empty states. Cada pedido é uma instrução em português — sem precisar abrir o Figma ou editar nenhum arquivo.

**Passo 3 — Exportar e substituir**

Ao finalizar, exporte as telas como imagens e salve em `06-prototipo/`, substituindo as geradas no Exercício 13 — ou mantenha as duas versões lado a lado para mostrar a diferença de fidelidade.

> **Por que isso importa:** a diferença entre uma imagem gerada por prompt e um protótipo de alta fidelidade no Claude Design é a diferença entre mostrar uma ideia e vender uma ideia. Em reunião de stakeholders, o segundo fecha mais rápido.

---

## ☕ Coffee break (15:30–15:45)

---

## Bloco 7 — Codando a Feature e Lançando o App (15:45–16:45)
### "Vocês entraram como PMs da ArenaCash de manhã. Vão sair com um produto no ar."

**Objetivo:** Transformar o protótipo em um site funcional com CSS polido, funcionalidades reais e eventos integrados. Publicar online. Fechar o ciclo completo: do memo estratégico ao produto live.

### Exercício 15 — Do protótipo ao produto (35 min)

O aluno pega o protótipo visual (com eventos já integrados) e transforma num site completo.

**Passo 1: Evoluir o código (20 min)**

> "Vamos evoluir o protótipo pra um site completo. Quero:
> 1. CSS polido: animações suaves, responsivo mobile, micro-interações nos botões
> 2. JavaScript funcional: [descrever funcionalidades reais da iniciativa — ex: filtros que funcionam, formulário que salva, toggle que muda dados]
> 3. Dados mockados realistas da ArenaCash (use os dados do dados-quarter-q1.csv como referência)
> 4. Os eventos de analytics já integrados continuam funcionando
> 5. Uma página index.html que seja o ponto de entrada"

O aluno itera: ajusta cores, melhora interações, adiciona funcionalidades. O Code faz o trabalho pesado de CSS/JS — o PM foca no resultado.

**Passo 2: Testar os eventos (5 min)**

Abrir DevTools → Console. Navegar pelo site. Verificar que cada interação dispara o evento correto. Se faltar algum: "Adiciona evento de click no botão X."

**Passo 3: Publicar online (10 min)**

O instrutor mostra como publicar o site usando um serviço gratuito:

```bash
# Opção 1: usando npx serve + tunnel
npx serve ./prototipo-iniciativa

# Opção 2: deploy em Netlify/Vercel via CLI
npx netlify-cli deploy --dir=./prototipo-iniciativa --prod
```

Cada aluno publica seu site e recebe uma URL pública. Compartilha no chat do curso.

### Showcase (15 min + 5 min encerramento)

3-4 voluntários compartilham a tela:
- Mostram o site live com a URL pública
- Navegam mostrando as funcionalidades
- Abrem DevTools mostrando os eventos disparando
- Contam a jornada: qual era a iniciativa, como priorizaram, como o thinking partner influenciou

**Critério:** não é sobre perfeição. É mostrar que o aluno fechou o ciclo completo: dados → análise → priorização → validação → PRD → apresentação → protótipo → código → eventos → deploy.

**Arquivo gerado:** `06-app-final/` (site completo publicado)

---

## Bloco 8 — Encerramento (16:45–17:00)

### O que vocês construíram hoje (5 min)

Recapitular a jornada do dia na ArenaCash:
1. Montaram o ambiente de PM (projeto, memória, tom de voz)
2. Criaram um thinking partner com personas dos C-levels
3. Analisaram dados reais e priorizaram iniciativas
4. Geraram PRD e apresentação com skills
5. Validaram com o thinking partner
6. Prototiparam telas no Code
7. Mapearam eventos com skill
8. Codaram o site com CSS/JS
9. Integraram eventos de analytics
10. Publicaram o app online

De manhã eram PMs no dia 1. À tarde já tinham um produto no ar.

### Limitações e honestidade (3 min)

O que o Claude ainda não faz bem:
- Inventa dados quando não tem — *sempre* valide números e fontes
- Contexto longo degrada qualidade — conversas de 50+ mensagens perdem foco
- Não substitui julgamento de produto — executa bem, mas a decisão estratégica é sua
- Dependência de API — sem internet, sem Claude
- Dados sensíveis — cuidado com o que sobe (PII, dados de clientes, informações confidenciais)

### Recursos para continuar (2 min)

- Comunidade de skills: `github.com/BehiSecc/awesome-claude-skills`
- Curso gratuito Claude Code para PMs: `ccforpms.com`
- Newsletter de referência: Lenny's "How I AI", Ruben Hassid "How to AI"
- Documentação oficial: `docs.anthropic.com`

### Takeaway final

> "Prompting é a pior forma de usar o Claude."
> O poder está em delegar com contexto, criar skills reutilizáveis e prototipar sem depender de ninguém. Vocês entraram hoje de manhã como PMs no primeiro dia na ArenaCash. Saíram com: ambiente configurado, dados analisados, iniciativa priorizada, PRD completa, apresentação validada por C-levels, protótipo funcional, eventos mapeados e um app publicado. Isso não é teoria — é o que PMs que usam Claude bem fazem toda semana.

---

## Estrutura final da pasta do curso

```
ArenaCash-PM/
├── CLAUDE.md                              ← instruções do projeto (Code)
├── memo-estrategico-q2.md                 ← [kit] memo do CEO
├── organograma-arenacash.md              ← [kit] estrutura da empresa
├── dados-quarter-q1.csv                   ← [kit] métricas de produto
├── financeiro-q1.xlsx                     ← [kit] dados financeiros
├── atendimento-q1.csv                     ← [kit] tickets de suporte
├── transcricao-cfo.md                     ← [kit] conversa com CFO
├── transcricao-cmo.md                     ← [kit] conversa com CMO
├── transcricao-cto.md                     ← [kit] conversa com CTO
├── template-apresentacao.pptx             ← [kit] template PPT ArenaCash
├── design-system-arenacash.md            ← [kit] padrão visual
├── tom-de-voz.md                          ← tom de escrita do aluno
├── .claude/
│   └── skills/
│       ├── thinking-partner/SKILL.md      ← skill de thinking partner
│       └── arena-presentation/SKILL.md    ← skill de apresentação
├── 01-fundamentos/
│   └── comparativo-prompts.md
├── 02-setup/
│   └── instrucoes-projeto.md
├── 03-dados/
│   ├── analise-q1-arenacash.md
│   ├── iniciativas-q2.md
│   └── validacao-thinking-partner.md
├── 04-skills/
│   ├── prd-iniciativa.docx
│   └── apresentacao-iniciativa.pptx
├── 05-code/
│   ├── prototipo-iniciativa/              ← HTML/CSS/JS das telas
│   ├── eventos-mapeados.xlsx
│   └── eventos-contexto.docx
└── 06-app-final/
    └── (site completo publicado)
```

---

## Materiais de referência

- Apresentação original: [Product Arena] Usando Claude Cowork
- Lenny's Newsletter: Claude Cowork 101 com JJ Englert (Tenex)
- Ruben Hassid: Claude Cowork + Project
- Jesse Pujji: Como usar Claude Cowork como um segundo funcionário
- Claude Code for PMs (ccforpms.com)
- Documentação Anthropic: docs.anthropic.com
