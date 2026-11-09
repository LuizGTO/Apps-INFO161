import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CronometroComBotao() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (!rodando) return;

    const timer = setInterval(() => setSegundos((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [rodando]);

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>{segundos}s</Text>
      <Button
        title={rodando ? 'Pausar' : 'Retomar'}
        onPress={() => setRodando(!rodando)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tempo: { fontSize: 48, marginBottom: 16 },
});
