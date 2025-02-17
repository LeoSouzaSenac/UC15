# **`TextInput`** - Componente de Entrada de Texto no React Native

O **`TextInput`** é um dos componentes fundamentais no React Native para criar campos de entrada de texto. Ele permite que os usuários insiram dados, como senhas, nomes, emails e outros tipos de texto. Além disso, ele oferece grande flexibilidade e personalização de comportamentos, como manipulação de eventos e validação de dados.

## **Visão Geral**

O **`TextInput`** permite criar campos de entrada de texto interativos. Ele pode ser usado para capturar qualquer tipo de dado textual, como emails, senhas, nomes, etc. Além de permitir a personalização do estilo, o **`TextInput`** oferece diversas propriedades úteis para personalizar o comportamento do campo de entrada, como controle de valor, validação de entrada, e tipo de teclado.

## **Propriedades**

### 1. **`value`**
- **Tipo**: `string`
- **Descrição**: Define o valor do campo de texto. Esse valor deve ser controlado via estado para capturar a entrada do usuário.
  
```jsx
const [text, setText] = useState("");

<TextInput
  value={text}
  onChangeText={setText}
/>
```

### 2. **`onChangeText`**
- **Tipo**: `function`
- **Descrição**: Função chamada sempre que o texto é alterado. Recebe o novo texto como argumento.
  
```jsx
<TextInput
  value={text}
  onChangeText={(newText) => setText(newText)}
/>
```

### 3. **`placeholder`**
- **Tipo**: `string`
- **Descrição**: Texto exibido dentro do campo de texto quando ele está vazio, para sugerir o tipo de entrada que o usuário deve fornecer.
  
```jsx
<TextInput placeholder="Digite seu nome" />
```

### 4. **`secureTextEntry`**
- **Tipo**: `boolean`
- **Descrição**: Quando definido como `true`, oculta o texto digitado (geralmente usado para senhas).
  
```jsx
<TextInput secureTextEntry={true} placeholder="Digite sua senha" />
```

### 5. **`keyboardType`**
- **Tipo**: `string`
- **Descrição**: Define o tipo de teclado que será exibido. Pode ser usado para controlar o comportamento do teclado virtual, como números, emails ou senhas.
  - Exemplos: `"default"`, `"email-address"`, `"numeric"`, `"phone-pad"`, etc.
  
```jsx
<TextInput keyboardType="email-address" placeholder="Digite seu email" />
```

### 6. **`onSubmitEditing`**
- **Tipo**: `function`
- **Descrição**: Função chamada quando o usuário pressiona "Enter" ou "Return" no teclado.
  
```jsx
<TextInput
  value={text}
  onSubmitEditing={() => alert("Enviado!")}
  placeholder="Digite algo"
/>
```

### 7. **`maxLength`**
- **Tipo**: `number`
- **Descrição**: Limita o número máximo de caracteres que o usuário pode digitar.
  
```jsx
<TextInput maxLength={10} placeholder="Máximo de 10 caracteres" />
```

### 8. **`multiline`**
- **Tipo**: `boolean`
- **Descrição**: Quando definido como `true`, permite que o campo de texto ocupe várias linhas.
  
```jsx
<TextInput multiline={true} placeholder="Digite sua mensagem" />
```

### 9. **`autoFocus`**
- **Tipo**: `boolean`
- **Descrição**: Define se o campo de texto deve receber o foco automaticamente quando o componente for renderizado.
  
```jsx
<TextInput autoFocus={true} placeholder="Digite algo aqui" />
```

### 10. **`editable`**
- **Tipo**: `boolean`
- **Descrição**: Define se o campo de texto pode ser editado. Quando `false`, o texto não pode ser alterado.
  
```jsx
<TextInput editable={false} value="Texto fixo" />
```

### 11. **`style`**
- **Tipo**: `object` or `array`
- **Descrição**: Permite definir os estilos CSS do componente. Pode ser um objeto ou um array de objetos de estilo.
  
```jsx
<TextInput style={{ borderWidth: 1, padding: 10, borderColor: 'gray' }} />
```

### 12. **`textAlign`**
- **Tipo**: `string`
- **Descrição**: Alinha o texto dentro do campo de texto. Os valores podem ser:
  - `"left"`, `"center"`, `"right"`.
  
```jsx
<TextInput style={{ textAlign: 'center' }} placeholder="Texto centralizado" />
```

### 13. **`onFocus`**
- **Tipo**: `function`
- **Descrição**: Função chamada quando o campo de texto recebe o foco (quando o usuário toca no campo).
  
```jsx
<TextInput onFocus={() => console.log('Foco no campo!')} />
```

### 14. **`onBlur`**
- **Tipo**: `function`
- **Descrição**: Função chamada quando o campo de texto perde o foco (quando o usuário clica fora do campo).
  
```jsx
<TextInput onBlur={() => console.log('Perdeu o foco!')} />
```

## **Exemplo Completo**

Aqui está um exemplo de como usar o **`TextInput`** com várias das propriedades mencionadas acima:

```jsx
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Digite seu nome"
        keyboardType="default"
        onSubmitEditing={() => console.log('Submit Editado')}
        maxLength={20}
        autoFocus={true}
      />

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Digite sua senha"
        secureTextEntry={isSecure}
        onFocus={() => setIsSecure(true)}
        onBlur={() => setIsSecure(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
  },
});
```

## **Dicas e Boas Práticas**

1. **Controle do Valor**:
   - O valor do **`TextInput`** deve ser sempre controlado com o estado. Isso permite acessar o texto inserido a qualquer momento e realizar validações.

2. **Feedback Visual**:
   - Use **`onFocus`** e **`onBlur`** para fornecer feedback visual ao usuário, como alterar a cor da borda ou o estilo do campo de texto quando ele recebe ou perde o foco.

3. **Segurança no Campo de Senha**:
   - Use **`secureTextEntry`** para ocultar o texto digitado no campo de senha. Isso é essencial para proteger a privacidade do usuário.

4. **Limitação de Texto**:
   - Utilize a propriedade **`maxLength`** para evitar que os usuários digitem mais caracteres do que o necessário. Isso também pode ajudar a validar entradas.

5. **Múltiplas Linhas**:
   - Se o campo de entrada precisa de várias linhas, use **`multiline`**. Isso é útil para campos como comentários ou descrições longas.

6. **Teclado Específico**:
   - Use **`keyboardType`** para determinar qual tipo de teclado deve ser exibido, como o teclado numérico para campos de telefone ou o teclado de email para campos de email.

## **Conclusão**

O **`TextInput`** é um dos componentes mais essenciais no React Native para capturar a entrada de texto dos usuários. Ele oferece uma vasta gama de propriedades que permitem personalizar o comportamento, aparência e interatividade do campo de texto. Ao controlar seu valor com o estado e usar propriedades como **`onChangeText`**, **`keyboardType`**, **`secureTextEntry`**, e outras, você pode criar formulários e interfaces de entrada extremamente poderosos e flexíveis.
