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

## Bloco 3 — MCP, Dados e Priorização de Iniciativas (10:55–11:40)
### "O Claude sozinho é bom. Plugado nas suas ferramentas, é transformador."

**Objetivo:** Entender MCP, conectar ferramentas, e usar os dados da ArenaCash para gerar e priorizar iniciativas. O thinking partner — que os alunos vão construir no Bloco 4 — é disponibilizado pré-instalado aqui para o primeiro uso.

### Parte expositiva — O que é MCP (10 min)

**MCP = Model Context Protocol.** O Claude é um cérebro trancado numa sala. MCP é o corredor que liga a sala às suas ferramentas. É um protocolo aberto (da Anthropic) que define como qualquer ferramenta se conecta ao Claude de forma segura.

```
Você pede: "Busca nos meus emails o que a Maria mandou essa semana"
    ↓
Claude entende o que você quer
    ↓
Claude chama o Connector do Gmail via MCP
    ↓
Connector autentica com sua conta (OAuth)
    ↓
Connector busca e devolve para o Claude
    ↓
Claude analisa e te entrega o resumo
```

Os alunos já usaram MCP sem saber — quando conectaram o Gmail no bloco anterior, era MCP por trás. 50+ connectors disponíveis (Jira, Linear, Figma, Salesforce, Notion...). Qualquer empresa pode criar um connector — é padrão aberto.

**O que connectors fazem:** ler dados, criar rascunhos, buscar e filtrar.
**O que NÃO fazem sem confirmação:** enviar emails, postar mensagens, deletar, modificar permissões.

### Exercício 6 — Analisando os dados da ArenaCash (15 min)

Agora o PM começa a trabalhar de verdade. Tem os dados do quarter na pasta — hora de entender a situação.

**Passo 1: Análise cruzada (10 min)**

Pedir ao Claude:

> "Lê os arquivos dados-quarter-q1.csv, financeiro-q1.xlsx e atendimento-q1.csv. Cruza as informações e me dá:
> 1. Estado geral da ArenaCash no Q1 — o que foi bem e o que foi mal
> 2. Os 3 maiores problemas que precisam de atenção no Q2
> 3. Onde estão as maiores oportunidades de impacto
> Compara com as metas do memo-estrategico-q2.md."

Observar: o Claude leu 4 arquivos diferentes e cruzou dados financeiros, de produto e de atendimento. Esse é o poder da delegação com contexto.

**Passo 2: Gerar iniciativas (5 min)**

> "Com base na análise, proponha 5 iniciativas para o Q2 que enderecem os problemas identificados. Para cada uma, estime: Reach, Impact, Confidence e Effort (framework RICE). Ranqueie da mais impactante para a menos."

**Arquivo gerado:** `03-dados/analise-q1-arenacash.md`, `03-dados/iniciativas-q2.md`

### Exercício 7 — Priorizando com o Thinking Partner (10 min)

O instrutor disponibiliza a skill `thinking-partner` pré-instalada para este exercício. No Bloco 4, os alunos vão entender como ela foi construída e criar a própria versão.

> "Usa a skill thinking-partner. Apresenta as 5 iniciativas propostas e quero ouvir a perspectiva do CFO, da CMO e do CTO. Quem apoia o quê? Onde há conflito? Qual deveria ser a prioridade #1?"

Observar: o Claude assume as 3 personas baseadas nas transcrições reais e debate as iniciativas. O PM avalia os argumentos e toma a decisão.

Fechar: o aluno escolhe a iniciativa #1 que vai prototipar e apresentar.

**Arquivo gerado:** `03-dados/validacao-thinking-partner.md`

### Exercício 8 — Criando uma tarefa agendada (10 min)

Todo o fluxo que o aluno acabou de fazer (puxar dados → analisar → gerar iniciativas) pode rodar sozinho em horários definidos. Vamos criar uma scheduled task real.

**Passo 1: Criar a task (5 min)**

Pedir ao Claude:

