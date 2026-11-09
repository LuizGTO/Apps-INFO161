import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContadorComObjeto() {
  const [jogo, setJogo] = useState({ pontos: 0, vidas: 3 });

  const acertar = () => setJogo({ ...jogo, pontos: jogo.pontos + 1 });

  const errar = () =>
    setJogo({ ...jogo, vidas: Math.max(0, jogo.vidas - 1) });

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pontos: {jogo.pontos}</Text>
      <Text style={styles.texto}>Vidas: {jogo.vidas}</Text>
      <View style={styles.botoes}>
        <Button title="Acertar" onPress={acertar} />
        <Button title="Errar" onPress={errar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 28, marginBottom: 8 },
  botoes: { flexDirection: 'row', gap: 16, marginTop: 16 },
});
