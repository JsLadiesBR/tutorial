# Capitulo 2 - HTML & CSS

Agora que sabemos como a web funciona, vamos começar por a mão na massa?
Uma página web possui 3 pilares: HTML, CSS E Javascript.
O HTML é a estrutura do site, CSS é aparência e o Javascript é o que anima e faz as funcionalidades do site.

## HTML (Hypertext Markup Language)

Agora vamos criar um arquivo html para ver na prática como ele funciona.

Para inicar a construção do nosso projeto, pelo seu Terminal (Linux ou MAC) ou CMD (Windows) digite o seguinte comando:
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
      <small>Eu vou fazer um jogo com Hamtaro</small>
    </body>
</html>
```
  O html não é uma linguagem de programação e sim uma linguagem de marcação, e utilizamos as tags para avisar qual é o elemento que o nosso navegador deve redenrizar. As tags começam com < e terminam com >. Essas tags marcam os elementos. 
    
  A tag principal é a <html> ela deve ser colocada qualquer página da web e deve sempre encerrar a página com </html>, as outras tags vão dentro dela, como é mostrado no código acima.
  
A tag <head> é um elemento que contém informações sobre o documento que não são mostradas na tela e a tag <body> é um elemento que contém tudo o que é exibido como parte de uma página de um site.
    
Para ver mais tags e sua usagem indicamos o site com a lista a seguir: https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5/HTML5_element_list

## CSS (Cascading Stylesheets)

Até agora o seu html está muito "preto e branco", que tal colorirmos nossa página web?

Vamos lá na nossa pastinha do projeto (tutorial-jsladies), se não souber onde está você pode fechar o seu Terminal/CMD e abrir e rodaro comando:
```
cd tutorial-jsladies
```
Agora que temos um local para inicar o nosso projeto, vamos criar nosso primeiro arquivo, para isso rode o seguinte comando:
```
touch main.css
```
Esse comando acima criou um arquivo css. 

