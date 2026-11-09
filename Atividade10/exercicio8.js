import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function BuscarDadosDeAPI() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Falha na requisição');
        return resposta.json();
      })
      .then((json) => setDados(json))
      .catch(() => setErro('Não foi possível carregar os dados.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.lista}
      data={dados}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  erro: { color: 'red', fontSize: 16 },
  lista: { marginTop: 60, paddingHorizontal: 24 },
  item: { fontSize: 18, paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
});
