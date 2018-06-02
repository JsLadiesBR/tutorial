# Capitulo 3 - Introdução ao JS

## Introdução ao JavaScript

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.

### Meu primeiro comando com JavaScript!

Abra seu navegador \(Google Chrome\) e busque pela ferramenta de desenvolvimento \(tecle **F12**\). Busque pela aba **console**, é nessa aba que seguiremos com o nosso tutorial.

Dentro do console é possivel executar qualquer código JavaScript, então vamos começar por um bem básico

Digite no seu console a seguinte operação:

```javascript
15 + 34
```

O retorno deverá ser: `< 49`

Como você pode ver as operações matemáticas podem ser compreendidas e calculadas pelo console do navegador. Você também pode tentar outros comandos como:

```javascript
5 - 1
```

```javascript
34 / 4
```

```javascript
9 * 8
```

### Conhecendo uma String!

String é uma sequencia de caracteres, você pode criar sua primeira string da seguinte forma:

```javascript
"JS Ladies!"
```

Uma string será sempre iniciada com aspas duplas ou simples `"` ou `'`

Você também pode saber o tamanho de uma string dessa forma:

```javascript
"JS Ladies!".length
```

`< 10`

O tamanho da string condiz com a quantidade de caracteres que existe entre as aspas. O espaço em branco também é contado como caractere.

### Variáveis! As caixinhas que guardam informações!

Uma variável na programação representa um espaço na memória do computador que pode ser usado para guardar informações. Podemos fazer uma abstração sobre isso! Imagine que uma variável é uma caixa, nós temos diversas caixas para propositos diferentes, algumas guardam sapatos, outras guardam brinquedos e por aí vai. Vamos representar nossa abstração em forma de código.

```javascript
caixa1 = "sapatos"
```

```javascript
caixa2 = "brinquedos"
```

```javascript
caixa3 = "livros"
```

```javascript
caixa4 = 3 * 4
```

```javascript
caixa5 = true
```

Criamos 3 variáveis, cada uma está guardando um valor graças ao simbolo do `=`, que tem como função atribuir valores a uma variável.

### Listas ou Arrays

Para criar uma lista é tranquilo, basta fazer dessa forma:

```javascript
numeros = []
```

E assim teremos uma lista vazia chamada `numeros`.

As listas são usadas para guardar vários valores, agrupados, geralmente com alguma afinidade ou propósito. Vamos supor que você tenha uma lista de produtos que deseja comprar no mercado. Para representar essa lista de produtos no JavaScript seria assim:

```javascript
produtos = ['abacaxi', 'laranja', 'feijão', 'maionese', 'açucar']
```

Podemos fazer uma série de coisas com uma lista, assim como nas strings também conseguimos ver o tamanho de uma lista

```javascript
produtos.length
```

O retorno desse comando será: `5`

Também podemos ordenar de forma alfabética a nossa lista atraves desse comando:

```javascript
produtos.sort()
```

E o retorno será: `< ["abacaxi", "açucar", "feijão", "laranja", "maionese"]`

E se quisermos ordenar ela de forma inversa, podemos usar esse comando:

```javascript
produtos.reverse()
```

E teremos:

```javascript
["maionese", "laranja", "feijão", "açucar", "abacaxi"]
```

E se quisermos adicionar um novo produto na nossa lista? Podemos fazer dessa forma:

```javascript
produtos.push('café')
```

Como fizemos um comando de inverter os elementos da nossa lista anteriormente, o resultado após a adição do novo produto fica sendo:

```javascript
["maionese", "laranja", "feijão", "açucar", "abacaxi", "café"]
```

O comando push adiciona sempre um novo elemento no final de uma lista.

## Comparando coisas

Na programação a comparação é algo essencial. Então vamos começar por comparação de números. Faça as seguintes comparaçes:

```javascript
5 > 6
```

```javascript
5 < 6
```

```javascript
10 == 8
```

```javascript
20 * 5 < 30 * 3
```

```javascript
35 != 2
```

Colocamos dois sinais de igual `==` para comparar se os números são iguais. Como já foi visto usamos um único = para atribuir valores a variáveis. Você sempre, sempre precisará colocar `==` quando quiser verificar se os valores são iguais.

Ainda temos outros operadores para comparação são eles:

O maior e igual:

```javascript
6 >= 12/2
```

E o menor e igual

```javascript
 3 <= 2
```

Tente esses também:

```javascript
(6 > 2) && (2 < 3)
```

```javascript
(3 > 2) && (2 < 1)
```

```javascript
(3 > 2) || (2 < 1)
```

```javascript
! (3 > 2 )
```

Acho que agora complicou um pouquinho, mas não se assuste! Esses novos operadores `&&` e `||` são utilizados quando temos mais de uma comparação na condição que queremos afirmar ao computador.

* `&&` - É o nosso operador **and** ou **e**
* `||` - É o nosso operador **or** ou **ou**
* `!` - É o nosso operador de negação **not** ou **não**

