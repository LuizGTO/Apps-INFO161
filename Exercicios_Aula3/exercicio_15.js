import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.nomeContainer}>
          <View style={styles.profileImage} />
          <Text>Nome</Text>
        </View>
        <Text style={styles.caption}>Legenda do post aqui...</Text>
        <View style={styles.postImage} />
        <View style={styles.actions}>
          <Button title="curtir" />
          <Button title="comentar" />
        </View>
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
  postContainer: {
    width: 320,       // era 600x600 (grande demais p/ tela)
    gap: 10,
    padding: 10,
    borderWidth: 2,   // "border: 2px solid black" não existe no RN
    borderColor: 'black',
    alignItems: 'flex-start',
  },
  nomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  caption: {
    alignSelf: 'flex-start',
  },
  postImage: {
    width: '100%',
    height: 250,
    backgroundColor: 'violet',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'flex-start',
  },
});
