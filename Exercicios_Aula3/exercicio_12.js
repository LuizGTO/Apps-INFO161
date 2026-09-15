import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PHOTO_URI =
  'https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Image style={styles.image} source={{ uri: PHOTO_URI }} />
          <Text style={styles.title}>Título</Text>
        </View>
        <Text style={styles.price}>R$ 70,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,       // era 500x650 (grande demais p/ tela)
    height: 380,
    borderRadius: 25,
    backgroundColor: '#0077ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    overflow: 'hidden',
  },
  info: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