Vamos tentar trazer isso para o nosso mundo, usamos _e_ ou _ou_ em nossas afirmações a todo momento, por exemplo:

* o gato é preto **e** branco
* o gato é preto **ou** branco

Perceba que o sentido das frases muda de acordo com o operador que é usado e isso não é diferente na programação.

No caso do `!` ele negará uma condição. Se a condição tiver uma resposta verdadeira ele vai transformar em falsa ou se a condição tiver uma resposta falsa ele vai tornar ela verdadeira. Basta testar:

```javascript
3 > 2
```

```javascript
! 3 > 2
```

## IF, ELSE e ELSE IF

Anteriormente vimos como criar comparações entre valores, agora vamos aprofundar um pouco mais e vamos criar sentenças condicionais. Essas condicionais podem ser feitas com as seguintes palavras **if**, **else** e **else if**

* **if**, é o **se**
* **else** é o **se não**
* **else if** é o **se não se**

No nosso dia a dia também utilizamos bastante essas palavras, quase a todo momento estamos condicionando algo, por exemplo:

* **se** chover não irei ao colégio
* **se não** chover e **se** houver onibus, irei ao colégio
* **se não** chover irei ao colégio

Vamos tentar codificar em JavaScript essas condicionais em um código:

```javascript
estaChovendo = true
temOnibus = false

// Se está chovendo e não tem onibus...
if (estaChovendo && !temOnibus) {
  console.log('não irei ao colégio pq nao tem onibus e está chovendo')

// mas...
// se tem onibus...
} else if (temOnibus) {
  console.log('está chovendo mas irei ao colegio pq tem onibus')

// mas...
// se não...
} else {
  console.log('irei ao colegio')
}
```

Tente trocar os valores das variáveis **estaChovendo** e **temOnibus** e veja como funcionará o código.

## Funções

Antes de falarmos sobre funções, quantas vezes você precisou repetir o código do exemplo anterior para verificar todas possibilidades? Se você testou todas elas, acredito que precisou copiar e colar o mesmo código várias vezes. Isso ficou enorme ou confuso?

As funções podem te ajudar nesse caso!

Com funções você pode transformar todas aquelas linhas em apenas uma! Incrível, não é?

Mas você deve estar se perguntando: "Como isso é possível?"

É possível! Apenas nomeando e isolando um trecho de código!

As funções são utilizadas para encapsular pequenas funcionalidades e garantir que o programador possa fazer o reuso de código.

Mas chega de bla-bla-bla e vamos a prática!

Para definir uma função, temos:

```javascript
 function funcaoSemParametros () { // escreva aqui dentro o seu código }

 // ou podemos escrever assim...
 function funcaoComParametros (parametros) { // escreva aqui dentro o seu código }
```

A palavra **function** é mais uma palavra reservada do JavaScript, com ela podemos declarar uma função. Em seguida vem o nome que queremos dar a nossa função \(**funcaoSemParametros**\), seguido do nome temos por obrigação os parenteses `()` que indicam o que podemos passar para dentro do escopo dessa função e por fim as chaves `{ }` que vão delimitar a àrea/escopo da função.

Então vamos transformar o exemplo do topico anterior em uma função:

```javascript
 fuction irParaEscola (estaChovendo, temOnibus) {
   if (estaChovendo && !temOnibus) {
     console.log('não irei ao colégio pq nao tem onibus e está chovendo')
   } else if (temOnibus) {
     console.log('está chovendo mas irei ao colegio pq tem onibus')
   } else {
     console.log('irei ao colegio')
   }
 }
```

Agora que criamos a nossa função, podemos usa-la:

```javascript
 irParaEscola( true, false )
```

## Iteração ou Repetição

Toda linguagem de programação permite que o programador possa iterar ou repetir determinado bloco de código quantas vezes for necessário. Isso é feito muitas vezes através do **for**, o comando do "enquanto". Vamos dar uma olhada:

```javascript
for ( i = 0 ; i < 10 ; i++ ) {
 console.log(i + "º iteração.")
}
```

* **for** é a nossa palavra reservada e com ela podemos iniciar um laço apartir da condição que virá dentro do `()`
* **i = 0** é o parametro inicial
* **i &lt; 10** é a condição para finalizar a repetição do laço
* E por fim o **i++** que é o parametro que incrementará mais 1 ao valor da variavel **i**

Antes de finalizarmos vamos analisar e revisar o seguinte código:

```javascript
crystalGems = ['Garnet', 'Pearl', 'Amethyst', 'Rose', 'Steven']
tamanho = crystalGems.length

function ola (nome) {
 console.log( "Olá! " + nome )
}

for (i = 0; i < tamanho ; i++) {
 ola( crystalGems[i] )
}
```

Chegamos ao final da nossa breve introdução ao JavaScript, existe muito mais assunto para ser visto do que esses tópicos desse artigo. Mas não desanime! Esses tópicos são o suficiente e te ajudarão a construir nosso projeto de jogo no próximo cápitulo!

## Referências

### O que é JavaScript

[https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First\_steps/O\_que\_e\_JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)

