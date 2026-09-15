import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile} />
      <Text>Aluno</Text>
      <Text>Bio: Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  profile: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 50, // faltava para deixar a foto circular
  },
});
