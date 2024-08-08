### O que é uma API?

API (Application Programming Interface) é um conjunto de definições e protocolos que permitem a 
comunicação entre diferentes sistemas de software. Uma API especifica como os diferentes componentes 
de software devem interagir, fornecendo funções e procedimentos que os desenvolvedores podem utilizar 
para construir suas aplicações. Elas são essenciais para permitir que aplicações distintas possam se 
comunicar entre si, independentemente da linguagem de programação ou das plataformas em que estão implementadas.

Ou seja: ela nada mais é do que um conjunto de normas entre ambos os sistemas para facilitar a comunicação entre o usuário e o software.
Por meio delas é possível obter e enviar dados de uma maneira ágil, simples e segura.

A API funciona como uma espécie de “mensageira”, que recebe requisições de um cliente e transmite até um servidor, onde será processada e devolvida.

### Analogia do Restaurante

Quando vamos a um restaurante, escolhemos um prato no menu e fazemos o pedido ao garçom.
Em seguida, o garçom encaminha esse pedido à cozinha, que o prepara. 
No fim, o garçom traz o prato pronto até a gente. Por fim, não sabemos como o prato foi preparado, apenas recebemos o que solicitamos.
Ao receber o pedido, a API o encaminha ao sistema responsável e, em seguida, devolve o que solicitou.



### O que é uma API REST?

REST (Representational State Transfer) é um estilo arquitetural para a construção de APIs que utiliza o protocolo HTTP. 
Uma API REST define um conjunto de convenções para criar, ler, atualizar e deletar recursos, utilizando as operações HTTP: GET, POST, PUT, DELETE, etc. 
As APIs RESTful são amplamente utilizadas na web devido à sua simplicidade e flexibilidade. Elas seguem os seguintes princípios:

Essas são as APIs mais populares e flexíveis encontradas na Web atualmente. O cliente envia solicitações ao servidor como dados. 
O servidor usa essa entrada do cliente para iniciar funções internas e retorna os dados de saída ao cliente.


### O que é JSON?

É o formato mais utilizado para o retorno de dados de uma API REST.
JSON (JavaScript Object Notation) é uma forma de notação de objetos JavaScript, de modo que eles possam ser representados
de uma forma comum a diversas linguagens.

JSON é amplamente utilizado em APIs para transmitir dados entre um cliente
e um servidor. Um exemplo simples de JSON é:

```json
{
  "nome": "Maria",
  "idade": 28,
  "cidade": "São Paulo"
}
```

#### Porque usar JSON?
Simplicidade
Legibilidade
Portabilidade

#### Regras do JSON
Não pode ter funções;
Não pode ter comentários;
Todo texto sempre tem aspas duplas;
As propriedades sempre tem aspas duplas.


### API com React Native

No React Native, uma aplicação pode consumir dados de uma API para exibir informações dinâmicas para o usuário. 
Por exemplo, podemos usar em um aplicativo que precisa buscar dados de um servidor, como informações de usuários, posts,
ou produtos. O React Native oferece diversas maneiras de interagir com APIs, sendo as mais comuns o `fetch` e a biblioteca `Axios`.

### API com fetch

O `fetch` é uma API nativa do JavaScript que permite fazer requisições HTTP para servidores e manipular as respostas.
No React Native, `fetch` é frequentemente utilizado para realizar chamadas a APIs RESTful. 

Ela faz uma consulta e resulta em uma promessa de que algo será retornado. Essa promessa é chamada de Promisse. 
Essa promessa pode tanto ser boa, ter retornado os dados, quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair.

Aqui está um exemplo básico de como utilizar `fetch`:

```javascript
import React, { useEffect, useState } from 'react'; // Importa React, useEffect e useState de 'react'
import { View, Text } from 'react-native'; // Importa View e Text de 'react-native'

const App = () => {
  // Define um estado chamado 'data' e uma função para atualizá-lo chamada 'setData'
  // O estado inicial de 'data' é null
  const [data, setData] = useState(null);

  // useEffect é um hook que executa o código dentro dele quando o componente é montado pela primeira vez
  useEffect(() => {
    // Faz uma requisição HTTP GET para a URL fornecida usando a API fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json()) // Quando a resposta chega, converte ela em JSON
      .then(json => setData(json)) // Atualiza o estado 'data' com o JSON recebido
      .catch(error => console.error(error)); // Caso ocorra um erro, ele é capturado e exibido no console
  }, []); // O array vazio [] significa que este efeito roda apenas uma vez, após a montagem do componente

  return (
    <View>
      {/* Verifica se 'data' foi carregado; se sim, exibe o título do post, caso contrário, exibe "Loading..." */}
      {data ? <Text>{data.title}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default App; // Exporta o componente App como o padrão para que possa ser usado em outros arquivos

```

Neste exemplo, o `fetch` faz uma requisição GET para a URL fornecida e converte a resposta em JSON. O resultado é então armazenado no estado `data` e exibido no componente.

### API com Axios

