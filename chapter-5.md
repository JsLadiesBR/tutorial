# Capitulo 5 - Colocando no ar.

## Capítulo 8 - Git e GitHub Pages

Antes de terminar o tutorial, vamos colocar o seu jogo no ar?

Para tornar público o que você acabou de desenvolver, precisaremos de duas ferramentas: o Git e o GitHub Pages.

* **Git**: é um sistema de controle de versão de arquivos. Ele evita problemas de gerenciamento de código e de organização. O Git traz diversos benefícios para quem está desenvolvendo um projeto, mas neste momento, o que você precisa saber é:
* O Git mantém um histórico de todas as suas alterações. Ele faz isso porque se acontecer algum problema no seu código, por exemplo, você pode voltar para as versões anteriores.
* O Git ajuda você a gerenciar e organizar códigos, sendo fundamental para trabalhos mais complexos.
* **GitHub**: é uma plataforma de hospedagem de códigos-fonte, ou seja, uma espécie de armazenamento de código em nuvem, usada por milhões de desenvolvedores no mundo todo. Assim como o Git, ele possui um monte de vantagens e as principais são:
* O GitHub utiliza o sistema de controle de versão Git. Isso quer dizer que você poderá acessar todo o seu histórico de alterações remotamente.
* O GitHub possui uma ferramenta chamada GitHub Pages, que permite a criação de páginas web gratuitamente.

Agora que você já sabe o que é Git e GitHub, você já pode começar a usá-los no seu projeto!

## 1. Instale o Git

Se você já possui o Git instalado, você pode pular esse passo. Senão, acesse [https://git-scm.com/downloads](https://git-scm.com/downloads), faça o download de acordo com o seu sistema operacional e siga as instruções para instalação.

## 2. Crie um usuário no GitHub

Se você já tem acesso ao GitHub, você pode pular esse passo. Senão, é só acessar o site [https://github.com/](https://github.com/) e criar uma conta.

## 3. Crie um repositório no GitHub

Um repositório é um lugar onde você hospedará os arquivos do seu site. Logo, depois de fazer o login no GitHub, clique em `start a project` e dê um nome para o seu repositório, obedecendo o seguinte formato:

`seu_nome_de_usuário.github.io`

Perceba que o nome do seu repositório será também a url do seu site.

## 4. Prepare o envio das suas alterações

Após criar o repositório, entre no terminal e navegue até a pasta que possui os arquivos que você criou. Quando você estiver na pasta, digite os seguintes comandos no terminal:

`git init` - com este comando, você estará iniciando o Git no seu projeto.

`git remote add origin https://github.com/seu_nome_de_usuário/nome_do_seu_repositório.git` - aqui você irá conectar o seu repositório local com um remoto, que foi o que você criou no GitHub.

`git add --all` - aqui você irá adicionar todos os seus arquivos ao Git.

`git commit -m "Adicionando arquivos do meu primeiro site"` - aqui você irá salvar um registro das alterações feitas, junto com uma mensagem que descreve o que foi feito.

`git push -u origin master` - aqui você irá subir as alterações feitas para o seu repositório remoto. Com esse comando, tudo o que foi feito estará disponível na sua conta do GitHub.

## 5. Acesse o seu site

Agora que você já hospedou o seu repositório no GitHub, é só entrar na url que você criou. Veja que tudo o que você fez até agora já está lá :\)

