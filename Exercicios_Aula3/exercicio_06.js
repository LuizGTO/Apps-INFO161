import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'red' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'red' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column' é o padrão, não precisa declarar
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
