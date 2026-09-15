import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 50, width: 100, backgroundColor: 'green' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
      <View style={{ height: 75, width: 100, backgroundColor: 'red' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start', // era "flex_start" (inválido) — corrigido para "flex-start"
  },
});
