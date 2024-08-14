# Navegação Complexa com React Native

Neste guia, vamos criar um aplicativo React Native com navegação complexa, que inclui telas públicas (login e cadastro) e telas privadas (após login). 
Utilizaremos `react-navigation` para gerenciar a navegação entre as diferentes telas e tipos de navegação.

## Estrutura do Projeto

O projeto será dividido em várias telas e componentes:

1. **`App.js`** - Configura a navegação principal do aplicativo.
2. **`LoginScreen.js`** - Tela de login.
3. **`SignupScreen.js`** - Tela de cadastro.
4. **`HomeScreen.js`** - Tela acessível após login.
5. **`ProfileScreen.js`** - Tela de perfil acessível após login.
6. **`PublicScreen.js`** - Tela pública antes do login.
7. **`PrivateScreen.js`** - Tela acessível após login.

## Código e Explicação

### 1. `App.js`

O `App.js` configura a navegação principal usando uma combinação de pilha e gaveta. Dependendo se o usuário está autenticado, o aplicativo renderiza a navegação pública ou privada.

```javascript
import * as React from 'react'; // Importa o React para usar componentes e hooks.
import { NavigationContainer } from '@react-navigation/native'; // Importa o container de navegação para gerenciar a navegação na aplicação.
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa a função para criar uma pilha de navegação.
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa a função para criar um menu de navegação lateral (drawer).
import LoginScreen from './screens/LoginScreen'; // Importa a tela de Login.
import SignupScreen from './screens/SignupScreen'; // Importa a tela de Cadastro.
import HomeScreen from './screens/HomeScreen'; // Importa a tela principal da aplicação.
import ProfileScreen from './screens/ProfileScreen'; // Importa a tela de Perfil do usuário.
import PublicScreen from './screens/PublicScreen'; // Importa a tela pública (visível antes do login).
import PrivateScreen from './screens/PrivateScreen'; // Importa a tela privada (visível após o login).

// Cria uma pilha de navegação para as telas de autenticação (login, cadastro, etc.).
const AuthStack = createNativeStackNavigator();

// Cria um menu de navegação lateral para as telas da aplicação (home, perfil, etc.).
const AppDrawer = createDrawerNavigator();

// Função que define as telas e a navegação da pilha de autenticação.
function AuthStackScreen({ setIsAuthenticated }) {
  return (
    // Configura o navegador de pilha com a tela inicial como "Public".
    <AuthStack.Navigator initialRouteName="Public">
      {/* Adiciona a tela pública à pilha de navegação */}
      <AuthStack.Screen name="Public" component={PublicScreen} />
      
      {/* Adiciona a tela de login à pilha de navegação, passando a função setIsAuthenticated como prop */}
      <AuthStack.Screen name="Login">
        {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
      
      {/* Adiciona a tela de cadastro à pilha de navegação */}
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

// Função que define as telas e a navegação do menu lateral da aplicação.
function AppDrawerScreen({ setIsAuthenticated }) {
  return (
    // Configura o navegador de menu lateral com a tela inicial como "Home".
    <AppDrawer.Navigator initialRouteName="Home">
      {/* Adiciona a tela inicial ao menu lateral, passando a função setIsAuthenticated como prop */}
      <AppDrawer.Screen name="Home">
        {props => <HomeScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AppDrawer.Screen>
      
      {/* Adiciona a tela de perfil ao menu lateral */}
      <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
}

// Função principal do aplicativo que gerencia o estado de autenticação e define qual fluxo de navegação será exibido.
export default function App() {
  // Define o estado de autenticação do usuário, inicialmente como falso (não autenticado).
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    // Envolve toda a navegação dentro do NavigationContainer, que gerencia o estado da navegação.
    <NavigationContainer>
      {/* Se o usuário estiver autenticado, exibe o menu lateral com as telas da aplicação.
          Caso contrário, exibe a pilha de navegação com as telas de autenticação. */}
      {isAuthenticated ? (
        <AppDrawerScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthStackScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
```

