# Projeto Integrador: Desenvolvimento de Sistemas Orientado a Dispositivos Móveis e Baseados na Web

Este projeto tem como objetivo criar um aplicativo voltado para o apoio de crianças, pais e cuidadores relacionados ao Transtorno do Espectro Autista (TEA). O aplicativo oferece uma variedade de recursos, incluindo informações sobre o autismo, vídeos educativos, jogos, e um localizador de clínicas.

[Link para mais informações.](https://docs.google.com/document/d/17MSeyZ_V7msfRx7pNkIjg6NWFoZS1p0K7r8---yF7NQ/edit)

## Funcionalidades Principais

- **Informações sobre o Autismo**: Seção dedicada a fornecer informações detalhadas sobre o TEA.
- **Vídeos Educativos**: Conteúdo multimídia para educar sobre autismo.
- **Jogos**: Jogos educativos voltados para o desenvolvimento de habilidades em crianças autistas.
- **Localizador de Clínicas**: Ferramenta para encontrar clínicas e profissionais especializados.

## Páginas da aplicação

- **Login:** O usuário pode acessar o sistema inserindo suas credenciais na página de login.
- **Cadastro:** Para novos usuários, é possível se cadastrar na plataforma.
- **Início:** Explore as seções de informações, vídeos, jogos, e o localizador de clínicas.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/) (para clonar o repositório)

## Instalação e configuração do projeto

### Configurar repositório 

Clonar o repositório utilizando HTTPS:

```shell
https://github.com/senac-pi-dispositivos-moveis/senac-pi-dispositivos-moveis.git
```
Ou utilizando SSH:
   
```shell
git@github.com:senac-pi-dispositivos-moveis/senac-pi-dispositivos-moveis.git
```

Entrar na pasta do projeto:

```shell
cd senac-pi-dispositivos-moveis
```

### Configurar ambiente virtual Python

#### Criar ambiente virtual

```shell
python -m venv .venv
```

Caso não funcione com `python`, você pode tentar com `python3`.

#### Entrar no ambiente virtual

```shell
source .venv/bin/activate
```

Caso seu ambiente seja Microsoft Windows, utilize:

```shell
.\venv\Scripts\activate
```

#### Instalar pacotes necessários

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
