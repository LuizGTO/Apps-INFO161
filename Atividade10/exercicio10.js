import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function ContadorComEffect() {
  const [valor, setValor] = useState(0);
  const [titulo, setTitulo] = useState('Valor: 0');

  useEffect(() => {
    console.log('Novo valor:', valor);
    setTitulo(`Valor: ${valor}`);
  }, [valor]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Button title="+1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

export default function ContadorRefatorado() {
  const [valor, setValor] = useState(0);

  const titulo = `Valor: ${valor}`;

  useEffect(() => {
    console.log('Novo valor:', valor);
  }, [valor]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Button title="+1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 32, marginBottom: 16 },
});
