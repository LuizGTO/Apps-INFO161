import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Monitorado() {
  useEffect(() => {
    console.log('Componente montado');
    return () => console.log('Componente desmontado');
  }, []);

  return <Text style={styles.texto}>Componente na tela</Text>;
}

export default function LogDeMontagem() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title={mostrar ? 'Desmontar' : 'Montar'}
        onPress={() => setMostrar(!mostrar)}
      />
      {mostrar && <Monitorado />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { marginTop: 20, fontSize: 18 },
});
