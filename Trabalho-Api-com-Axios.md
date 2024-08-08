# Integração de API com Input de Usuário, Componentização e Exibição de Dados

## Objetivo

Você irá criar um pequeno aplicativo em React Native que permite ao usuário fazer uma busca por meio de um `TextInput`, enviar essa busca para uma API usando Axios, e exibir os resultados em uma `FlatList`. Além disso, você deverá componentizar o projeto, separando as responsabilidades em diferentes componentes para uma melhor organização e reutilização de código.

## Passos a Seguir

### 1. Criar um Componente `TextInput`

- Implemente um componente `TextInput` que permita ao usuário digitar sua consulta.
- Este componente deve estar estilizado de maneira adequada para proporcionar uma boa experiência de usuário.
- Componentize este `TextInput` em um arquivo separado, por exemplo, `SearchInput.js`.

### 2. Gerenciar o Estado com `useState`

- Utilize o hook `useState` para armazenar o valor inserido pelo usuário no `TextInput`.
- Adicione outro estado para armazenar os resultados da API que serão exibidos na `FlatList`.
- Considere a criação de um componente pai que gerencie o estado geral e passe as propriedades necessárias para os componentes filhos.

### 3. Fazer uma Requisição para a API Usando Axios

- Quando o usuário submeter a consulta (pode ser ao pressionar um botão ou ao concluir a digitação), utilize Axios para fazer uma requisição para a API.
- Envie o valor digitado pelo usuário como um parâmetro na requisição.
- Considere encapsular a lógica da requisição em um componente ou função separada para manter o código mais limpo.

### 4. Exibir os Resultados Usando `FlatList`

- Utilize o componente `FlatList` para exibir os resultados da requisição.
- Componentize a renderização de cada item da lista em um arquivo separado, por exemplo, `SearchResultItem.js`.
- Cada item da `FlatList` deve ser renderizado de forma a exibir informações relevantes e de fácil leitura para o usuário.

### 5. Componentização e Estrutura do Projeto

- Separe as diferentes partes do código em componentes funcionais.
- Por exemplo:
  - `SearchInput.js` para o componente de entrada de busca.
  - `SearchResultItem.js` para a renderização de cada item na `FlatList`.
  - `SearchResults.js` para encapsular a lógica da `FlatList`.
  - `App.js` para integrar todos os componentes e gerenciar o estado geral.

### 6. Detalhes Adicionais

- **Loading Indicator**: Adicione um indicador de carregamento (`ActivityIndicator`) enquanto a requisição está sendo processada. Este indicador pode ser componentizado também.
- **Tratamento de Erros**: Implemente o tratamento de erros para informar ao usuário caso algo dê errado durante a requisição.
- **Estilização**: Certifique-se de que os componentes estão bem estilizados, garantindo uma interface limpa e responsiva.

### Exemplo de Estrutura de Código

Abaixo, uma estrutura básica para começar:

```javascript
// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <SearchInput query={query} setQuery={setQuery} setData={setData} />
      <SearchResults data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
```

# Sugestões de APIs

## [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
JSONPlaceholder é uma API gratuita que fornece dados fictícios para testes e protótipos. Ela oferece diversos endpoints que simulam operações CRUD (Create, Read, Update, Delete) para recursos como posts, comentários, álbuns, fotos, e usuários. Ideal para treinar requisições HTTP em ambientes de desenvolvimento.

## [PokéAPI](https://pokeapi.co/docs/v2#pokemon)
A PokéAPI é uma API pública que fornece dados detalhados sobre os Pokémon. Você pode acessar informações sobre espécies, habilidades, movimentos, evoluções, entre outros. É muito utilizada em aplicativos e jogos baseados no universo Pokémon.

## [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-a-single-character)
A Rick and Morty API oferece dados sobre os personagens, episódios, e locais do universo da série Rick and Morty. Você pode buscar informações específicas, como detalhes de um único personagem ou episódios inteiros, o que a torna excelente para projetos baseados em fandoms.

## [Advice Slip API](https://api.adviceslip.com/#endpoint-random)
A Advice Slip API é uma API simples que retorna conselhos aleatórios em formato de texto. Ideal para aplicativos motivacionais, geradores de conselhos ou simplesmente para adicionar um toque divertido e interativo a um projeto.

## [Chuck Norris Jokes API](https://api.chucknorris.io/)
A Chuck Norris Jokes API é uma API pública que retorna piadas aleatórias sobre Chuck Norris. É uma maneira divertida de incluir humor em aplicativos ou criar geradores de piadas customizadas sobre o famoso ator e artista marcial.

---

# Se Desafia a Ir Além!

Minha sugestão é fazer um app de previsão do tempo bem maneiro usando a API do [OpenWeatherMap](https://openweathermap.org/current#name). Com essa API, você pode obter informações sobre o clima em qualquer cidade do mundo, incluindo temperatura, condições climáticas, umidade, e muito mais. Este desafio permitirá que você trabalhe com dados em tempo real e crie uma interface interativa que pode ser útil no dia a dia dos usuários.
