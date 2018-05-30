Capitulo 3 - HTML & CSS

Agora que sabemos como a web funciona e temos um ambiente preparado para desenvolver em javascript, vamos começar por a mão na massa?

Uma página web possui 3 pilares: HTML, CSS E Javascript.

O HTML é a estrutura do site, CSS é aparência e o Javascript é o que anima e faz as funcionalidades do site.

Para inicar a construção do nosso projeto, pelo seu Terminal(Linux ou MAC) ou cmd (Windows) digite o seguinte comando:

```
mkdir tutorial-jsladies
```
O que esse comando acima fez foi criar uma pasta para nós adicionarmos os nossos arquivos. O próximo comando a ser rodado é:

```
cd tutorial-jsladies
```
Esse comando acima nos leva para dentro da pasta.

Agora que temos um local para inicar o nosso projeto, vamos criar nosso primeiro arquivo, para isso rode o seguinte comando:

```
touch index.html
```
Esse comando acima criou um arquivo html.

Vamos abrir agora esse arquivo com o seu com um editor de sua preferência (Sublime, VSCode, Atom e etc...)
Caso você não saiba onde você criou o arquivo você pode pelo seu Terminal (Linux ou MAC)/cmd (Windows) descobrir onde você está digitando o seguinte comando:

Terminal (Linux ou MAC):
```
pwd 
```

CMD (Windows):
```
cd
```
Com o arquivo aberto no editor, vamos começar a criar a estrutura do nosso site:
```html

<html>
    <head>
        <title>Hamtaro - { JS Ladies }</title>
    </head>

    <body>
      <h1>Minha primeira Página</h1>
      <p>Eu vou fazer um jogo com Hamtaro</p>
    </body>
</html>
```
 Cada objeto que possui <> é uma tag. O html não é uma linguagem de programação ele é uma linguagem de marcação de texto, e utilizamos as tags para avisar qual é o elemento que o nosso navegador deve redenrizar.
    
