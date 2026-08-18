import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View>
      <Button title="Clique" onPress={() => alert('Você vai ter um tempo paia!')} />
      <TouchableOpacity onPress={() => alert('Por que as pessoas não usam o ataque mais forte primeiro?')}>
        <Image source={require('./sans.jpg')} style={styles.titulo}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: { width: 1500, height: 1000},
});

