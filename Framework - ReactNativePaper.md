# ReactNativePaper Framework
[React Native Paper Framework](https://callstack.github.io/react-native-paper/) 


## Instalação
Para instalar o ReactNativePaper Framework, use o npm:

```bash
npm install react-native-paper 
npm install react-native-safe-area-context 
```

## Edite o arquivo `babel.config.js`:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};

```


## Exemplo de código
```javascript
import React from 'react';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Componente de texto do React Native Paper com estilo de título pequeno */}
        <Text variant="headlineSmall">Welcome to React Native Paper</Text>
        {/* Componente de botão do React Native Paper, com estilo de botão contido */}
        <Button mode="contained" onPress={() => console.log('Pressed')}>Click Me</Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

```
