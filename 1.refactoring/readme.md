# Notas da aula

# Ambiente

- ```yarn init -y```
- ```yarn add typescript jest @types/jest ts-node ts-jest```
- ```npx tsc --init```
- ```npx ts-jest config:init```

# Refatoração

- Alteração feita com o objetivo de tornar o software mais claro, sem alterar seu comportamento observável.
- Crucial ter testes automatizados na refatoração.
- Refatorar aos poucos. Exemplo: renomear uma variável, extrir um método, desfazer um if

# Smells

1. Nome estranho
> Renomear variável, método, função, classe, arquivo

2. Linha em branco
> Apagar linha em braco
> Extrair o método

3. Comentários
> Substituir por variável/método explicativa e apagar comentário.

4. Condições confusas e aninhadas
> Inverter as condições ou introduzir cláusulas guarda (early return)
> Consolidar condição
> Introduzir ternário
> Extrair Condição

5. Números mágicos
> Extrair constantes explicativas

6. Tratamento inadequado de exceptions

7. Excesso de parâmetros
> Introduzir instâncias

8. Métodos grandes
> Extrair método

9. Classes grandes
> Extrair classe -> Entra o design

# Patters

- Strategy = Variação de Comportamento
- Factory: padrão de criação
- Chain of responsability
- Chain = Cadeia, Rede, Sequência, Elo
- Responsability = Responsabilidade, Comportamento

# Prática

- v2: refatoramento
- v3: design de código
- v4: strategy, factory and chain of responsability
