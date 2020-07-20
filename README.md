<h2 align="center">
  <br>
  API completa com Typescript utilizando TDD, Clean Architecture, Design Patterns e SOLID  
  <br>
</h2>

<p align="center">
  <a href="#introdução">Introdução</a> 
</p>

## Introdução

<p>Essa API faz parte do treinamento do professor Rodrigo Manguinho (Mango) na Udemy.</p>
<p align="justify">
O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.
</p>

#### Curso sendo realizado: https://www.udemy.com/course/tdd-com-mango/

## Atalhos para o Git
Podemos configurar comandos de atalhos para o Git, iremos seguir os seguintes passos:

Primeiramente existem 3 níveis de configuração do git que podemos rodar no prompt:
- [x] git config --system (serve para a máquina toda, qualquer usuário)
- [x] git config --global (somente para o usuário logado);
- [x] git config --local (somente para um projeto local);

Agora iremos rodar os seguintes comandos:
- [x] git config --global core.editor code (Vai adicionar o visual code como editor);
- [x] git config --global --edit (Irá abrir o config via visual code);

Algums comandos interessantes para deixar como atalho:
```bash
[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    l = !git log --
    pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```
