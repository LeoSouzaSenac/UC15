# Galio Framework
[Galio Framework](https://galio.io/) é um conjunto de componentes de UI bonitos e personalizáveis para React Native.


## Instalação
Para instalar o Galio Framework, use o npm:

```bash
npm install galio-framework
```

## Exemplo de código
```javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';
// Importa componentes do Galio Framework
import { Button, Text } from 'galio-framework';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Componente de texto do Galio, com um estilo de cabeçalho */}
      <Text h4>Welcome to Galio</Text>
      {/* Componente de botão do Galio, com estilo arredondado e cor de informação */}
      <Button round size="small" color="info">Click Me</Button>
    </View>
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

