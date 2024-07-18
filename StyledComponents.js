import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const ExampleComponent = () => (
  <Container>
    <Title>Hello, styled-components!</Title>
    <Button onPress={() => alert('Button pressed')}>
      <ButtonText>Press me</ButtonText>
    </Button>
  </Container>
);

export default ExampleComponent;
