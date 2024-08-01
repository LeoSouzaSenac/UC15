# Guia para Criar um Projeto React Native com Expo

Este guia irá mostrar como criar um projeto React Native utilizando o Expo com o template "blank".

## Passo 1: Instalar Node.js

Primeiro, você precisa ter o Node.js instalado no seu computador. Você pode baixá-lo do [site oficial do Node.js](https://nodejs.org/).

Para verificar se o Node.js foi instalado corretamente, abra o terminal e execute o comando:
```bash
node -v
```

## Passo 2: Instalar Expo CLI

Com o Node.js instalado, você pode instalar a CLI do Expo globalmente usando npm:
```bash
npm install -g expo-cli
```

Para verificar se o Expo CLI foi instalado corretamente, execute:
```bash
expo --version
```

## Passo 3: Criar um Novo Projeto com Expo

Agora, crie um novo projeto Expo utilizando o template "blank". No terminal, execute:
```bash
npx create-expo-app MeuProjeto --template blank
```

## Passo 4: Navegar para o Diretório do Projeto

Após a criação do projeto, navegue até o diretório do projeto:
```bash
cd MeuProjeto
```

## Passo 5: Iniciar o Projeto

Inicie o servidor de desenvolvimento do Expo:
```bash
npx expo start
```

ou use a opção tunnel:
```bash
npx expo start --tunnel
```

### Para usuários de Android, instale o aplicativo Expo Go, abra-o e leia o QR Code que foi gerado no terminal, através da opção "Ler Qr Code".
### Para usuários de Iphone, instale o aplicativo Expo Go e leia o QR Code que foi gerado no terminal pela própria câmera do celular (orbigatório ser com a opção tunnel).

Este comando abrirá o Expo Developer Tools no seu navegador. Você pode usar o aplicativo Expo Go no seu dispositivo móvel (disponível na App Store e Google Play) para escanear o QR code e visualizar o projeto.

## Estrutura Básica do Projeto

A estrutura básica de um projeto criado com o template "blank" é a seguinte:

```
MeuProjeto
├── App.js
├── app.json
├── assets
│   └── ...
├── babel.config.js
├── node_modules
│   └── ...
├── package.json
└── yarn.lock
```

### Arquivo `App.js`

O arquivo `App.js` é o ponto de entrada do seu aplicativo. Aqui está um exemplo básico de como pode ser:
```javascript
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, mundo!</Text>
    </View>
  );
}
```

## Conclusão

Para mais informações, consulte a [documentação oficial do Expo](https://docs.expo.dev/).
