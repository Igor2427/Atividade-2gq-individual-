import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/foto.jpg")}
        style={styles.foto}
      />

      <Text style={styles.nome}>Igor Gabriel</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/sobre")}>
        <Text style={styles.textoBotao}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/experiencia-profissional")}>
        <Text style={styles.textoBotao}>Experiência Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/experiencia-academica")}>
        <Text style={styles.textoBotao}>Experiência Acadêmica</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/projetos")}>
        <Text style={styles.textoBotao}>Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/jogo")}>
        <Text style={styles.textoBotao}>Jogo da Forca</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginVertical: 10,
  },
  textoBotao: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
