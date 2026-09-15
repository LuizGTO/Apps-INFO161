import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <TextInput style={styles.input} placeholder="email" />
      <TextInput style={styles.input} placeholder="senha" secureTextEntry />
      <Button title="Logar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  logo: {
    height: 80,
    width: 80,
    backgroundColor: 'orange',
    borderRadius: 999,
  },
  input: {
    width: '80%',
    borderWidth: 2,       // "border: 2px solid black" não existe no RN
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
  },
});
