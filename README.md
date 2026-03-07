# Visualizador de Perfil do GitHub

Aplicação web simples para buscar um usuário do GitHub e exibir informações do perfil junto com os repositórios mais recentes.

## Sobre o projeto

Este projeto consome a API pública do GitHub para mostrar:

- Nome, avatar e bio do usuário
- Quantidade de seguidores e seguindo
- Até 10 repositórios recentes
- Estatísticas de cada repositório: `Stars`, `Forks`, `Watchers` e linguagem principal

A busca pode ser feita clicando no botão **Buscar** ou pressionando **Enter** no campo de texto.

## Funcionalidades

- Busca de usuário por `username`
- Estado de carregamento (`Carregando...`)
- Tratamento de campo vazio
- Mensagem de fallback quando não há bio ou linguagem no repositório
- Layout responsivo para desktop e mobile
- Estilo visual com gradiente animado

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- GitHub REST API (`https://api.github.com`)

## Estrutura do projeto

```text
visualizador-perfil-github/
|- README.md
`- visualizador-perfil-github-1/
	|- index.html
	`- src/
		|- css/
		|  |- reset.css
		|  |- styles.css
		|  |- animations.css
		|  `- responsive.css
		`- js/
			|- githubApi.js
			|- index.js
			`- profileView.js
```

## Como executar

1. Clone o repositório.
2. Abra a pasta `visualizador-perfil-github-1`.
3. Execute o arquivo `index.html` no navegador.


## Como usar

1. Digite um nome de usuário do GitHub no campo de busca.
2. Clique em **Buscar** ou pressione **Enter**.
3. Visualize os dados do perfil e os repositórios retornados.

Exemplo para teste: `octocat`.

## Arquitetura rápida

- `src/js/index.js`: controla eventos da interface e orquestra a busca.
- `src/js/githubApi.js`: centraliza as chamadas à API do GitHub.
- `src/js/profileView.js`: renderiza loading, perfil e repositórios na tela.

## Pontos de atenção

- A API do GitHub pode aplicar limite de requisições sem autenticação.
- O projeto atualmente busca apenas 10 repositórios (`per_page=10`).

## Licença

Projeto desenvolvido como parte do curso DevQuest 2.0.