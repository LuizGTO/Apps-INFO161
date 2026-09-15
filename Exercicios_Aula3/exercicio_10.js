import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      {/* ScrollView já cuida do scroll — "calc()" e "overflow: scroll" não existem no RN */}
      <ScrollView style={styles.content}>
        <Text>Conteúdo rolável...</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#3498db',
  },
  content: {
    flex: 1,
  },
});
