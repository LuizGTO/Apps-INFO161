import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AlternarVisibilidade() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Mostrar / Esconder" onPress={() => setVisivel(!visivel)} />
      {visivel && <Text style={styles.texto}>Você encontrou o segredo!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { marginTop: 20, fontSize: 20 },
});
