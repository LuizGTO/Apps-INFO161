import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

const PHOTO_URI =
  'https://img.magnific.com/fotos-gratis/closeup-tiro-de-uma-linda-borboleta-com-texturas-interessantes-em-uma-flor-de-petalas-de-laranja_181624-7640.jpg?semt=ais_hybrid&w=740&q=80';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {Array.from({ length: 9 }).map((_, i) => (
          <Image key={i} style={styles.image} source={{ uri: PHOTO_URI }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  grid: {
    width: '100%', // era 500 (px fixo) — corrigido para ocupar toda a largura
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '33.33%',
    height: 120, // "calc(500px / 3)" não existe no RN — usar valor numérico direto
  },
});
