# Introdução ao JavaScript

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.

## Meu primeiro comando com JavaScript!

Abra seu navegador (Google Chrome) e busque pela ferramenta de desenvolvimento (tecle **F12**).
Busque pela aba **console**, é nessa aba que seguiremos com o nosso tutorial.

Dentro do console é possivel executar qualquer código JavaScript, então vamos começar por um bem básico

Digite no seu console a seguinte operação:

``` 
15 + 34
```

O retorno deverá ser: `< 49`

Como você pode ver as operações matemáticas podem ser compreendidas e calculadas pelo console do navegador. 
Você também pode tentar outros comandos como:

```
5 - 1
```

```
34 / 4
```

```
9 * 8
```

## Conhecendo uma String!

String é uma sequencia de caracteres, você pode criar sua primeira string da seguinte forma:

```
"JS Ladies!"
```

Uma string será sempre iniciada com aspas duplas ou simples `"` ou `'`

Você também pode saber o tamanho de uma string dessa forma:

```
"JS Ladies!".length
```

`< 10`

O tamanho da string condiz com a quantidade de caracteres que existe entre as aspas. O espaço em branco também é contado como caractere.


## Variáveis! As caixinhas que guardam informações!

Uma variável na programação representa um espaço na memória do computador que pode ser usado para guardar informações.
Podemos fazer uma abstração sobre isso! Imagine que uma variável é uma caixa, nós temos diversas caixas para propositos diferentes, algumas guardam sapatos, outras guardam brinquedos e por aí vai.
Vamos representar nossa abstração em forma de código.

```
caixa1 = "sapatos"
```

```
caixa2 = "brinquedos"
```

```
caixa3 = "livros"
```

```
caixa4 = 3 * 4
```

```
caixa5 = true
```

Criamos 3 variáveis, cada uma está guardando um valor graças ao simbolo do `=`, que tem como função atribuir valores a uma variável.

## Listas ou Arrays

Para criar uma lista é tranquilo, basta fazer dessa forma:

```
numeros = []
```

E assim teremos uma lista vazia chamada `numeros`.

As listas são usadas para guardar vários valores, agrupados, geralmente com alguma afinidade ou propósito. Vamos supor que você tenha uma lista de produtos que deseja comprar no mercado. Para representar essa lista de produtos no JavaScript seria assim:

```
produtos = ['abacaxi', 'laranja', 'feijão', 'maionese', 'açucar']
```

Podemos fazer uma série de coisas com uma lista, assim como nas strings também conseguimos ver o tamanho de uma lista

```
produtos.length
```

O retorno desse comando será: `5`

Também podemos ordenar de forma alfabética a nossa lista atraves desse comando:

```
produtos.sort()
```

E o retorno será: `< ["abacaxi", "açucar", "feijão", "laranja", "maionese"]`

E se quisermos ordenar ela de forma inversa, podemos usar esse comando:

```
produtos.reverse()
```

E teremos:

```
["maionese", "laranja", "feijão", "açucar", "abacaxi"]
```

E se quisermos adicionar um novo produto na nossa lista? Podemos fazer dessa forma:

```
produtos.push('café')
```

Como fizemos um comando de inverter os elementos da nossa lista anteriormente, o resultado após a adição do novo produto fica sendo:

```
["maionese", "laranja", "feijão", "açucar", "abacaxi", "café"]
```

O comando push adiciona sempre um novo elemento no final de uma lista.

# Comparando coisas

Na programação a comparação é algo essencial. Então vamos começar por comparação de números. Faça as seguintes comparaçes:

```
5 > 6
```

```
5 < 6
```

```
10 == 8
```

```
20 * 5 < 30 * 3
```

```
35 != 2
```

Colocamos dois sinais de igual `==` para comparar se os números são iguais. Como já foi visto usamos um único = para atribuir valores a variáveis. Você sempre, sempre precisará colocar `==` quando quiser verificar se os valores são iguais.

Ainda temos outros operadores para comparação são eles:

O maior e igual:
```
6 >= 12/2
```

E o menor e igual
```
 3 <= 2
```

Tente esses também:

```
6 > 2 && 2 < 3
```

```
3 > 2 && 2 < 1
```

```
3 > 2 || 2 < 1
```

Acho que agora complicou um pouquinho, mas não se assuste! Esses novos operadores `&&` e `||` são utilizados quando temos mais de uma comparação na condição que queremos afirmar ao computador.

- `&&` - É o nosso operador **and** ou **e**
- `||` - É o nosso operador **or** ou **ou**
- `!` - É o nosso operador de negação **not** ou **não**

Vamos tentar trazer isso para o nosso mundo, usamos *e* ou *ou* em nossas afirmações a todo momento, por exemplo:

- o gato é preto **e** branco
- o gato é preto **ou** branco

Perceba que o sentido das frases muda de acordo com o operador que é usado e isso não é diferente na programação.

# IF, ELSE e ELSE IF

Anteriormente vimos como criar comparações entre valores, agora vamos aprofundar um pouco mais e vamos criar sentenças condicionais. Essas condicionais são feitas com as seguintes palavras **if**, **else** e **else if**

- **if**, é o **se**
- **else** é o **se não**
- **else if** é o **se não se**

No nosso dia a dia também utilizamos bastante essas palavras, quase a todo momento estamos condicionando algo, por exemplo:

- **se** chover não irei ao colégio
- **se não** chover e **se** houver onibus, irei ao colégio
- **se não** chover irei ao colégio

Vamos tentar codificar em JavaScript essas condicionais em um pseudo-código:

```
estaChovendo = true
temOnibus = true

if (estaChovendo && !temOnibus) {
  // não irei ao colégio
} else if (temOnibus) {
  // irei ao colegio
} else {
  // irei ao colegio
}

```

 

## Referências

### O que é JavaScript
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript

### 
