import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    width: '100%', // era 100 (px fixo) — corrigido para 100% da largura
  },
  card: {
    backgroundColor: 'red',
    width: '49%',
    height: 150,
  },
});
