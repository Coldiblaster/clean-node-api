<h2 align="center">
  <br>
  API completa com Typescript utilizando TDD, Clean Architecture, Design Patterns e SOLID  
  <br>
</h2>

<p align="center">
  <a href="#introdução">Introdução</a> 
  <a href="#bibliotecas-clipboard">Bibliotecas</a> 
  <a href="#atalhos-para-o-git-octocat">Atalhos para o Git</a> 
  <a href="#comandos-interessantes-computer">Comandos interessantes</a> 
</p>

## Introdução

<p>Essa API faz parte do treinamento do professor Rodrigo Manguinho (Mango) na Udemy.</p>
<p align="justify">
O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.
</p>

#### Curso sendo realizado: https://www.udemy.com/course/tdd-com-mango/

## Bibliotecas :clipboard:
- [x] git-commit-msg-linter (Para padronizar os commits utilizamos está biblioteca para garantir que nossos commit irão respeitar a seguinte documentação: https://www.conventionalcommits.org/en/v1.0.0/)
- [x] husky (Com ela é possível configurar comandos antes de executar algum commit)
- [x] linst-staged (É utilizada em conjunto com o husky, sem ela qualquer comando iria verificar todos os arquivos, mais se ela for implementada irá rodar somente nos arquivos que forem commitados)
- [x] Jest (Framework de testes de JavaScript com foco na simplicidade, pode ser usado tanto no front-end quanto back-end)
- [x] npm-check (Atualiza as dependências que o desenvolvedor achar necessário)

## Atalhos para o Git :octocat:
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

## Comandos interessantes :computer:
```bash
# Commitar encima do ultimo commit feito
$ git commit --amend --no-edit
```
