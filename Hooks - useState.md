# Tutorial: Entendendo o `useState` no React

## O que é o `useState`?

O `useState` é um Hook do React que permite adicionar estado a um componente funcional. Antes dos Hooks, apenas componentes de classe podiam ter estado. Com o `useState`, você pode usar estado em componentes funcionais de forma simples e direta.

## Como Funciona o `useState`?

O `useState` é uma função que retorna um array com dois elementos:

1. **O valor atual do estado**.
2. **Uma função para atualizar esse estado**.

### Sintaxe Básica

```jsx
const [estado, setEstado] = useState(valorInicial);
```

- **estado**: O valor atual do estado.
- **setEstado**: Função para atualizar o estado.
- **valorInicial**: O valor inicial do estado (opcional).

### Exemplo Prático

Vamos criar um exemplo simples para ilustrar como o `useState` funciona. Vamos fazer um contador que incrementa e decrementa o valor quando botões são clicados.

#### Passo 1: Configuração Inicial

Crie um novo projeto React ou abra um existente.

#### Passo 2: Código do Componente

Crie um novo arquivo `Contador.js` e adicione o seguinte código:

```jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = () => {
  // Inicializa o estado com valor 0
  const [contagem, setContagem] = useState(0);

  // Função para incrementar a contagem
  const incrementar = () => {
    setContagem(contagem + 1);
  };

  // Função para decrementar a contagem
  const decrementar = () => {
    setContagem(contagem - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contagem: {contagem}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Contador;
```

### Explicação do Código

1. **Importações**: Importamos `React`, `useState`, e alguns componentes do `react-native`.
2. **Definição do Componente**: O componente `Contador` usa o `useState` para criar um estado chamado `contagem` e uma função para atualizar esse estado chamada `setContagem`.
3. **Funções de Atualização**: As funções `incrementar` e `decrementar` atualizam o estado atual com base em ações do usuário.
4. **Renderização**: O componente exibe o valor atual da contagem e dois botões que chamam as funções de atualizar o estado.

### Testando o Componente

Para testar o componente `Contador`, você deve incluí-lo em seu aplicativo principal, como `App.js`:

```jsx
import React from 'react';
import Contador from './Contador';

const App = () => {
  return (
    <Contador />
  );
};

export default App;
```

Execute o seu aplicativo e você verá o contador funcionando com os botões para incrementar e decrementar o valor.
