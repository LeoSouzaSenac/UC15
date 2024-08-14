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
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
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
import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
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
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
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
import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
```

**SettingsScreen.js**

```javascript
import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
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
import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
```

**ProfileScreen.js**

```javascript
import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

---

Esses projetos mostram como implementar e usar Tab Navigation e Drawer Navigation no React Native, permitindo criar interfaces intuitivas e organizadas para seu aplicativo.
```

## Conclusão

O React Navigation oferece uma variedade de métodos para gerenciar a navegação em aplicativos React Native, cada um adequado para diferentes cenários de uso. Com Stack, Tab e Drawer Navigation, você pode criar interfaces de usuário intuitivas e eficientes, otimizando a experiência do usuário de acordo com as necessidades do seu aplicativo.
