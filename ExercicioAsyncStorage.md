# Tarefa: Tela de Login com Persistência

## Requisitos

1. **Tela de Login**:
   - Crie uma tela de login com dois inputs: um para o usuário e outro para a senha.
   - Adicione um botão de confirmação.

2. **Estado**:
   - Utilize `useState` para armazenar os valores dos inputs.

3. **Efeito Inicial**:
   - Use `useEffect` sem dependências para exibir um alerta dizendo que o usuário não está logado.

4. **Armazenamento e Alerta**:
   - No `onPress` do botão, exiba um alerta mostrando os dados digitados pelo usuário.
   - Armazene os dados no `AsyncStorage`.

5. **Exibição de Nome**:
   - Exiba o nome do usuário logado abaixo do título "Login".
   - Se ninguém estiver logado, o texto deve ser "Faça Login".
   - Quando o usuário entrar com qualquer nome, armazene os dados em `AsyncStorage` e exiba o nome no lugar de "Faça Login".
