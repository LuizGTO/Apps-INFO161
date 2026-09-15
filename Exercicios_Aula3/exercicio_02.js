import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: 'red' }]} />
      <View style={[styles.item, { backgroundColor: 'green' }]} />
      <View style={[styles.item, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  item: {
    width: 100,
    height: 100,
  },
});
