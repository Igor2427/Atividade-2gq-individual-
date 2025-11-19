import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// LISTA DE PALAVRAS PARA SORTEIO
const PALAVRAS = [
  "FANTASIA", "MAGO", "ESPADA", "ORC", "DRAGAO", "RUNAS", "MAGIA",
  "FORTALEZA", "REINO", "SOMBRAS", "TORMENTA", "CAVALEIRO", "ARCANO",
  "FEITICEIRO", "ALQUIMIA", "TEMPLO", "BESTA", "CREPUSCULO", "TRONO",
  "LABIRINTO", "CRISTAL", "GOBLIN", "ANCIÃO", "CHAMA", "VENTANIA",
  "RELAMPAGO", "FURIA", "CAOS", "SAGRADO", "LENDARIO"
];

function sortearPalavra() {
  const indice = Math.floor(Math.random() * PALAVRAS.length);
  return PALAVRAS[indice];
}

export default function Jogo() {
  const router = useRouter();

  const [palavra, setPalavra] = useState<string>(sortearPalavra());
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

  const estruturaForca = `
  ________
 |        |
 |        
 |        
_|_
`;

  function tentar(letra: string) {
    if (letras.includes(letra)) return;

    setLetras((antigas) => [...antigas, letra]);

    if (!palavra.includes(letra)) {
      setErros((e) => e + 1);
    }
  }

  function reiniciar() {
    setErros(0);
    setLetras([]);
    setPalavra(sortearPalavra());
  }

  const venceu = palavra.split("").every((l) => letras.includes(l));
  const perdeu = erros === 6;

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
        <Text style={styles.voltarTxt}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Jogo da Forca</Text>

      <Text style={styles.forca}>{estruturaForca}</Text>
      <Text style={styles.boneco}>{boneco[erros]}</Text>

      <View style={styles.linha}>
        {palavra.split("").map((l, i) => (
          <Text key={i} style={styles.traco}>
            {letras.includes(l) ? l : "_"}
          </Text>
        ))}
      </View>

      {venceu && <Text style={styles.mensagemVitoria}> Você ganhou!</Text>}
      {perdeu && (
        <Text style={styles.mensagemDerrota}>
           Você perdeu! A palavra era: {palavra}
        </Text>
      )}

      {!venceu && !perdeu && (
        <View style={styles.teclado}>
          {alfabeto.map((l) => {
            const usado = letras.includes(l);
            const acertou = usado && palavra.includes(l);
            const errou = usado && !palavra.includes(l);

            return (
              <TouchableOpacity
                key={l}
                disabled={usado}
                style={[styles.letra, usado && styles.letraUsada]}
                onPress={() => tentar(l)}
              >
                <Text
                  style={[
                    styles.letraTexto,
                    acertou && styles.letraAcertada,
                    errou && styles.letraErrada,
                  ]}
                >
                  {l}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {(venceu || perdeu) && (
        <TouchableOpacity style={styles.botao} onPress={reiniciar}>
          <Text style={styles.botaoTxt}>Jogar de Novo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },

  voltar: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  voltarTxt: { fontSize: 18, color: "blue" },

  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 15 },

  forca: {
    fontSize: 20,
    fontFamily: "monospace",
    textAlign: "center",
    marginTop: -10,
  },

  boneco: {
    fontSize: 24,
    fontFamily: "monospace",
    textAlign: "center",
    marginBottom: 20,
  },

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
    paddingVertical: 8,
    paddingHorizontal: 10,
    margin: 4,
  },

  letraUsada: {
    backgroundColor: "#ddd",
    borderColor: "#aaa",
  },

  letraTexto: { fontSize: 18, fontWeight: "bold", color: "#555" },
  letraAcertada: { color: "green", fontWeight: "bold" },
  letraErrada: { color: "red", fontWeight: "bold" },

  botao: {
    marginTop: 20,
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  botaoTxt: { color: "white", fontSize: 18 },

  mensagemVitoria: { fontSize: 22, color: "green", marginBottom: 10 },
  mensagemDerrota: { fontSize: 22, color: "red", marginBottom: 10 },
});
