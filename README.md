# tutorial
Tutorial para Iniciantes que estão entrando no mundo do desenvolvimento

# 1 Instalação
Uma vez que o NodeJS já esteja devidamente instalado na sua máquina, execute o seguinte comando:

$ npm install

obs: Esse comando deve ser executado dentro do diretório/pasta onde se encontra o arquivo
'package.json'

# 2 Rodando o servidor
É necessário que estejamos trabalhando em cima de um servidor http, por isso execute o comando:

$ npm run dev

obs: Esse comando iriar iniciar um servidor http que estara funcionando na porta 8000,
para acessar basta abrir o navegador e digitar "http://localhost:8000"

# 3 Publicando na Internet (Deploy)

Para fazer deploy do jogo basta apenas executar o comando:

$ npm run deploy

Os próximos passos vão te pedir a origem dos arquivos, na qual não é necessária informar
pois você já vai se encontrar na raiz onde os arquivos estão.
Em seguida escolher um nome para o dominio no [surge.sh](http://surge.sh) que você deseja
