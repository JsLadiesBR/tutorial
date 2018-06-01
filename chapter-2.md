# Capitulo 2 - HTML & CSS

Agora que sabemos como a web funciona, vamos começar por a mão na massa? Uma página web possui 3 pilares: HTML, CSS E Javascript. O HTML é a estrutura do site, CSS é aparência e o Javascript é o que anima e faz as funcionalidades do site.

## HTML \(Hypertext Markup Language\)

Agora vamos criar um arquivo html para ver na prática como ele funciona.

Para inicar a construção do nosso projeto, pelo seu Terminal \(Linux ou MAC\) ou CMD \(Windows\) digite o seguinte comando:

```text
mkdir tutorial-jsladies
```

O que esse comando acima fez foi criar uma pasta para nós adicionarmos os nossos arquivos. O próximo comando a ser rodado é:

```text
cd tutorial-jsladies
```

Esse comando acima nos leva para dentro da pasta.

Agora que temos um local para inicar o nosso projeto, vamos criar nosso primeiro arquivo, para isso rode o seguinte comando:

```text
touch index.html
```

Esse comando acima criou um arquivo html.

Vamos abrir agora esse arquivo com o seu com um editor de sua preferência \(Sublime, VSCode, Atom e etc...\) Caso você não saiba onde você criou o arquivo você pode pelo seu Terminal \(Linux ou MAC\)/cmd \(Windows\) descobrir onde você está digitando o seguinte comando:

Terminal \(Linux ou MAC\):

```text
pwd
```

CMD \(Windows\):

```text
cd
```

Com o arquivo aberto no editor, vamos começar a criar a estrutura do nosso site:

```markup
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hamtaro - { JS Ladies }</title>
    </head>

    <body>
      <h1>Minha primeira Página</h1>
      <small>Eu vou fazer um jogo com Hamtaro</small>
    </body>
</html>
```

Abra agora o seu arquivo html no seu navegador, ele apareceu com algumas coisas que você escreveu no html, né? Então vamos explicar o porque...

O html não é uma linguagem de programação e sim uma linguagem de marcação, e utilizamos as tags para avisar qual é o elemento que o nosso navegador deve redenrizar. As tags começam com &lt; e terminam com &gt;. Essas tags marcam os elementos.

A tag principal é a  ela deve ser colocada qualquer página da web e deve sempre encerrar a página com, as outras tags vão dentro dela, como é mostrado no código acima.

A tag  é um elemento que contém informações sobre o documento que não são mostradas na tela e a tag  é um elemento que contém tudo o que é exibido como parte de uma página de um site.

Para ver mais tags e sua usagem indicamos o site com a lista a seguir: [https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5/HTML5\_element\_list](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5/HTML5_element_list)

## CSS \(Cascading Stylesheets\)

Até agora o seu html está muito "preto e branco", que tal colorirmos nossa página web?

Vamos lá na nossa pastinha do projeto \(tutorial-jsladies\), se não souber onde está você pode fechar o seu Terminal/CMD e abrir e rodar o comando:

```text
cd tutorial-jsladies
```

Agora que estamos na pasta que desejamos, você deve criar uma pasta chamada "assets", se não souber como fazer isso pelo seu terminal ou cmd, segue a cola:

```text
mkdir assets
```

Agora que temos a estrutura de onde fica arquivos css e js, vamos criar nosso primeiro arquivo css, para isso rode o seguinte comando:

```text
touch main.css
```

Vamos abrir agora esse arquivo com o seu com um editor de sua preferência \(Sublime, VSCode, Atom e etc...\) Com o arquivo aberto no editor, vamos adicionar o arquivo css no nosso arquivo html \(como é mostrado na linha 6\):

```markup
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Hamtaro - { JS Ladies }</title>
        <link rel="stylesheet" href="main.css">
    </head>

    <body>
      <h1>Minha primeira Página</h1>
      <small>Eu vou fazer um jogo com Hamtaro</small>
    </body>
</html>
```

Agora vamos adicionar as seguintes linhas no nosso arquivo arquivo css:

```css
body {
  background-color: yellow;
}

h1 {
  color: purple;
  border: 1px solid black;
}

p {
  color: yellow;
}
```

Abra agora o seu arquivo html no seu navegador, ele não está com cores diferentes? Vamos entender o que aconteceu?

O css é um documento estruturado usando uma linguagem de marcação, no nosso caso o nosso html. Ele trabalha selecionando os elementos no seu html e aplicando as formatações que você desejar.

Para ver mais sobre formatações com css o site a seguir: [https://developer.mozilla.org/pt-BR/docs/Aprender/CSS](https://developer.mozilla.org/pt-BR/docs/Aprender/CSS)

