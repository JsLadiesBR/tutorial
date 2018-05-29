
# Desenvolvendo um Jogo com JavaScript

Vamos agora iniciar o desenvolvimento de um jogo simples usando alguns dos conceitos que aprendemos hoje.
Preparamos para você um projeto pré-configurado com tudo que você vai presisar para construir e publicar seu jogo na internet.

- [Projeto pré-configurado](https://github.com/JsLadiesBR/tutorial-hamtaro)

No final desse capítulo você terá esse jogo implementado:

- [O jogo](http://jsladies.org/tutorial-hamtaro/)

O código final se encontra nesse link:

- [Projeto Completo](https://github.com/JsLadiesBR/tutorial)

`OBS: Usaremos o framework Phaser para construção do jogo`

## Criando e configurando o ambiente

### Instalação do projeto

Uma vez que você já tem o **nodejs** instalado e já baixou o **projeto pré-configurado**, já podemos iniciar a instalação das dependências do projeto, para isso, abra o terminal no diretório do **projeto pré-configurado** e digite o comando:

```
$ npm install
```

Após a instalação das dependências, já podemos iniciar o servidor http, utilizando o comando:

```
$ npm run dev
```

## Iniciando o jogo

Nós escreveremos o código dentro do arquivo **main.js**, ele deve estar dentro do diretório **assets/js**

Nele você deverá escrever o seguinte código:

```
function preload () {}

function create () {}

function update () {}

function principal () {}

// Estamos adicionando uma função para o evento OnLoad da janela
window.onload = principal

```

**preload, create, update** são as nossas cenas do jogo que serão criadas. 

- **preload**: É a nossa primeira cena, aonde carregará todos os recursos visuais e sonoros que poderão vir a ser implementados no jogo.
- **create**: É a nossa segunda cena, aonde os elementos do jogo são configurados, essa cena é importante pois é nela que se encontra toda a lógica do jogo.
- **update**: É a nossa terceira cena, nessa cena podemos sempre atualizar o estado do jogo, como por exemplo a movimentação dos personagens.

A função **principal** vocês verão no proximo tópico.

## Configurando o jogo

Para iniciarmos um jogo precisamos informar algumas configurações básicas. O nosso framework exige que essas configurações sejam feitas para que ele possa entender o que você vai tentar implementar. Então vamos voltar ao código, olhando agora para a função **principal**:

```
function principal () {

    var largura = ''
    var altura = ''

    // cria uma variável com as configuraçes do jogo
    var conf = {
        type: Phaser.AUTO,
        width: largura,
        height: altura,
        pixelArt: true,
        backgroundColor: '',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: null,
            create: null,
            update: null
        }
    }
    
    var game = Phaser.Game(conf)
}
```

Vamos começar a configurar o exemplo anterior alterando os valores, primeiro definiremos uma largura e uma altura para a nossa tela do jogo:

```
    var largura = 500
    var altura = 500
```

Se você deseja que a tela do jogo seja o tamanho da tela da janela do seu navegador, ou seja, que ocupe toda a tela, você pode fazer assim:

```
    var largura = window.innerWidth
    var altura = window.innerHeight
```


Agora, vamos definir uma cor para o fundo da tela do jogo, procure por **backgroundColor** no exemplo acima e adicione uma cor de sua preferencia:

```
  backgroundColor: '#b3e6ff'
```

As cores são em hexadecimal, você pode procurar uma cor nesse [link](https://html-color-codes.info/Codigos-de-Cores-HTML/)

Por fim, vamos definir as nossas cenas **preload, create e update**. 
Por padrão o framework necessita que essas cenas sejam criadas e informadas na configuração. Então basta apenas adicionar a sua assinatura dessa forma:

```
    scene: {
        preload: preload,
        create: create,
        update: update
    }
```

Agora que ja temos o nosso jogo configurado, podemos visualizar no navegador como está ficando a primeira cara do jogo.


## Importando os recursos para o jogo
## Criando um elemento de texto
## Criando um elemento sprite
## Gravidade
## Dando movimento aos elementos
## Criando animaçes
## Criando colisões
## Criando eventos com as colisões
### Atualizando a posição do sprite do item
### Adicionar pontuação
