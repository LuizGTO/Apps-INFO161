import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.bubble, styles.receivedBubble]}>
        <Text style={styles.name}>João</Text>
        <Text>Oi, tudo bem?</Text>
        <Text style={styles.time}>12:00</Text>
      </View>
      <View style={[styles.bubble, styles.sentBubble]}>
        <Text style={styles.name}>Você</Text>
        <Text>Tudo ótimo, e você?</Text>
        <Text style={styles.time}>12:01</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  bubble: {
    width: '70%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  receivedBubble: {
    backgroundColor: '#ebebeb',
    alignSelf: 'flex-start',
  },
  sentBubble: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: '#666',
  },
});
