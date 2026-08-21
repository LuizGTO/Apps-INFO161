import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  function Saudacao({ nome }) {
    return <Text>Olá, {nome}!</Text>;
  }

  return (
    <>
    <Saudacao nome="Luiz" />
    <Saudacao nome="Lucas" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
