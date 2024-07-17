
### Exercício de React Native: Criando Componentes Reutilizáveis ✨

#### Objetivo:
Criar três componentes reutilizáveis em arquivos separados e utilizá-los no `App.js`.

### Passos do Exercício:

#### Passo 1: Configuração do Projeto 🚀
1. **Criar um novo projeto com Expo:**
   ```sh
   npx create-expo-app MeuProjeto --template blank
   cd MeuProjeto
   npx expo start (ou npx expo start --tunnel)
   ```

#### Passo 2: Criar os Componentes Reutilizáveis 🔄

1. **Componente Botão:**
   - **Arquivo:** `Botao.js`
   - **Descrição:** Este componente deve exibir um botão que pode ser reutilizado com diferentes rótulos e ações.
   - **Props sugeridas:**
     - `title` (para o texto do botão)
     - `onPress` (para a função a ser executada quando o botão é pressionado)
   - **Estilo sugerido:** O botão deve ter um fundo colorido e texto branco.

2. **Componente Input:**
   - **Arquivo:** `Input.js`
   - **Descrição:** Este componente deve exibir um campo de entrada de texto que pode ser reutilizado com diferentes placeholders.
   - **Props sugeridas:**
     - `placeholder` (para o texto de ajuda dentro do campo)
     - `value` (para o valor do campo)
     - `onChangeText` (para a função a ser executada quando o texto é alterado)
   - **Estilo sugerido:** O campo de entrada deve ter uma borda, padding interno e largura total.

3. **Componente Card:**
   - **Arquivo:** `Card.js`
   - **Descrição:** Este componente deve exibir um cartão que pode ser reutilizado para exibir diferentes conteúdos.
   - **Props sugeridas:**
     - `title` (para o título do cartão)
     - `content` (para o conteúdo do cartão)
   - **Estilo sugerido:** O cartão deve ter uma borda, sombra e padding interno.

#### Passo 3: Chamar os Componentes no `App.js` 📲
1. Importe e utilize os componentes `Botao`, `Input` e `Card` no arquivo `App.js`.
2. Organize-os de maneira a demonstrar a reutilização de cada componente com diferentes props.

### Dicas 💡
- Utilize `TouchableOpacity`, `Button` ou `Pressable` para criar o componente de botão.
- Utilize `TextInput` para criar o componente de campo de entrada.
- Utilize `View` e `Text` para estruturar o componente de cartão.
- Utilize `StyleSheet` para estilizar os componentes.
- Teste seu aplicativo frequentemente para garantir que os componentes estão sendo exibidos corretamente.