> "Cria uma tarefa agendada chamada 'Briefing semanal ArenaCash'. Toda segunda-feira às 8h, ela deve:
> 1. Ler os arquivos de dados mais recentes da pasta (dados-quarter, financeiro, atendimento)
> 2. Comparar com as metas do memo-estrategico-q2.md
> 3. Gerar um resumo de 1 página com: o que melhorou, o que piorou, e 1 alerta crítico se houver
> 4. Salvar em briefings/briefing-semanal-[data].md"

Observar: o Cowork cria a task, mostra a frequência configurada. O aluno pode ver em Tasks → Scheduled.

**Passo 2: Testar manualmente (3 min)**

Clicar em "Run Now" para executar a task imediatamente e ver o resultado. Verificar o arquivo gerado na pasta `briefings/`.

**Passo 3: Boas práticas rápidas (2 min)**

- Sempre teste manualmente antes de confiar no agendamento
- Tasks que enviam mensagens/emails pedem confirmação humana
- Revise mensalmente — tasks abandonadas consomem tokens sem entregar valor

**Arquivo gerado:** `03-dados/briefings/briefing-semanal-[data].md`

---

## Bloco 4 — Skills, Apresentação e Validação (11:40–12:30)
### "Skill = briefing especializado. Sem skill, resultado genérico. Com skill, resultado profissional."

**Objetivo:** Entender o ecossistema de skills (nativas, biblioteca, customizadas), construir o thinking partner do zero, instalar a PRD Generator, criar a apresentação da iniciativa com template ArenaCash, e submeter ao thinking partner para feedback final.

### Parte expositiva — O ecossistema de Skills (10 min)

**Tipos de Skills:**

1. *Skills nativas* — já vêm com o Claude: pptx, xlsx, docx, pdf. Toda vez que você pede "cria uma planilha", uma skill nativa roda por baixo.

2. *Skills da comunidade / biblioteca* — criadas e compartilhadas. Repositório: github.com/BehiSecc/awesome-claude-skills. Centenas disponíveis.

3. *Skills customizadas* — as suas. Quando nenhuma existente faz o que você precisa do jeito que precisa.

**Quando criar vs. instalar:** se já existe uma skill boa, instale. Crie quando: repete a tarefa 3+ vezes, precisa seguir padrão da empresa, ou qualidade genérica não serve.

### Demo — Skills nativas e da comunidade (5 min)

Instrutor mostra rapidamente:
- Pedido genérico "cria planilha com dados de vendas" → resultado OK
- Mesmo pedido com skill xlsx ativa → formatação profissional, fórmulas, headers estilizados
- **Newsletter do Arthur:** como a skill captura estilo editorial, o fluxo tópicos → rascunho → versão final. "Criei uma vez e nunca mais expliquei como quero a newsletter."

### Exercício 9 — Criando o Thinking Partner com C-Levels (15 min)

No Bloco 3 os alunos usaram o thinking partner com uma skill pré-instalada. Agora vão entender como ela funciona por dentro — e criar a própria.

**Passo 1: Entender o conceito (3 min)**

Uma Skill é um arquivo markdown com instruções detalhadas que ensinam o Claude a fazer uma tarefa específica. A analogia: "Você manda um briefing de 2 linhas pra um designer e espera trabalho incrível? Não. Skill é o briefing completo, escrito uma vez e reutilizado pra sempre."

**Passo 2: Criar a skill thinking-partner (12 min)**

Pedir ao Claude:

> "Cria uma skill chamada `thinking-partner` que funciona assim:
> - Trigger: quando eu pedir para discutir, avaliar ou validar uma decisão, iniciativa ou priorização
> - O que faz: lê o organograma-arenacash.md e as transcrições dos C-levels (transcricao-cfo.md, transcricao-cmo.md, transcricao-cto.md). Cria 3 personas — o CFO, a CMO e o CTO — cada uma com o perfil, as preocupações e o estilo de comunicação extraídos das transcrições. Apresenta o ponto de vista de cada um sobre o assunto que eu trouxer, destacando onde concordam e onde divergem.
> - Output: análise com 3 perspectivas + síntese de consenso + pontos de atenção
> - Regras: sempre se basear nos dados das transcrições, nunca inventar posições que os C-levels não expressaram"

