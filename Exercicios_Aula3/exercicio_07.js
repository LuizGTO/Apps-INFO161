import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.item}><Text>Criar</Text></View>
      <View style={styles.item}><Text>Apagar</Text></View>
      <View style={styles.item}><Text>Salvar</Text></View>
      <View style={styles.item}><Text>Atualizar</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // faltava para virar um menu horizontal
    width: '100%',        // era 100 (px fixo) — corrigido para 100% da largura
    height: 60,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
