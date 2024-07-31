# Kitten UI Framework
[Kitten UI Framework](https://akveo.github.io/react-native-ui-kitten/)


## Instalação
Para instalar o Kitten UI Framework, use o npm e o expo install:

```bash
npm i @ui-kitten/components @eva-design/eva react-native-svg
npm i @ui-kitten/components @eva-design/eva
expo install react-native-svg@9.13.6
```

## Exemplo de código
```javascript
import React from 'react';
// Importa os componentes ApplicationProvider, Button e Text do Kitten UI
import { ApplicationProvider, Button, Text } from '@ui-kitten/components';

// Importa os componentes View e StyleSheet do React Native
import { View, StyleSheet } from 'react-native';
// Importa o tema e mapeamento padrão do Kitten UI
import * as eva from '@eva-design/eva';

const App = () => {
  return (
    // ApplicationProvider envolve a aplicação e aplica o tema, mapeamento e ícones definidos
    <ApplicationProvider {...eva} theme={eva.light} customMapping={eva.mapping}>
      <View style={styles.container}>
        {/* Componente de texto do Kitten UI com categoria 'h4' para estilo de cabeçalho */}
        <Text category='h4'>Welcome to Kitten UI</Text>
        {/* Componente de botão do Kitten UI */}
        <Button onPress={() => console.log('Pressed')}>Click Me</Button>
      </View>
    </ApplicationProvider>
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
