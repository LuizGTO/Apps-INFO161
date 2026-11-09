import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContadorSimples() {
  const [numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <View style={styles.botoes}>
        <Button title="-" onPress={() => setNumero(numero - 1)} />
        <Button title="+" onPress={() => setNumero(numero + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  numero: { fontSize: 48, marginBottom: 16 },
  botoes: { flexDirection: 'row', gap: 16 },
});
