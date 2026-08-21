import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Image source={require('./sans.jpg')} style={styles.titulo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: { width: 1500, height: 1000},
});

