# Tutorial: Entendendo o `useEffect` no React

## O que é o `useEffect`?

O `useEffect` é um Hook do React que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais podem incluir operações como chamadas a APIs, manipulação do DOM, assinaturas de eventos, entre outros.

## Como Funciona o `useEffect`?

O `useEffect` aceita dois argumentos:

1. **Uma função de efeito**: A função que contém o código do efeito colateral.
2. **Uma lista de dependências** (opcional): Um array que define quando o efeito deve ser executado.

### Sintaxe Básica

```jsx
useEffect(() => {
  // Código do efeito
}, [dependencias]);
```

- **Código do efeito**: Função que executa o efeito.
- **Dependencias**: Array opcional que determina quando o efeito deve ser executado. Se o array estiver vazio, o efeito é executado apenas uma vez após a montagem do componente. Se não for fornecido, o efeito será executado após cada renderização.

### Exemplo Prático

Vamos criar um exemplo simples que usa o `useEffect` para buscar dados de uma API quando o componente é montado.

#### Passo 1: Configuração Inicial

Crie um novo projeto React ou abra um existente.

#### Passo 2: Código do Componente

Crie um novo arquivo `Buscador.js` e adicione o seguinte código:

```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Buscador = () => {
  // Estado para armazenar os dados da API
  const [dados, setDados] = useState([]);
  // Estado para armazenar o estado de carregamento
  const [carregando, setCarregando] = useState(true);

  // Função para buscar dados da API
  const buscarDados = async () => {
    try {
      const resposta = await fetch('https://api.exemplo.com/dados');
      const resultado = await resposta.json();
      setDados(resultado);
    } catch (erro) {
      console.error('Erro ao buscar dados:', erro);
    } finally {
      setCarregando(false);
    }
  };

  // O efeito é executado apenas uma vez após a montagem do componente
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <View style={styles.container}>
      {carregando ? (
        <Text>Carregando...</Text>
      ) : (
        dados.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item.nome}
          </Text>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Buscador;
```

### Explicação do Código

1. **Importações**: Importamos `React`, `useState`, `useEffect`, e alguns componentes do `react-native`.
2. **Definição do Componente**: O componente `Buscador` usa o `useState` para criar estados para os dados da API e para o carregamento.
3. **Função de Buscar Dados**: `buscarDados` é uma função assíncrona que faz uma chamada para uma API, atualiza o estado com os dados retornados e define o estado de carregamento.
4. **Efeito com `useEffect`**: O `useEffect` chama a função `buscarDados` apenas uma vez, após a montagem do componente, devido à lista de dependências vazia.
5. **Renderização Condicional**: O componente exibe "Carregando..." enquanto os dados estão sendo carregados e, após o carregamento, exibe a lista de itens.

### Testando o Componente

Para testar o componente `Buscador`, você deve incluí-lo em seu aplicativo principal, como `App.js`:

```jsx
import React from 'react';
import Buscador from './Buscador';

const App = () => {
  return (
    <Buscador />
  );
};

export default App;
```

Execute o seu aplicativo e você verá os dados sendo carregados e exibidos após a chamada da API.
