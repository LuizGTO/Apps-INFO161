import {View, Text, Button, StyleSheet} from 'react-native';

function Card({titulo, corFundo}){
  const styles = StyleSheet.create({
    conteiner: {backgroundColor: corFundo}
  })

  return (
    <View style = {styles.conteiner}>
      <Text>{titulo}</Text>
    </View>
  );
}

export default function Robson(){
  return(
    <View>
      <Card titulo="Robson Lindo!!!!" corFundo="tomato"/>
    </View>
  );
}
