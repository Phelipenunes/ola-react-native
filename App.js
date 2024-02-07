import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>rodapé</Text>
          <Button title="Tóca aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  cabecalho: {
    backgroundColor: "red",
    height: "10%",
  },
  conteudo: {
    backgroundColor: "green",
    height: "10%",
  },
  rodape: {
    backgroundColor: "yellow",
    height: "10%",
  },
});
