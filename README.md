# Projeto Integrador: Desenvolvimento de Sistemas Orientado a Dispositivos Móveis e Baseados na Web

## Backend

[Link para mais informações.](https://docs.google.com/document/d/17MSeyZ_V7msfRx7pNkIjg6NWFoZS1p0K7r8---yF7NQ/edit)

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

Acessar o link [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Frontend

**…**