/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Você logou');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png' }}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Bem-vindo ao App de Login</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão 1 clicado')}
        >
          <Text style={styles.buttonText}>Botão 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão 2 clicado')}
        >
          <Text style={styles.buttonText}>Botão 2</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
*/

/*
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
*/

/*
//View e Texto
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Este texto está envolto em um container 'View'</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Cor de fundo azul
  },
  texto: {
    color:'red',
    backgroundColor: 'yellow'
  }
});

export default App;
*/


/*
//Imagem
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://external-preview.redd.it/EKy5x0Qa6207CnkpX1J7IDamE7uxTy3yJcQEHt9rHY0.jpg?auto=webp&s=d7551a0657f2256502bcd41d86263a934290871e' }}
        style={styles.image}
      />
      <Text style={styles.imageText}>
        Esta imagem tem {styles.image.width} de largura e {styles.image.height} de altura
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
*/

/*
//ScrollView
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const ScrollViewExample = () => {
  return (
    <ScrollView>
      <View style={styles.task}>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
        <Text style={styles.text}>Fazer compras</Text>
      </View>
      </ScrollView>
      
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  task: {
    
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 60,
    borderRadius: 5,
  },

  text: {
    fontSize:100
  }
});

export default ScrollViewExample;
*/



/*
//TextInput
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function App() {
  const [text, setText] = useState('');

  function handleTextChange(newText) {
    setText(newText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Digite algo..."
        placeholderTextColor="#ccc"
        textAlign="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  },
});

export default App;
*/

/*
//button
import React from 'react';
import { Button, Alert, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Cliqueeee aqui!"
        onPress={() => Alert.alert('Botão pressionado!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  
});

export default App;
*/


/*
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const data = [
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
    { key: 'Item 4' },
    { key: 'Item 5' },
    { key: 'Item 6' },
    { key: 'Item 7' },
    { key: 'Item 8' },
    { key: 'Item 9' },
    { key: 'Item 10' },
    { key: 'Item 11' },
    { key: 'Item 12' },
    
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.key}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    fontSize: 80,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;
*/



/*
//FlatList
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const FlatListExample = () => {
  const data = [
    { id: '1', task: 'Fazer compras' },
    { id: '2', task: 'Pagar contas' },
    { id: '3', task: 'Ligar para o médico' },
    { id: '4', task: 'Estudar React Native' },
    { id: '5', task: 'Ir à academia' },
    { id: '1', task: 'Fazer compras' },
    { id: '2', task: 'Pagar contas' },
    { id: '3', task: 'Ligar para o médico' },
    { id: '4', task: 'Estudar React Native' },
    { id: '5', task: 'Ir à academia' },
    { id: '1', task: 'Fazer compras' },
    { id: '2', task: 'Pagar contas' },
    { id: '3', task: 'Ligar para o médico' },
    { id: '4', task: 'Estudar React Native' },
    { id: '5', task: 'Ir à academia' }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text>{item.task}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  task: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default FlatListExample;
*/

/*
//TouchableOpacity
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
*/




/*
//Componente Funcional
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//a função MeuComponente é um componente funcional (agora em arrow function)
const MeuComponente = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este é um componente funcional</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default MeuComponente;
*/


/*
//Componente de Classe
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Contador: {this.state.contador}</Text>
        <Button title="Incrementar" onPress={this.incrementarContador} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MeuComponente;
*/



/*
//Hook Use State
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Contador() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou {contador} vezes</Text>
      <Button title="Clique aqui" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Contador;

*/



/*
//Use Effect

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Contador() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  function updateDocumentTitle() {
    document.title = `Você clicou ${contador} vezes`;
  }

  useEffect(function() {
    updateDocumentTitle();
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou {contador} vezes</Text>
      <Button title="Clique aqui" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Contador;

*/


/*
//Props
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente filho que recebe uma propriedade 'nome'
const Saudacao = (props) => {
  return (
    <View style={styles.container}>
      <Text>Olá, {props.nome}!</Text>
    </View>
  );
};

// Componente pai que renderiza o componente 'Saudacao' passando a propriedade 'nome'
const App = () => {
  return (
    <View style={styles.container}>
      <Saudacao nome="João" />
      <Saudacao nome="Maria" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

*/
