import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require("../assets/foto.jpg")} 
        style={styles.foto}
      />

      <Text style={styles.nome}>Igor Gabriel</Text>

      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Sobre</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/experiencia-profissional" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Experiência Profissional</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/projetos" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Projetos</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/jogo" asChild>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Jogo da Forca</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginBottom: 20,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#1a1a1a",
    padding: 12,
    width: 250,
    borderRadius: 10,
    marginBottom: 12,
  },
  botaoTexto: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
});
