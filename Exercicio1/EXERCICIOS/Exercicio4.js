import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={styles.titulo}>Texto no app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 220, color: 'tomato' },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });