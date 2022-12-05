# DDD

- Evitar algo como Big Ball of Mud.
- Excelente para regras de negócio complexas, mas muito burocrático em CRUDS.
- Pode ser excelente para executar regras de negócio. Porém, para obter dados nem tanto - é pesado.

<br>

# Domínio

- Linguagem Ubiqua: deve ser refletida dentro do código fonte, não só em documentos, diagramas e glossário. ```Domain Expert & Technical Expert```

<br>

> Tipos de subdomínios

<br>

- ```Core ou Basic```: é o mais importante e que traz mais valor para a empresa. É onde você coloca seus maiores e melhores esforços.

- ```Support ou auxiliary```: complementa o core domain, sem ele não é possível ter sucesso no negócio.

- ```Generic```: é um subdomínio que pode ser delegado para outra empresa ou mesmo ser produto de mercado.

<br>

# Bounded Contexto

- É onde o problema é resolvido (implementação), está no espaço da solução. Forma um limite explícito dentro do qual um modelo de domínio será implementado.

- Nem todo bounded context precisa ser desenvolvido da mesma forma.

- A fronteira do bounded context é excelente para definir um microsserviço.

<br>

> Microsserviços

  - Vantagens:

    - Diversidade Tecnológica
    - Melhor controle sobre débito técnico
    - Facilidade em acompanhar evolução tecnológica
  
  <br>

  - Desafios:

    - Transação distribuída
    - Dificuldade em tratar e diagnosticar erros
    - Complexidade técnica mais alta

<br>

# Entities

- Abstraem regras de negócio independentes. Possuem identidade e estado, podendo sofrer mutações ao longo do tempo.

<br>

# Value Object

- Também contém regras de negócio independente, no entanto são identificados pelo seu valor, sendo imutáveis, ou seja, a sua mudança implica na sua substituição.

- Uma técnica para identificar value object é tentar substituí-lo por um tipo primitivo como uma string ou número. Exemplo: CPF posso trocar um inteiro, já um pedido não.

<br>

# Domain Service

- Realiza tarefas específicas do domínio, não tendo estado.

- É indicado quando a operação que você quer executar não pertence a uma entity ou a um value object.

- Num domain service, utilize operações que envolvem múltiplo objetos de domínio. Normalmente, quando uma operação afeta múltiplos objetos de domínio, não pertencendo a nenhum deles, ela deve ser descrita em um domain service.

<br>

# Aggregate

- É um agrupamento ou cluster de objetos de domínio como entities e value objects, estabelecendo o relacionamento entre eles, tratado como uma unidade.

- Geralmente tem uma raiz, que é um entidade.

- Grandes aggregates podem trazer desperdício de memória, além de sobrecarregar o banco de dados sem necessidade, já que nem sempre a camada da aplicação estará interessada em utilizá-lo na integra.

<br>

> Boas Práticas:

<br>

  - Criar aggregates pequenos, começar com uma entidade.

  - Referencie outros aggregates por identidade.

  - Mantenha apenas a referência para outros aggregates. Isso reduz a quantidade de memória e o esforço que o repositório faz para recuperá-los.

<br>

# Repositories

- É uma extensão do domínio, responsável por realizar a persitência dos aggregates, separando o domínio da infraestrutura.

<br>

# Application Service

- Similar ao UseCase do CA.

- É a API do Bounded Context, expondo operações de negócio relevantes para os clientes da aplicação. 

- Atua como uma fachada para os clientes que podem ser uma API, GraphQL ou GRPC, CLI, fila...

- Não devem existir regras de negócio dentro do application service, apenas orquestração. É naturalmente procedural.