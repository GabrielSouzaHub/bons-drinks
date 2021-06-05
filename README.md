# Projeto Bons Drinks 

<p align="center">
    <img src ="https://images5.alphacoders.com/462/thumb-1920-462280.jpg" alt="Bons Drinks estabelecimento">
</p>
   
## 📖 Sumário

<details>
<summary>Veja mais</summary>

1.  [O que é o projeto](https://github.com/GabrielSouzaHub/projetoStone#O-que-%c3%a9-o-projeto)
2.  [O que faz](https://github.com/GabrielSouzaHub/projetoStone#O-que-faz)
3.  [O que é uma api](https://github.com/GabrielSouzaHub/projetoStone#O-que-%c3%a9-uma-api)
4.  [Netfly](https://github.com/GabrielSouzaHub/projetoStone#Heroku)
5.  [Como baixar e rodar o projeto](https://github.com/GabrielSouzaHub/projetoStone#Como-baixar-e-rodar-o-projeto)
6.  [Rotas disponíveis](https://github.com/GabrielSouzaHub/projetoStone#Rotas-dispon%c3%adveis)
7.  [Tecnologias utilizadas](https://github.com/GabrielSouzaHub/projetoStone#Tecnologias-utilizadas)

</details>

# O que é o projeto

Este projeto é o front-end de uma aplicação web chamada [Bons Drinks](https://bons-drinks-gabriel.netlify.app), cujo objetivo é a pesquisa de drinks e suas informações.

# O que faz

Esta aplicação utiliza requisições a API [The Cocktail DB](https://www.thecocktaildb.com/api.php) para a busca de drinks, modo de preparo e ingredientes. Com esta aplicação podemos pesquisar por drinks populares, pelo nome e tipos de drinks, como, alcóolico, não alcóolico, tipo de copo que levam, entre outros.

# O que é uma api

API é um conjunto de padrões ou rotinas que são disponibilizadas por uma aplicação, possibilitando que outra aplicação possa consumir a API de forma que tire proveito de suas funcionalidades.

# Netfly

Netfly é uma plataforma que disponibiliza em nuvem a hospedagem de uma aplicação front-end.<br>
[Acesse seu deploy](https://bons-drinks-gabriel.netlify.app) para ver seu funcionamento.

# Como Baixar e rodar o Projeto

1. 📌 Clone o projeto

```Shell
git clone https://github.com/GabrielSouzaHub/projetoStone.git
```

2. 📌 Em seu terminal. Instale as dependências

```Shell
yarn
```

3. 📌 Para rodar o projeto utilize

```Shell
yarn start
```

4. 📌 Acesse

```Shell
http://localhost:3000
```

# Rotas disponíveis

## 📌 "/"

> Página principal 
> <br> Possui carrossel de imagens

## 📌 "/drinks"

> Página de drinks 
> <br> Possui navegação para drinks populares e pesquisa de drinks

### 📍 "/drinks/drinkspop"

> Página de drinks populares
> <br> Possui título, imagem e acesso a modal de drinks ao clicar na foto

### 📍 "/drinks/drinkspesquisa"

> Página de pesquisar drinks
> <br> Possui barra de pesquisa para pôr nome do drink e opções para categoria de drinks

## 📌 "/sobre"

> Página de pesquisar drinks
> <br> Possui barra de pesquisa para pôr nome do drink e opções para categoria de drinks

## 📌 "/nossotime"

> Página do nosso time
> <br> Possui fotos de todos integrantes que desenvolveram esta aplicação web

## 📌 "/contato"

> Página de contato
> <br> Possui 3 campos para preenchimento de dados e botão para enviar uma mensagem

# Tecnologias utilizadas
1. [React](https://pt-br.reactjs.org)
2. [API](https://www.thecocktaildb.com/api.php)
3. [Netfly](https://www.netlify.com)