import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View>
          <Text>Conteúdo</Text>
        </View>
        <View>
          <Text>rodapé</Text>
          <Button title="Tóca aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