Observar: o Claude criou a pasta `.claude/skills/thinking-partner/` com o arquivo SKILL.md dentro. Comparar com a skill pré-instalada do Bloco 3 — são idênticas ou têm diferenças? Por quê?

**Arquivo gerado:** `.claude/skills/thinking-partner/SKILL.md`

### Exercício 10 — Instalando a PRD Generator (10 min)

Aqui o aluno aprende a instalar uma skill pronta, em vez de criar do zero.

1. O instrutor compartilha a skill `prd-generator`
2. Cada aluno instala no projeto (arrastar pra pasta ou seguir o passo a passo)
3. Testar com a iniciativa #1 que escolheram: "Gera uma PRD para a iniciativa [nome da iniciativa escolhida]"
4. Observar: PRD completa com contexto, problema, solução, métricas, histórias de usuário com critérios de aceite — tudo no padrão

**Arquivo gerado:** `04-skills/prd-iniciativa.docx`

### Exercício 11 — Apresentação com template ArenaCash (15 min)

O exercício final da manhã amarra tudo: projeto, memória, tom de voz, skill, template e thinking partner.

**Passo 1: Criar a skill de apresentação (5 min)**

> "Cria uma skill chamada `arena-presentation` que funciona assim:
> - Trigger: quando eu pedir para criar uma apresentação ou deck
> - Fluxo: usa o template-apresentacao.pptx como base de estilo. Lê o tom-de-voz.md para o estilo de escrita. Lê o design-system-arenacash.md para cores e fontes. Estrutura o conteúdo em slides lógicos.
> - Output: arquivo .pptx pronto
> - Regras: máximo 6 bullets por slide, títulos curtos e diretos, sempre incluir slide de agenda"

**Passo 2: Gerar a apresentação (5 min)**

> "Cria uma apresentação de 8 slides sobre a iniciativa [nome]. Inclui: contexto do quarter, problema identificado, solução proposta, RICE score, roadmap de 3 meses, e ask para a liderança. O público é a diretoria da ArenaCash."

**Passo 3: Submeter ao thinking partner (5 min)**

> "Usa a skill thinking-partner. Mostra essa apresentação para o CFO, a CMO e o CTO. Quero feedback de cada um: o que compraram, o que questionam, e o que falta."

Observar: o Claude lê a apresentação, assume as personas e dá feedback específico. O PM ajusta.

**Reflexão final da manhã:** o aluno usou projeto com memória, organograma como contexto, tom de voz, 3 skills (thinking partner, PRD, apresentação), connectors, e thinking partner como validador. Tudo junto. Isso é o Cowork a todo vapor — e a iniciativa que escolheram vai virar realidade na parte da tarde.

**Arquivos gerados:** `04-skills/arena-presentation/SKILL.md`, `04-skills/apresentacao-iniciativa.pptx`

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

**Passo 1: Instalar e entrar (5 min)**

```bash
npm install -g @anthropic-ai/claude-code
cd ~/ArenaCash-PM
claude
```

Observar: o Claude já lê a pasta, já vê todos os arquivos da manhã.

**Passo 2: Mostrar continuidade (5 min)**

Pedir: "Lê o tom-de-voz.md e me mostra como eu escrevo."

O Claude leu o mesmo arquivo que o Cowork criou de manhã. Mesma pasta, mesmos arquivos, mesma memória. Editar o tom de voz pelo Code (mudar uma expressão) e verificar que a alteração vale pros dois ambientes.

**Passo 3: CLAUDE.md — instruções no Code (5 min)**

Pedir: "Cria um CLAUDE.md baseado nas instruções do projeto que a gente montou em 02-setup/instrucoes-projeto.md. Adapta pro formato de Code."

Observar: o Claude converteu as instruções do Cowork para o formato CLAUDE.md. A partir de agora, toda sessão de Code já sabe quem você é e qual o contexto da ArenaCash.

