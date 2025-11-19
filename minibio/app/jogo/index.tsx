import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PALAVRA = "FANTASIA";

export default function JogoForca() {
  const [erros, setErros] = useState(0);
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);

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
    if (letrasAdivinhadas.includes(letra)) return;

    setLetrasAdivinhadas([...letrasAdivinhadas, letra]);

    if (!PALAVRA.includes(letra)) {
      setErros((e) => e + 1);
    }
  }

  const venceu = PALAVRA.split("").every((l) => letrasAdivinhadas.includes(l));
  const perdeu = erros >= boneco.length - 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>

      {/* BONECO */}
      <Text style={styles.boneco}>{boneco[erros]}</Text>

      {/* TRACINHOS */}
      <View style={styles.linha}>
        {PALAVRA.split("").map((l, i) => (
          <Text key={i} style={styles.traco}>
            {letrasAdivinhadas.includes(l) ? l : "_"}
          </Text>
        ))}
      </View>

      {/* LETRAS */}
      <View style={styles.teclado}>
        {alfabeto.map((l) => (
          <TouchableOpacity
            key={l}
            style={[
              styles.letra,
              letrasAdivinhadas.includes(l) && styles.letraUsada,
            ]}
            onPress={() => tentar(l)}
            disabled={venceu || perdeu}
          >
            <Text style={styles.letraTexto}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {venceu && <Text style={styles.msg}>🎉 Você venceu!</Text>}
      {perdeu && <Text style={styles.msg}>💀 Você perdeu!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  boneco: { fontSize: 32, textAlign: "center", height: 120 },
  linha: { flexDirection: "row", marginBottom: 20 },
  traco: { fontSize: 32, marginHorizontal: 6, fontWeight: "bold" },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  letra: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 6,
  },
  letraUsada: {
    backgroundColor: "#ccc",
  },
  letraTexto: { fontSize: 18, fontWeight: "bold" },
  msg: { fontSize: 24, marginTop: 20, fontWeight: "bold" },
});
