import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

const LISTA_PALAVRAS = [
  "REACT", "JAVASCRIPT", "EXPO", "COMPONENTE", "HOOKS",
  "ESTADO", "PROPRIEDADES", "FRONTEND", "API", "CSS", "HTML",
  "FUNCAO", "OBJETO", "ARRAY", "VARIAVEL", "CONSTANTE", "ASYNC",
  "PROMISE", "STRING", "NAVEGADOR", "PACOTE", "FORCA"
];

export default function JogoPage() {
  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [status, setStatus] = useState<"jogando" | "vitoria" | "derrota">("jogando");

  useEffect(() => novaPartida(), []);

  function novaPartida() {
    const aleatoria = LISTA_PALAVRAS[Math.floor(Math.random() * LISTA_PALAVRAS.length)];
    setPalavra(aleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setStatus("jogando");
  }

  function verificarLetra(letra: string) {
    if (status !== "jogando") return;
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes((prev) => prev - 1);
    }
  }

  useEffect(() => {
    if (!palavra) return;
    if (tentativasRestantes === 0) setStatus("derrota");
    else if (palavra.split("").every((l) => letrasCorretas.includes(l))) setStatus("vitoria");
  }, [letrasCorretas, tentativasRestantes, palavra]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <Text style={styles.subtext}>Tentativas restantes: {tentativasRestantes}</Text>

      {/* Letras e tracinhos */}
      <View style={styles.wordContainer}>
        {palavra.split("").map((letra, index) => (
          <View key={index} style={styles.letterSlot}>
            <Text style={styles.letterText}>
              {letrasCorretas.includes(letra) ? letra : ""}
            </Text>
          </View>
        ))}
      </View>

      {/* Teclado */}
      <View style={styles.keyboardContainer}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letra) => (
          <Pressable
            key={letra}
            onPress={() => verificarLetra(letra)}
            disabled={
              letrasCorretas.includes(letra) ||
              letrasErradas.includes(letra) ||
              status !== "jogando"
            }
            style={[
              styles.key,
              letrasCorretas.includes(letra) && styles.correctKey,
              letrasErradas.includes(letra) && styles.wrongKey,
            ]}
          >
            <Text style={styles.keyText}>{letra}</Text>
          </Pressable>
        ))}
      </View>

      {/* Resultado */}
      {status !== "jogando" && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {status === "vitoria"
              ? "🎉 Você ganhou!"
              : `😢 Você perdeu! A palavra era: ${palavra}`}
          </Text>
          <Pressable onPress={novaPartida} style={styles.button}>
            <Text style={styles.buttonText}>Nova Partida</Text>
          </Pressable>
        </View>
      )}

      <Link href="/" style={styles.link}>
        Voltar para Home
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0A192F",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#64ffda",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtext: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  letterSlot: {
    width: 30,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "white",
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  letterText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  keyboardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  key: {
    backgroundColor: "#112240",
    padding: 10,
    margin: 3,
    borderRadius: 6,
  },
  keyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  correctKey: {
    backgroundColor: "green",
  },
  wrongKey: {
    backgroundColor: "red",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#64ffda",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#0A192F",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: "#64ffda",
    fontWeight: "bold",
    fontSize: 16,
  },
});
