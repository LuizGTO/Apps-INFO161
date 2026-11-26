import { useCameraPermissions } from 'expo-camera';
import { Button, Linking, Text, View } from 'react-native';

export function ComPermissao({ children }) {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) return null; // carregando
  if (permission.granted) return children; // liberado
  return (
    <View>
      <Text>Precisamos da câmera para ler o QR Code.</Text>
      {permission.canAskAgain
        ? <Button title="Permitir" onPress={requestPermission} />
        : <Button title="Abrir ajustes"
            onPress={() => Linking.openSettings()} />}
    </View>
  );
}