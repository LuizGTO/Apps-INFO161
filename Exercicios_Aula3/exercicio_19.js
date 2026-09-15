import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const EVENTS = [
  { date: '29/06', label: 'Teste 1', side: 'flex-start' },
  { date: '05/07', label: 'Teste 2', side: 'flex-end' },
  { date: '17/07', label: 'Teste 3', side: 'flex-start' },
  { date: '30/07', label: 'Teste 4', side: 'flex-end' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {EVENTS.map((ev, i) => (
        <View key={i} style={styles.eventRow}>
          <View style={[styles.event, { alignSelf: ev.side }]}>
            <Text>{ev.date} {ev.label}</Text>
          </View>
          <View style={styles.dot} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  eventRow: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    position: 'relative', // necessário p/ posicionar o "dot" dentro da linha
  },
  event: {
    width: '45%',
    height: 50,
    backgroundColor: '#008cff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    // círculo indicando cada evento sobre a linha central (faltava no original)
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 12,
    height: 12,
    marginTop: -6,
    marginLeft: -6,
    borderRadius: 6,
    backgroundColor: '#000',
    zIndex: 1,
  },
});
