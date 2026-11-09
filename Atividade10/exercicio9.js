import { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function BuscaComDebounce() {
  const [texto, setTexto] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (!texto.trim()) {
      setResultados([]);
      return;
    }

    const buscar = (termo) => {
      setCarregando(true);
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((r) => r.json())
        .then((usuarios) =>
          setResultados(
            usuarios.filter((u) =>
              u.name.toLowerCase().includes(termo.toLowerCase())
            )
          )
        )
        .catch(() => setResultados([]))
        .finally(() => setCarregando(false));
    };

    const t = setTimeout(() => buscar(texto), 500);

    return () => clearTimeout(t);
  }, [texto]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar usuários..."
        value={texto}
        onChangeText={setTexto}
      />

      {carregando && <ActivityIndicator style={styles.loading} />}

      <FlatList
        data={resultados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        ListEmptyComponent={
          !carregando && texto.trim() ? (
            <Text style={styles.vazio}>Nenhum resultado.</Text>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 60 },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10 },
  loading: { marginTop: 12 },
  item: { fontSize: 18, paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
  vazio: { textAlign: 'center', color: '#888', marginTop: 20 },
});