**Arquivo gerado:** `CLAUDE.md`

---

## Bloco 6 — Prototipagem Visual e Mapeamento de Eventos (14:30–15:30)
### "PM que prototipa valida mais rápido, erra mais barato e influencia mais."

**Objetivo:** Prototipar as telas da iniciativa aprovada de manhã, criar a skill de mapeamento de eventos, e mapear os eventos das telas. Sair com design + tracking plan prontos.

### Exercício 12 — Prototipando as telas da iniciativa (30 min)

A iniciativa que o PM priorizou de manhã — validada pelo thinking partner e apresentada na PPT — agora vira tela.

**Passo 1: Briefing de design (5 min)**

O aluno descreve pro Code o que quer prototipar, referenciando a PRD e o design system:

> "Lê o arquivo 04-skills/prd-iniciativa.docx e o design-system-arenacash.md. Cria um protótipo funcional em HTML/CSS/JS das telas principais dessa iniciativa. Usa as cores, fontes e componentes do design system da ArenaCash. Quero: [descrever as 2-3 telas principais da iniciativa]. Precisa ser responsivo e interativo."

**Passo 2: Primeira versão (10 min)**

O Code gera as telas. O aluno abre no browser e avalia visualmente.

**Passo 3: Iteração de design (15 min)**

3-4 rodadas de refinamento em português:
- "A cor do header tá apagada, usa o azul primário do design system"
- "Adiciona um gráfico de evolução mensal nesse card"
- "O botão de CTA precisa de mais destaque"
- "Coloca um estado vazio (empty state) pra quando não tem dados"

Ponto-chave: o PM nunca olha código. Descreve o que quer, vê o resultado, ajusta. O loop é: descrever → gerar → revisar → iterar. Em 30 minutos, o aluno tem um protótipo visual funcional que normalmente levaria dias pedindo pra design.

**Arquivo gerado:** `05-code/prototipo-iniciativa/` (HTML/CSS/JS)

### Exercício 13 — Skill de Event Mapper + mapeamento das telas (15 min)

Agora que as telas existem, o PM precisa definir quais eventos de analytics rastrear.

**Passo 1: Instalar/criar a skill (5 min)**

O instrutor compartilha a skill `event-mapper`. Os alunos instalam.

A skill funciona assim: recebe um print/screenshot de tela, analisa todos os elementos interativos, e mapeia os eventos que deveriam ser rastreados (screen views, clicks, state changes). Output: planilha Excel com nome do evento, propriedades, gatilho, tela e status + documento Word com contexto.

**Passo 2: Mapear eventos das telas prototipadas (10 min)**

1. Tirar screenshots das telas que acabaram de criar
2. Enviar pro Claude com a skill ativa: "Mapeia os eventos de analytics dessas telas"
3. Observar: a skill segue convenções (snake_case, padrão {tela}_{ação}) e entrega dois arquivos prontos
4. Revisar: os eventos fazem sentido? Faltou algum? Tem evento demais?

Ponto-chave: sem a skill, mapear eventos de 3 telas levaria 1-2 horas. Com a skill, 10 minutos — e seguindo convenção.

**Arquivos gerados:** `05-code/eventos-mapeados.xlsx`, `05-code/eventos-contexto.docx`

### Exercício 14 — Integrando eventos no código (15 min)

Agora o aluno pede ao Code para integrar os eventos diretamente no protótipo:

> "Lê o arquivo eventos-mapeados.xlsx. Integra esses eventos no protótipo HTML que a gente criou. Adiciona tracking calls nos pontos certos: screen views quando a tela carrega, clicks nos botões e links, state changes quando o usuário muda de etapa. Usa console.log() para simular os disparos — quero ver no DevTools quando cada evento dispara."

Observar: o Code leu a planilha de eventos e modificou o HTML pra adicionar os tracking points. Abrir o DevTools no browser e navegar pelo protótipo — cada interação mostra o evento no console.

**Arquivo gerado:** `05-code/prototipo-iniciativa/` (atualizado com eventos)

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
