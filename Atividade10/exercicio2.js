import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function SaudacaoComNome() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.saudacao}>Olá, {nome}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10 },
  saudacao: { marginTop: 16, fontSize: 24 },
});
