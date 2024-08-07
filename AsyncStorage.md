# Usando AsyncStorage no React Native

## O que é o AsyncStorage?

O AsyncStorage é uma API simples e assincrônica de armazenamento de chave-valor que permite persistir dados localmente no dispositivo do usuário. É útil para salvar pequenas quantidades de dados, como tokens de autenticação, configurações de usuário ou preferências do aplicativo.

## Persistir dados? O que é isso?

Persistir dados significa armazenar dados de forma que eles permaneçam disponíveis e intactos mesmo após o término da execução 
do programa ou após o dispositivo ser desligado e reiniciado. Em outras palavras, dados persistentes são mantidos em algum tipo de armazenamento permanente, 
como um banco de dados, arquivo, ou armazenamento local, de modo que possam ser recuperados e usados novamente no futuro. No caso do AsyncStorage, o armazenamento é local.
Ele salva os dados em um arquivo no seu celular.

No Android, AsyncStorage salva os dados utiliza uma base de dados SQLite para salvar os dados.
No iOS, ele utiliza o armazenamento de chave-valor padrão do iOS, que é o NSUbiquitousKeyValueStore. 

## Como Funciona o AsyncStorage?

O AsyncStorage fornece métodos para armazenar, recuperar e excluir dados.

### Instalação

Primeiro, vamos instalar o AsyncStorage no seu projeto React Native.

```bash
npm install @react-native-async-storage/async-storage
```

### Importando AsyncStorage

Importe o AsyncStorage no seu componente:

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';
```

### Armazenando Dados

Para armazenar dados, usamos o método `setItem`.

```jsx
await AsyncStorage.setItem('chave', 'valor');
```

### Recuperando Dados

Para recuperar dados, usamos o método `getItem`.

```jsx
const valor = await AsyncStorage.getItem('chave');
```

### Removendo Dados

Para remover dados, usamos o método `removeItem`.

```jsx
await AsyncStorage.removeItem('chave');
```

### Exemplo Prático

Vamos criar um exemplo simples onde armazenamos, recuperamos e removemos um nome de usuário usando AsyncStorage.

#### Passo 1: Configuração Inicial

Crie um novo projeto React Native ou abra um existente.

#### Passo 2: Código do Componente

Crie um novo arquivo `Armazenamento.js` e adicione o seguinte código:

```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Armazenamento = () => {
  const [nome, setNome] = useState('');
  const [nomeArmazenado, setNomeArmazenado] = useState('');

  // Função para salvar o nome no AsyncStorage
  const salvarNome = async () => {
    try {
      await AsyncStorage.setItem('nome', nome);
      setNomeArmazenado(nome); // Atualizar o estado nomeArmazenado
      Alert.alert('Sucesso', 'Nome salvo com sucesso!');
    } catch (erro) {
      console.error('Erro ao salvar o nome:', erro);
    }
  };

  // Função para recuperar o nome do AsyncStorage
  const recuperarNome = async () => {
    try {
      const valor = await AsyncStorage.getItem('nome');
      if (valor !== null) {
        setNomeArmazenado(valor);
      }
    } catch (erro) {
      console.error('Erro ao recuperar o nome:', erro);
    }
  };

  // Função para remover o nome do AsyncStorage
  const removerNome = async () => {
    try {
      await AsyncStorage.removeItem('nome');
      setNomeArmazenado(''); // Limpar o estado nomeArmazenado
      Alert.alert('Sucesso', 'Nome removido com sucesso!');
    } catch (erro) {
      console.error('Erro ao remover o nome:', erro);
    }
  };

  // Recuperar o nome quando o componente for montado
  useEffect(() => {
    recuperarNome();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Salvar Nome" onPress={salvarNome} />
      <Button title="Remover Nome" onPress={removerNome} />
      <Text style={styles.texto}>Nome Armazenado: {nomeArmazenado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Armazenamento;

```

### Explicação do Código

1. **Importações**: Importamos `React`, `useState`, `useEffect`, e componentes do `react-native`, além do `AsyncStorage`.
2. **Estados**: Criamos estados para armazenar o nome digitado (`nome`) e o nome recuperado do AsyncStorage (`nomeArmazenado`).
3. **Função `salvarNome`**: Armazena o nome no AsyncStorage e exibe uma mensagem de sucesso.
4. **Função `recuperarNome`**: Recupera o nome do AsyncStorage e atualiza o estado `nomeArmazenado`.
5. **Função `removerNome`**: Remove o nome do AsyncStorage e exibe uma mensagem de sucesso.
6. **Efeito `useEffect`**: Recupera o nome armazenado quando o componente é montado.
7. **Renderização**: O componente exibe um campo de entrada para o nome, botões para salvar e remover o nome, e o nome armazenado.

### Testando o Componente

Para testar o componente `Armazenamento`, você deve incluí-lo em seu aplicativo principal, como `App.js`:

```jsx
import React from 'react';
import Armazenamento from './Armazenamento';

const App = () => {
  return (
    <Armazenamento />
  );
};

export default App;
```

Execute o seu aplicativo e você poderá digitar um nome, salvá-lo, recuperá-lo e removê-lo usando AsyncStorage.
