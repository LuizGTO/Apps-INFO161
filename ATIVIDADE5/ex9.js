import {View, Text, Button, StyleSheet} from 'react-native';
import { useState } from 'react'

export default function Robson(){
  const[mensagem, setMensagem] = useState("")

  return (
    <View>
      <Text>{mensagem}</Text>
      <Button title="Mostrar" onPress={() => {mensagem == "" ? setMensagem("Robson lindo") : setMensagem("")}}/>
    </View>
  );
}
