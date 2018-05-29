
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
