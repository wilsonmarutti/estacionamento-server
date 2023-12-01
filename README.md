# Conciderações iniciais

* Vamos partir do pré-suposto que já tenho o [Node.Js](https://nodejs.org/en) e o [GIT](https://git-scm.com/downloads) instalado na maquina, caso não tenha algum deles só clicar nos links que levará até onde consiga fazer o download.

# Passo a passo
## Clone o Repositório:
 * Clique no botão verde no canto superior direto escrito **clone**
 * Escolha a opção HTTPS e copie o link
 * Para isso escolha um diretório onde queria deixar o projeto por exemplo na imagem abaixo estamos clonando o projeto em `C:\Dev`
   * Execute o comando git clone no seu prompt de comando, normalmente executado no git bash (exemplo: `git clone https://github.com/wilsonmarutti/estacionamento-frontend.git`)
 # Executando o projeto.
 * Na Ide de escolha, no terminal execute os seguintes comandos 
   * `npm i` para instalar todas as dependências do projeto.
   * execute o comando `node index.js`, isso fara com que suba aplicação e consiga acompanhar os logs de requisição rodando via [postman](https://www.postman.com/downloads/)

# Criando banco
* Visite o site do [MongoDb](https://www.mongodb.com/atlas/database) Atlas e crie uma nova conta ou faça login se já tiver uma.
* Crie um Cluster:
  * No painel do MongoDB Atlas, crie um novo cluster. Escolha o provedor de nuvem e a região que preferir.
* Configure o Acesso ao Cluster:
  * Na seção "Security", configure o "Database Access" para adicionar um novo usuário ao banco de dados com uma senha.
  * Em "Network Access", adicione um endereço IP ou permita o acesso de qualquer lugar (não recomendado para produção).
* Conecte-se ao Cluster:
  * Na seção do cluster, escolha "Connect" e siga as instruções para obter a string de conexão.
  * Adicione esta string de conexão ao seu arquivo .env ou configuração do projeto Node.js.
* Verifique a Conexão:
  * Teste a conexão com o MongoDB Atlas a partir do seu projeto Node.js para garantir que tudo está funcionando corretamente.
