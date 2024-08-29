# Projeto Integrador: Desenvolvimento de Sistemas Orientado a Dispositivos Móveis e Baseados na Web

[Link para mais informações.](https://docs.google.com/document/d/17MSeyZ_V7msfRx7pNkIjg6NWFoZS1p0K7r8---yF7NQ/edit)

## Backend

### Configurar ambiente virtual Python

#### Criar um ambiente virtual

```shell
python -m venv .venv
```

#### Entrar no ambiente virtual

```shell
source .venv/bin/activate
```

#### Instalar os pacotes necessários

```shell
pip install -r requirements.txt
```

### Configurar banco de dados 

#### Executar migrate para criar as tabelas

```shell
python manage.py migrate
```

#### Criar Super Usuário

```shell
python manage.py createsuperuser
```

### Rodar a aplicação

#### Iniciar o servidor

```shell
python manage.py runserver
```

#### Abrir aplicação no navegador

- Acessar aplicação link [http://localhost:8000/](http://localhost:8000/)
- Administração no link [http://localhost:8000/admin/](http://localhost:8000/admin/) 
- API no link [http://localhost:8000/api/](http://localhost:8000/api/) 

## Frontend

# Projeto Autismo e Apoio

## Visão Geral

Este projeto tem como objetivo criar um aplicativo voltado para o apoio de crianças, pais e cuidadores relacionados ao Transtorno do Espectro Autista (TEA). O aplicativo oferece uma variedade de recursos, incluindo informações sobre o autismo, vídeos educativos, jogos, e um localizador de clínicas.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas:

- **backend/**: Contém o código relacionado ao backend da aplicação.
- **Teste Autismo Responsivo 2/**: Diretório para testes de responsividade da aplicação.
- **src/**: Contém os arquivos principais, como imagens, scripts e outros recursos.
- **README.md**: Este arquivo, contendo as instruções e informações sobre o projeto.

## Funcionalidades Principais

- **Informações sobre o Autismo**: Seção dedicada a fornecer informações detalhadas sobre o TEA.
- **Vídeos Educativos**: Conteúdo multimídia para educar sobre autismo.
- **Jogos**: Jogos educativos voltados para o desenvolvimento de habilidades em crianças autistas.
- **Localizador de Clínicas**: Ferramenta para encontrar clínicas e profissionais especializados.

## Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (para executar scripts e gerenciar dependências)
- [Git](https://git-scm.com/) (para clonar o repositório)
- [MongoDB](https://www.mongodb.com/) (se for necessário para o backend)

### Passos de Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

### Navegue até o diretório do projeto:

```bash
cd nome-do-diretorio

npm install

npm start
### Acesse o frontend via navegador:

- Abra `index.html` no seu navegador ou inicie um servidor local para servir a aplicação.

## Uso

- **Página de Login:** O usuário pode acessar o sistema inserindo suas credenciais na página de login.
- **Página de Cadastro:** Para novos usuários, é possível se cadastrar na plataforma.
- **Navegação:** Explore as seções de informações, vídeos, jogos, e o localizador de clínicas.


