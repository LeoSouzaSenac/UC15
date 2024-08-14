# React Navigation

## O que é o React Navigation?

O React Navigation é uma biblioteca popular para gerenciamento de navegação em aplicativos React Native. Ele permite que você configure e controle a navegação entre diferentes telas do seu aplicativo de maneira simples e flexível. Com o React Navigation, você pode criar navegações de pilha (stack), navegações em abas (tab), navegações de gaveta (drawer) e muito mais.

## Tipos de Navegação

### 1. Stack Navigation

**Stack Navigation** organiza as telas em uma pilha (stack). Quando o usuário navega para uma nova tela, ela é empilhada sobre a anterior. Isso permite voltar à tela anterior através do botão de voltar do dispositivo ou de uma navegação específica.

**Principais Características:**
- Usado para fluxos lineares, como um processo de checkout ou um assistente de configuração.
- A pilha permite que o usuário navegue para trás, recriando a tela anterior.

**Exemplo de Uso:**
```javascript
const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

### 2. Tab Navigation

**Tab Navigation** é usada para alternar entre diferentes telas que estão no mesmo nível hierárquico, usando abas na parte inferior ou superior da tela.

**Principais Características:**
- Ideal para seções do aplicativo que o usuário pode acessar independentemente, como "Home", "Perfil", "Configurações".
- Cada aba possui sua própria pilha de navegação, permitindo navegações independentes.

**Exemplo de Uso:**
```javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
</NavigationContainer>
```

### 3. Drawer Navigation

**Drawer Navigation** utiliza um menu deslizante, normalmente acessível a partir da lateral da tela. Este tipo de navegação é comum em aplicativos que possuem várias seções ou categorias.

**Principais Características:**
- A gaveta pode ser aberta com um gesto de deslize ou com um botão.
- É frequentemente usada para navegações globais, como menus de aplicativos que precisam de um espaço extra para navegar entre diferentes áreas.

**Exemplo de Uso:**
```javascript
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<NavigationContainer>
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
</NavigationContainer>
```

## Comparando os Tipos de Navegação

- **Stack Navigation** é ideal para fluxos de trabalho sequenciais, onde o usuário deve passar por uma série de etapas ou telas.
- **Tab Navigation** é excelente para permitir que o usuário alterne entre diferentes seções de um aplicativo, onde cada seção é relativamente independente.
- **Drawer Navigation** é útil para aplicativos com muitas seções ou categorias, permitindo que o usuário navegue de forma rápida através de um menu oculto.

## Instalação do React Navigation

Para instalar o React Navigation e usar qualquer um desses tipos de navegação, siga os passos abaixo:

1. **Instale a biblioteca principal do React Navigation:**

   No terminal, dentro do diretório do seu projeto React Native, execute o seguinte comando:

   ```bash
   npm install @react-navigation/native
   ```

2. **Instale as dependências necessárias:**

   O React Navigation depende de algumas bibliotecas adicionais para funcionar corretamente. Instale-as com o seguinte comando:

   ```bash
   npm install react-native-screens react-native-safe-area-context
   ```

3. **Instale o gerenciador de navegação de sua escolha:**

   - **Stack Navigation**:
     ```bash
     npm install @react-navigation/native-stack
     ```
   - **Tab Navigation**:
     ```bash
     npm install @react-navigation/bottom-tabs
     ```
   - **Drawer Navigation**:
     ```bash
     npm install @react-navigation/drawer
     ```

4. **Configuração adicional para iOS:**

   No iOS, é necessário realizar uma configuração adicional. Abra o arquivo `ios/Podfile` e adicione a linha abaixo:

   ```ruby
   config = use_native_modules!
   ```

   Em seguida, execute:

   ```bash
   npx pod-install
   ```

## Exemplo Prático com Stack Navigation

Agora, vamos criar um exemplo simples de navegação entre duas telas usando Stack Navigation.

### Passo 1: Configurando a Navegação

No arquivo `App.js`, configure o navegador de pilha (Stack Navigator):

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa o componente NavigationContainer da biblioteca @react-navigation/native
// O NavigationContainer é responsável por gerenciar o estado da navegação e ligar o aplicativo à estrutura de navegação.
import { NavigationContainer } from '@react-navigation/native';
// Importa o método createNativeStackNavigator da biblioteca @react-navigation/native-stack
// O createNativeStackNavigator é usado para criar um navegador de pilha (stack navigator), que permite a navegação entre telas.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Importa o componente HomeScreen do arquivo HomeScreen.js
// Este componente representa a tela inicial do aplicativo.
import HomeScreen from './HomeScreen';
// Importa o componente DetailsScreen do arquivo DetailsScreen.js
// Este componente representa a tela de detalhes, que pode ser acessada a partir da tela inicial.
import DetailsScreen from './DetailsScreen';

// Cria uma instância do stack navigator usando createNativeStackNavigator
// O Stack é usado para definir as telas que serão gerenciadas pelo navegador de pilha.
const Stack = createNativeStackNavigator();

// Função principal do aplicativo que será exportada como padrão
export default function App() {
  return (
    // O NavigationContainer encapsula todo o aplicativo e fornece o contexto de navegação
    <NavigationContainer>
      {/* O Stack.Navigator é usado para definir a estrutura de navegação entre as telas.
          O initialRouteName especifica a tela que será exibida inicialmente. */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define a tela 'Home' como parte do navegador de pilha.
            A propriedade 'name' é o nome da tela, e 'component' especifica qual componente será renderizado. */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define a tela 'Details' como outra tela no navegador de pilha.
            Essa tela pode ser acessada a partir da tela 'Home'. */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

### Passo 2: Criando as Telas

Agora, vamos criar as duas telas que serão navegadas.

**HomeScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes Button, View e Text da biblioteca react-native
// O Button é usado para criar um botão clicável
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { Button, View, Text } from 'react-native';

// Função principal que define o componente HomeScreen
// O componente HomeScreen recebe 'navigation' como uma prop, que permite a navegação entre as telas
export default function HomeScreen({ navigation }) {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Home Screen" na tela */}
      <Text>Home Screen</Text>
      {/* O Button cria um botão com o título "Go to Details"
          Quando o botão é pressionado, a função onPress é chamada, navegando para a tela "Details" */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

```

**DetailsScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes Button, View e Text da biblioteca react-native
// O Button é usado para criar um botão clicável
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { Button, View, Text } from 'react-native';

// Função principal que define o componente DetailsScreen
// O componente DetailsScreen recebe 'navigation' como uma prop, que permite a navegação entre as telas
export default function DetailsScreen({ navigation }) {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Details Screen" na tela */}
      <Text>Details Screen</Text>
      {/* O Button cria um botão com o título "Go to Home"
          Quando o botão é pressionado, a função onPress é chamada, navegando de volta para a tela "Home" */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

```

### Passo 3: Executando o Projeto

Agora que as telas estão criadas, basta executar o projeto:

```bash
npx expo start
```

Com isso, você terá duas telas: "Home" e "Details". Cada uma delas possui um botão que navega para a outra tela.
---

## Exemplo Prático com Tab Navigation

### Passo 1: Configurando o Projeto

Primeiro, crie um novo projeto Expo:

```bash
npx create-expo-app MeuProjetoTabNavigation --template blank
cd MeuProjetoTabNavigation
```

Instale as dependências necessárias para o React Navigation e Tab Navigation:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/bottom-tabs
```

### Passo 2: Configurando o Tab Navigator

No arquivo `App.js`, configure o navegador de abas (Tab Navigator):

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa o componente NavigationContainer da biblioteca @react-navigation/native
// O NavigationContainer gerencia o estado da navegação e é o contêiner que encapsula toda a navegação do app.
import { NavigationContainer } from '@react-navigation/native';
// Importa o método createBottomTabNavigator da biblioteca @react-navigation/bottom-tabs
// O createBottomTabNavigator é usado para criar um navegador de abas (tab navigator) na parte inferior da tela.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importa o componente HomeScreen do arquivo HomeScreen.js
// Este componente representa a tela inicial do aplicativo.
import HomeScreen from './HomeScreen';
// Importa o componente SettingsScreen do arquivo SettingsScreen.js
// Este componente representa a tela de configurações do aplicativo.
import SettingsScreen from './SettingsScreen';

// Cria uma instância do bottom tab navigator usando createBottomTabNavigator
// O Tab é usado para definir as telas que serão gerenciadas pelo navegador de abas.
const Tab = createBottomTabNavigator();

// Função principal do aplicativo que será exportada como padrão
export default function App() {
  return (
    // O NavigationContainer encapsula todo o aplicativo e fornece o contexto de navegação
    <NavigationContainer>
      {/* O Tab.Navigator é usado para definir a estrutura de navegação por abas (tabs) na parte inferior da tela */}
      <Tab.Navigator>
        {/* Define a tela 'Home' como uma das abas do navegador
            A propriedade 'name' é o nome da aba, e 'component' especifica qual componente será renderizado */}
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Define a tela 'Settings' como outra aba do navegador
            Essa aba será acessível ao lado da aba 'Home' */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

```

### Passo 3: Criando as Telas

Crie as duas telas que serão exibidas nas abas.

**HomeScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes View e Text da biblioteca react-native
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { View, Text } from 'react-native';

// Função principal que define o componente HomeScreen
export default function HomeScreen() {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Home Screen" na tela */}
      <Text>Home Screen</Text>
    </View>
  );
}

```

**SettingsScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes View e Text da biblioteca react-native
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { View, Text } from 'react-native';

// Função principal que define o componente SettingsScreen
export default function SettingsScreen() {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Settings Screen" na tela */}
      <Text>Settings Screen</Text>
    </View>
  );
}

```

### Passo 4: Executando o Projeto

Execute o projeto para ver o Tab Navigator em ação:

```bash
npx expo start
```

Agora, você verá duas abas na parte inferior da tela: "Home" e "Settings". Navegar entre essas abas alterará o conteúdo exibido.

---

## Exemplo Prático com Drawer Navigation

### Passo 1: Configurando o Projeto

Crie um novo projeto Expo:

```bash
npx create-expo-app MeuProjetoDrawerNavigation --template blank
cd MeuProjetoDrawerNavigation
```

Instale as dependências necessárias para o React Navigation e Drawer Navigation:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/drawer
```

### Passo 2: Configurando o Drawer Navigator

No arquivo `App.js`, configure o navegador de gaveta (Drawer Navigator):

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa o componente NavigationContainer da biblioteca @react-navigation/native
// O NavigationContainer gerencia o estado da navegação e é o contêiner que encapsula toda a navegação do app.
import { NavigationContainer } from '@react-navigation/native';
// Importa o método createDrawerNavigator da biblioteca @react-navigation/drawer
// O createDrawerNavigator é usado para criar um navegador do tipo drawer (menu lateral) no app.
import { createDrawerNavigator } from '@react-navigation/drawer';
// Importa o componente HomeScreen do arquivo HomeScreen.js
import HomeScreen from './HomeScreen';
// Importa o componente ProfileScreen do arquivo ProfileScreen.js
import ProfileScreen from './ProfileScreen';

// Cria uma instância do drawer navigator usando createDrawerNavigator
// O Drawer é usado para definir as telas que serão gerenciadas pelo navegador de menu lateral.
const Drawer = createDrawerNavigator();

// Função principal do aplicativo que será exportada como padrão
export default function App() {
  return (
    // O NavigationContainer encapsula todo o aplicativo e fornece o contexto de navegação
    <NavigationContainer>
      {/* O Drawer.Navigator é usado para definir a estrutura de navegação por menu lateral (drawer) */}
      <Drawer.Navigator initialRouteName="Home">
        {/* Define a tela 'Home' como uma das opções do menu lateral
            A propriedade 'name' é o nome da tela, e 'component' especifica qual componente será renderizado */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Define a tela 'Profile' como outra opção do menu lateral */}
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

```

### Passo 3: Criando as Telas

Crie as duas telas que serão exibidas no Drawer Navigator.

**HomeScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes View e Text da biblioteca react-native
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { View, Text } from 'react-native';

// Função principal que define o componente HomeScreen
export default function HomeScreen() {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Home Screen" na tela */}
      <Text>Home Screen</Text>
    </View>
  );
}

```

**ProfileScreen.js**

```javascript
// Importa todas as funcionalidades da biblioteca React
import * as React from 'react';
// Importa os componentes View e Text da biblioteca react-native
// O View é usado como um contêiner para organizar os elementos na tela
// O Text é usado para exibir texto na tela
import { View, Text } from 'react-native';

// Função principal que define o componente ProfileScreen
export default function ProfileScreen() {
  return (
    // O View encapsula os elementos da tela e usa as propriedades de estilo para centralizar o conteúdo
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* O Text exibe "Profile Screen" na tela */}
      <Text>Profile Screen</Text>
    </View>
  );
}

```

### Passo 4: Executando o Projeto

Execute o projeto para ver o Drawer Navigator em ação:

```bash
npx expo start
```

Agora, você verá um menu de gaveta que pode ser aberto deslizando a partir da borda esquerda da tela ou tocando no botão de menu, exibindo as opções "Home" e "Profile".
