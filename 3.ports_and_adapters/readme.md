# Notas da aula

# Ambiente

- ```trocar versão do nome: nvm install v14.15.0```
- ```yarn init -y```
- ```yarn add typescript jest @types/jest ts-node ts-jest```
- ```npx tsc --init```
- ```npx ts-jest config:init```
- ```yarn add express @types/express pg-promise axios```

# Ports and Adapters

- Quando alguém quer interagir com a aplicação utiliza um adaptador específico para cada tipo de tecnologia  (REST, GraphQL, gRPC, Queue, CLI, Test, MVC), sem que a aplicação saiba qualquer detalhe sobre a forma de acesso.
> Driver Adapters: REST, GraphQL, gRPC, Queue, CLI, Test, MVC

- Quando a aplicação quer interagir com alguém, ela também utiliza um adaptador específico para cada tipo de tecnologia (SQL, API, File System, Queue), sem que a aplicação saiba qualquer detalhe sobre a forma de acesso.
> Driven Adapters: SQL, API, File System, Queue

- Porta: contrato dos dois lados.

# Test double

- É um padrão que tem o objetivo de substituir um DOC (depended-on-component) em um determinado tipo de teste por motivos de performance ou segurança.
> Pode resolver um problema de repetição. Exemplo: converter o preço em dólar para real, onde tem-se a variação do dólar.

# Test Pattern

- Dummy: objetos criados apenas para complementar a lista de parâmetros que são necessários passar para invocar um determinado método.

- Stubs: objetos que retornam respostas prontas, definidas para um determinado teste, por questão de performance ou segurança.
  - Exemplo: testar um método que executa a criação de um pedido e precisa pegar a cotação do dólar.

- Spy: Objetos que "espionam" a execução do método e armazenam os resultados para verificação posterior. Exemplo: quando eu executar o método fazer pedido preciso saber se o método envia email foi invocado internamente e com quais parâmetros.

- Mock: similar ao stub e spy. Seta expectativa no mock object. Permitem que você diga exatamente o que quer que ele faça e o teste vai quebrar se isso não acontecer.

- Fake: Objetos que tem implementações que simulam o funcionamento da instância real, que seria utilizada em produção (exemplo: uma base de dados em memória).