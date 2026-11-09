import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionar = () => {
    const texto = novaTarefa.trim();
    if (!texto) return;
    setTarefas([...tarefas, texto]);
    setNovaTarefa('');
  };

  const remover = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar" onPress={adicionar} />
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(_, index) => String(index)}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa.</Text>}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item}</Text>
            <Button title="Remover" onPress={() => remover(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 60 },
  linha: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  textoItem: { flex: 1, fontSize: 16 },
  vazio: { textAlign: 'center', color: '#888', marginTop: 20 },
});
