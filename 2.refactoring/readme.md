# Notas da aula

# Testes

- Teste automatizado não é garantia de que não vai existir defeitos.
- Auxilia na refatoração de código

# Anatomia

- Given: definição de todas as informações necessárias para executar o comportamento que será testado.
- When: executar o comportamento.
- Then: verificar o que acontece após a execução, comparando as informações retornadas com a expectativa que foi criada.

# Tipos

- Teste unitário: baixo nível e rápido de fazer.
- Teste de integração: junta camadas. Exemplo: teste de um controller que chama um repositório.
- E2E: replica o usuário usando o sistema.

> Ideal é ter combinação de testes.

# First

- Fast: os testes devem rodar rápido.
- Independent: não deve existir dependência entre os testes. Eles devem poder ser executados de forma isolada.
- Repeatable: o resultado deve ser o mesmo independente de quantas vezes seja executado.
- Self-validating: o próprio teste deve ter uma saída bem definida que é válida ou não, fazendo com que ele passe ou falhe.
- Timely: os testes devem ser escritos antes do código fonte.
  - Não é crucial e depende do processo.

# TDD

- É um método para construir software, não para testar.