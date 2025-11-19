import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PALAVRA = "FANTASIA";

export default function Jogo() {
  const [erros, setErros] = useState(0);
  const [letras, setLetras] = useState<string[]>([]);

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const boneco = [
    "",
    "O",
    "O\n|",
    "O\n/|",
    "O\n/|\\",
    "O\n/|\\\n/",
    "O\n/|\\\n/ \\",
  ];

  function tentar(letra: string) {
    if (letras.includes(letra)) return;

    setLetras((antigas) => [...antigas, letra]);

    if (!PALAVRA.includes(letra)) {
      setErros((e) => e + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Forca</Text>

      <Text style={styles.boneco}>{boneco[erros]}</Text>

      <View style={styles.linha}>
        {PALAVRA.split("").map((l, i) => (
          <Text key={i} style={styles.traco}>
            {letras.includes(l) ? l : "_"}
          </Text>
        ))}
      </View>

      <View style={styles.teclado}>
        {alfabeto.map((l) => (
          <TouchableOpacity
            key={l}
            style={styles.letra}
            onPress={() => tentar(l)}
          >
            <Text style={styles.letraTexto}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  boneco: { fontSize: 30, textAlign: "center", marginBottom: 20 },
  linha: { flexDirection: "row", marginBottom: 20 },
  traco: { fontSize: 32, marginHorizontal: 6 },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  letra: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    margin: 4,
  },
  letraTexto: { fontSize: 18, fontWeight: "bold" },
});
