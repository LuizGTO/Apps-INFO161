import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bar: {
    height: 100,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 30, // metade da largura/altura garante círculo perfeito
    backgroundColor: 'white',
  },
});
