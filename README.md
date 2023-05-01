# GUIA DE DEPLOY WEB-PUENTES
Este guia descreve os passos detalhados e organizados para implantar uma atualização no sistema de Pontes.
-----

Pré-requisitos
Antes de começar, certifique-se de que você tenha acesso à VPN e às credenciais corretas.

-----

# Passo 1
Passo 1: Conectar à VPN
Conecte-se à VPN usando as seguintes credenciais:
```
Usuário: german.molina
Senha: 0gB4EMX3
```

-----
# Passo 2

Passo 2: Acessar o vSphere
Após conectar-se à VPN, acesse o vSphere.

-----
# Passo 3

Passo 3: Conectar à máquina virtual
Utilize a ferramenta Web (no próprio navegador) para se conectar à máquina virtual com as credenciais a seguir:

```
Usuário: puentes
Senha: puentes
```

-----
# Passo 4

Passo 4: Navegar até o diretório do projeto
Abra o terminal e navegue até o diretório do projeto:

```
cd /home/puentes/web-puentes/web-puentes-next
```
-----
# Passo 5

Passo 5: Atualizar o repositório
Execute os seguintes comandos para atualizar o repositório:

```
git add .
git stash
git pull
```

-----
# Passo 6

Passo 6: Instalar dependências (se necessário)
Caso seja necessário, instale as dependências do projeto executando:

```
npm install
```

-----

# Passo 7

Passo 7: Construir o projeto
Execute o comando a seguir para construir o projeto:

```
npm run build
```

-----

# Passo 8

Passo 8: Reiniciar o serviço
Reinicie o serviço utilizando o PM2:

```
pm2 restart 0
```
------

# Passo 9

Passo 9: Iniciar o serviço (se não funcionar)
Caso o passo anterior não funcione, inicie o serviço com o comando a seguir:

```
pm2 start npm --name "nome_do_aplicativo" -- start
````

------

Ao seguir estes passos, você terá implantado com sucesso a atualização do sistema de Pontes.