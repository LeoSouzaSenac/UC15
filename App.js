import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // Usando useState para gerenciar o estado do contador
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = () => setCount(count + 1);

  // Função para exibir um alerta
  const showAlert = () => Alert.alert('Olá!', 'Este é o meu alerta.');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindos a este aplicativo!</Text>
      
      <Text style={styles.counterText}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={increment} />

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Mostrar Alerta</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Demonstrando React Native</Text>
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
});
