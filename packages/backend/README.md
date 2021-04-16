# softcenter-api

    Projeto de API Rest para funcionalidades de autenticação, pagamento e docfis. 
    Consulte a rota main (url/api) para ver como usar.

---
## Requirements

    Instalar o Docker CE para Desktop.

---
## Install

    $ git clone https://souza-softcenter@bitbucket.org/softcenterscrum/softcenter-api.git
    $ cd softcenter-api

## Configure app

    É necessário configurar as variáveis de ambiente:

    - Servidor
        - DB_URL_CUSTOMERS
        - DB_URL_DOCFIS
        - SERVER_PORT
    - Recuperação de senha
        - PASSWORD_RECOVERY_EMAIL
        - PASSWORD_RECOVERY_PASSWORD
        - PASSWORD_RECOVERY_HOST
        - PASSWORD_RECOVERY_PORT
        - PASSWORD_RECOVERY_SECRETKEY
        - PASSWORD_RECOVERY_URL
    - Segurança
        - SECURITY_SECRETKEY
        - SECURITY_ACTIVATION_KEY
        - SECURITY_ACTIVATION_URL
    - DFe (NFe, CTe)
        - XML_FORMAT
        - NFE_WS_ENVIRONMENT
        - NFE_WS_HOSTNAME
        - NFE_WS_PORT
        - NFE_WS_PATH
        - NFE_XML_PATH
        - CTE_WS_ENVIRONMENT
        - CTE_WS_HOSTNAME
        - CTE_WS_PORT
        - CTE_WS_PATH
        - CTE_XML_PATH
    - GetNet 
        - GETNET_BASE_URL
        - GETNET_SELLERID
        - GETNET_CLIENTID
        - GETNET_CLIENT_SECRET_KEY
        - GETNET_AUTHSTRING
    - DOCFIS
        - DOCFIS_URL
        - AUTH_URL

    As collections do mongoDB são criadas pela aplicação.
    Se for adicionar senha no mongodb, deve criar antes de iniciar a aplicação(docker).

## Running the project on Production

    $ yarn prod

## Running the project on Development

    $ yarn dev

## Testing the project

    $ yarn test

## Shows logs in docker

    $ yarn logs
    