**Explicação:**
- `AuthStackScreen` e `AppDrawerScreen` são funções que definem a navegação para telas públicas e privadas, respectivamente.
- `App` controla a renderização com base no estado de autenticação.

### 2. `LoginScreen.js`

Tela de login onde o usuário insere um nome de usuário para simular o processo de autenticação.

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button, TextInput e StyleSheet.

export default function LoginScreen({ navigation, setIsAuthenticated }) {
  // Função principal do componente LoginScreen, que recebe props para navegação e autenticação.

  const [username, setUsername] = React.useState(''); // Define o estado local para armazenar o nome de usuário.

  // Função que simula o processo de login.
  const handleLogin = () => {
    if (username) {
      // Verifica se o nome de usuário não está vazio.
      setIsAuthenticated(true); // Atualiza o estado de autenticação para verdadeiro (usuário autenticado).
      navigation.replace('App'); // Navega para a tela principal da aplicação, substituindo a tela de login na pilha de navegação.
    } else {
      alert('Please enter a username'); // Mostra um alerta se o nome de usuário estiver vazio.
    }
  };

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Login Screen</Text>
      {/* Exibe o título "Login Screen" com o estilo definido no StyleSheet */}

      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        // Campo de entrada de texto para o nome de usuário. Atualiza o estado local com o valor digitado.
      />
      
      <Button
        title="Login"
        onPress={handleLogin}
        // Botão para realizar o login. Quando pressionado, chama a função handleLogin.
      />
      
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
        // Botão para navegar para a tela de cadastro. Quando pressionado, chama a função navigation.navigate com o nome da tela de cadastro.
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
    padding: 20, // Adiciona preenchimento ao redor do conteúdo.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
  input: {
    width: '100%', // Define a largura do campo de entrada para ocupar todo o espaço disponível.
    padding: 10, // Adiciona preenchimento interno ao campo de entrada.
    borderWidth: 1, // Define a largura da borda do campo de entrada.
    borderColor: '#ccc', // Define a cor da borda do campo de entrada.
    marginBottom: 20, // Adiciona uma margem abaixo do campo de entrada.
  },
});
```

**Explicação:**
- O componente usa `TextInput` para capturar o nome de usuário e um `Button` para simular o login.
- `handleLogin` atualiza o estado de autenticação e navega para a tela principal.

### 3. `SignupScreen.js`

Tela de cadastro onde o usuário pode se registrar (lógica não implementada aqui).

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button, TextInput e StyleSheet.

export default function SignupScreen({ navigation }) {
  // Função principal do componente SignupScreen, que recebe props para navegação.
  const [username, setUsername] = React.useState(''); // Hook de estado para armazenar o nome de usuário inserido.

  const handleSignup = () => {
    // Função chamada quando o botão "Signup" é pressionado.
    // Simula a lógica de cadastro, por enquanto exibe um alerta.
    alert('Signup logic not implemented');
  };

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Signup Screen</Text>
      {/* Exibe o título "Signup Screen" com o estilo definido no StyleSheet */}

      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        // Campo de entrada de texto para o nome de usuário.
        // O valor do campo é controlado pelo estado `username`, e `setUsername` atualiza o estado conforme o texto é alterado.
      />
      <Button
        title="Signup"
        onPress={handleSignup}
        // Botão para acionar a função `handleSignup` quando pressionado.
        // Atualmente, exibe um alerta que a lógica de cadastro não está implementada.
      />
      <Button
        title="Go back to Login"
        onPress={() => navigation.goBack()}
        // Botão para navegar de volta à tela de login.
        // Usa `navigation.goBack()` para retornar à tela anterior na pilha de navegação.
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
    padding: 20, // Adiciona preenchimento ao redor do conteúdo dentro do container.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
  input: {
    width: '100%', // Faz o campo de entrada ocupar toda a largura disponível.
    padding: 10, // Adiciona preenchimento interno ao campo de entrada.
    borderWidth: 1, // Define a largura da borda do campo de entrada.
    borderColor: '#ccc', // Define a cor da borda do campo de entrada.
    marginBottom: 20, // Adiciona uma margem abaixo do campo de entrada.
  },
});

```