`Axios` é uma biblioteca externa que oferece uma interface mais rica e fácil de usar para realizar requisições HTTP. 
Ela suporta funcionalidades avançadas como interceptores de requisições e respostas, cancelamento de requisições e mais. 
Pode ser utilizado do lado do cliente - código que é executado no navegador do usuário - usando frameworks como React, Vue, etc, e também do 
lado do backend - código que é executado no servidor -usando frameworks como express, nest, etc.

Ele fornece vários atalhos para cada tipo de requisição:
axios.get('url')
axios.delete('url')
axios.post('url', { ...dados })
axios.put('url', { ...dados })


### Instalação do Axios

Para termos o Axios disponível em nossa aplicação, basta instalá-lo via NPM com o seguinte comando:

```bash
npm i axios
```


### O que são Operações Assíncronas?

Operações assíncronas são aquelas que não bloqueiam a execução do restante do código enquanto esperam por uma resposta. 
Em outras palavras, quando você realiza uma operação assíncrona, o código continua sendo executado enquanto essa operação 
está sendo processada em segundo plano. Quando a operação é concluída, ela "notifica" o código para lidar com o resultado, seja ele um sucesso ou uma falha.

### Promessas e Axios

Axios, assim como muitas outras bibliotecas de requisições HTTP, é baseado em promessas (*promises*). 
Isso significa que, quando você faz uma requisição com Axios, ele retorna uma promessa que representa essa operação assíncrona. 
Podemos então usar os blocos `then` e `catch` para lidar com o resultado da promessa:

1. **Sucesso (`then`)**: Quando a requisição é concluída com sucesso, o bloco `then` é executado. 
Dentro deste bloco, você pode acessar os dados retornados pelo servidor e realizar operações como atualizar o estado 
de um componente ou manipular os dados da forma que for necessária.

2. **Falha (`catch`)**: Se a requisição falhar por algum motivo (por exemplo, se o servidor estiver fora do ar ou 
se a URL estiver incorreta), o bloco `catch` será executado. Dentro deste bloco, você pode tratar o erro de forma
apropriada, como exibindo uma mensagem de erro para o usuário ou tentando a requisição novamente.

### Exemplo de Uso:

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Sucesso: acessa os dados retornados pela API
    console.log('Dados recebidos:', response.data);
  })
  .catch(error => {
    // Falha: trata o erro que ocorreu durante a requisição
    console.error('Ocorreu um erro:', error);
  });
```

### Explicação Passo a Passo:

- **`axios.get('https://jsonplaceholder.typicode.com/posts/1')`**: 
Inicia uma requisição GET para a URL fornecida. Isso retorna uma promessa.

- **`then(response => { ... })`**: 
Se a requisição for bem-sucedida, a promessa é resolvida, e o bloco `then` é executado. 
O objeto `response` contém os dados retornados pela API, que você pode acessar, por exemplo, através de `response.data`.

- **`catch(error => { ... })`**: 
Se a requisição falhar, a promessa é rejeitada, e o bloco `catch` é executado. 
O objeto `error` contém informações sobre o que deu errado, permitindo que você trate o problema adequadamente.

### Resumo

Utilizar `then` e `catch` com Axios permite que você lide de forma eficiente com o fluxo assíncrono das requisições HTTP, 
garantindo que sua aplicação possa responder tanto a resultados bem-sucedidos quanto a falhas de forma controlada.
```

### Importando o Axios

Depois de instalado, é necessário importá-lo no componente que fará as requisições:

```javascript
import axios from 'axios';
```

Aqui está um exemplo de como usar `Axios` em um projeto React Native:

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Componente funcional principal do aplicativo
const App = () => {
  // Estado para armazenar os dados recebidos da API
  const [data, setData] = useState(null);

  // useEffect é um hook que executa código após a renderização do componente
  useEffect(() => {
    // Faz uma requisição GET para a API usando Axios
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        // Quando a requisição é bem-sucedida, os dados da resposta são armazenados no estado
        setData(response.data);
      })
      .catch(error => {
        // Em caso de erro, o erro é registrado no console
        console.error(error);
      });
  }, []); // O array vazio significa que o efeito será executado apenas uma vez após a montagem do componente

  // Renderiza a interface do usuário
  return (
    <View>
      {
        // Se os dados estiverem disponíveis, exibe o título do post
        data ? <Text>{data.title}</Text> 
        // Se os dados ainda não estiverem disponíveis, exibe "Loading..."
        : <Text>Loading...</Text>
      }
    </View>
  );
};

// Exporta o componente para que ele possa ser usado em outros arquivos
export default App;
```

Com `Axios`, a sintaxe para realizar uma requisição é mais simples e direta em comparação com `fetch`, e a resposta já é automaticamente convertida em JSON.
APIs são fundamentais para a comunicação entre diferentes sistemas, e o formato JSON é amplamente utilizado para transportar dados entre o cliente e o servidor. 
Em React Native, tanto `fetch` quanto `Axios` são ferramentas eficazes para consumir APIs RESTful e integrar dados dinâmicos em suas aplicações móveis, porém Axios torna mais fácil o trabalho.
