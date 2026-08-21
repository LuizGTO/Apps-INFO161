import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
    <ScrollView style={{ height: 200 }}>
      <Text>Algo</Text>
      <Text>Alguma coisa</Text>
      <Text>Um troço</Text>
    </ScrollView>
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
