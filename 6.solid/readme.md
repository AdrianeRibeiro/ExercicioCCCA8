# SOLID

- É a reunião de 5 princípios de desenvolvimento de software orientado a objetos que são a base para criar um design capaz de tolerar mudanças ao longo do tempo, ser fácil de entender e reusar.

# Aspectos ruins

- Rigidez: quer mudar algo, mas para isso precisa mudar em outros lugares

- Fragilidade: quando uma mudança é feita, quebra outras partes da aplicação. Existe um alto acoplamento - todo mundo se conhece.

- Imobility: difícil de reusar

# Princípios

> Single Responsability
  
  - Separar coisas que mudam por motivos diferentes
  - Classes com muita responsabilidade se tornam acopladas. Torna-se mais difícil mexer nela

> Open/Closed

  - Os componentes da arquitetura devem estar abertos para extensão e fechados para modificação

> Liskov Substitution

  - Se S (Exemplo: beer, whisky e water) é subclasse de T (Exemplo: item), então objetos do tipo T pode ser substituídos por objetos do tipo S sem quebrar o funcionamento do programa.

  - A proposta de Barbara Liskov foi justamente garantir que as subclasses possam ser intercambiadas sem causar problemas durante a execução do programa.

  - Precondição:

    - Devem aceitar no mínimo as mesmas entradas da superclasse ou mais. Isso para não causar incompatibilidade. Exemplo: se na superclasse Pessoa a idade não pode ser negativa, uma subclasse deve seguir essa regra.

    - Nas subclasses:

      - Não deve-se fazer exigências maiores que o combinado
      - Não deve-se retornar coisas que não estão combinadas
      - Invariância deve ser preservada. Você não pode alterar regras impostas na subclasse

> Interface segregation

  - Uma classe não deveria implementar métodos que ela não usa. Decompor interfaces muito abrangentes em outras especifícas.

> Dependency Inversion

- É a base do desacoplamento, permitindo intercambiar dependências de acordo com a necessidade, facilitando os testes e a evolução com o passar do tempo.

- Se aplica bem para o que está fora do seu controle. Exemplos: data, file system, banco de dados, rede, sistema operacional...

- Módulos de alto nível não deve depender de módulos de baixo nível, eles devem depender de abstração (interface).Exemplo: abri uma conexão com o banco no UseCase, acessar API e importar o axios no arquivo.

# Princípios S e D se aplicam em qualquer situação.