**Explicação:**
- Similar ao `LoginScreen`, mas para cadastro.
- O botão "Signup" exibe um alerta que a lógica de cadastro não está implementada.

### 4. `HomeScreen.js`

Tela acessível após o login, com botões para navegação e logout.

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button e StyleSheet.

export default function HomeScreen({ navigation, setIsAuthenticated }) {
  // Função principal do componente HomeScreen, que recebe props para navegação e autenticação.

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Home Screen</Text>
      {/* Exibe o título "Home Screen" com o estilo definido no StyleSheet */}

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        // Botão para navegar para a tela "Profile". Quando pressionado, chama a função navigation.navigate
        // com o nome da tela para a qual deve navegar.
      />

      <Button
        title="Logout"
        onPress={() => {
          // Botão para sair do aplicativo. Quando pressionado, executa a função abaixo.
          setIsAuthenticated(false);
          // Atualiza o estado de autenticação para falso (não autenticado).

          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
            // Reseta a pilha de navegação e define a tela inicial como "Login".
            // Isso garante que o usuário seja redirecionado para a tela de login após o logout.
          });
        }}
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
});

```

**Explicação:**
- Oferece navegação para a tela de perfil e uma opção para logout.
- `navigation.reset` limpa o estado de navegação e leva o usuário de volta à tela de login.

### 5. `ProfileScreen.js`

Tela de perfil acessível após login.

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button e StyleSheet.

export default function ProfileScreen({ navigation }) {
  // Função principal do componente ProfileScreen, que recebe props para navegação.

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Profile Screen</Text>
      {/* Exibe o título "Profile Screen" com o estilo definido no StyleSheet */}

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        // Botão para navegar para a tela "Home". Quando pressionado, chama a função navigation.navigate
        // com o nome da tela para a qual deve navegar.
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
});

```

**Explicação:**
- Oferece navegação de volta à tela principal (`HomeScreen`).

### 6. `PublicScreen.js`

Tela pública acessível antes do login.

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button e StyleSheet.

export default function PublicScreen({ navigation }) {
  // Função principal do componente PublicScreen, que recebe props para navegação.

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Public Screen</Text>
      {/* Exibe o título "Public Screen" com o estilo definido no StyleSheet */}

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        // Botão para navegar para a tela "Login". Quando pressionado, chama a função navigation.navigate
        // com o nome da tela para a qual deve navegar.
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
});

```

**Explicação:**
- Navegação para a tela de login.

### 7. `PrivateScreen.js`

Tela acessível após login. Esta tela não foi detalhada anteriormente, mas segue o mesmo padrão.

```javascript
import * as React from 'react'; // Importa o React para usar seus componentes e hooks.
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa os componentes necessários do React Native: View, Text, Button e StyleSheet.

export default function PrivateScreen({ navigation }) {
  // Função principal do componente PrivateScreen, que recebe props para navegação.

  return (
    <View style={styles.container}>
      {/* Container principal que organiza o layout dos filhos */}
      <Text style={styles.header}>Private Screen</Text>
      {/* Exibe o título "Private Screen" com o estilo definido no StyleSheet */}

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        // Botão para navegar para a tela "Home". Quando pressionado, chama a função navigation.navigate
        // com o nome da tela para a qual deve navegar.
      />
    </View>
  );
}

// Define os estilos para o componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar todo o espaço disponível.
    alignItems: 'center', // Alinha os itens horizontalmente no centro.
    justifyContent: 'center', // Alinha os itens verticalmente no centro.
  },
  header: {
    fontSize: 24, // Define o tamanho da fonte do texto.
    marginBottom: 20, // Adiciona uma margem abaixo do texto.
  },
});

```

**Explicação:**
- Similar às outras telas, mas usada para navegação privada.

## Conclusão

Neste guia, configuramos um aplicativo React Native com navegação condicional entre telas públicas e privadas usando `react-navigation`. Cada tela tem sua própria lógica de navegação e estado, permitindo uma experiência de usuário fluida e organizada.
