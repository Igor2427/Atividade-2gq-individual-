import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HangmanDrawing from "../../components/HangmanDrawing";
import WordDisplay from "../../components/WordDisplay";
import Keyboard from "../../components/Keyboard";

const WORDS = ["DRAGAO",
  "ESPADA",
  "MAGIA",
  "ORC",
  "ELFO",
  "ANAO",
  "BRUXO",
  "GUERREIRO",
  "PALADINO",
  "SOMBRIO",
  "ARQUEIRO",
  "BESTA",
  "FANTASMA",
  "CAVERNA",
  "MALEDICAO",
  "SACERDOTE",
  "LOBISOMEM",
  "TREVAS",
  "GOLEM",
  "INVOCACAO"];

export default function JogoPage() {
  const [word, setWord] = useState<string>(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );

  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);

  const handleGuess = (letter: string) => {
    const upper = letter.toUpperCase();

    if (guessed.includes(upper) || wrong.includes(upper)) return;

    if (word.includes(upper)) {
      const newGuessed = [...guessed, upper];
      setGuessed(newGuessed);

      if (word.split("").every((l) => newGuessed.includes(l))) {
        Alert.alert("Vitória!", `A palavra era ${word}`, [
          { text: "Jogar novamente", onPress: resetGame },
        ]);
      }
    } else {
      const newWrong = [...wrong, upper];
      setWrong(newWrong);
      setMistakes((prev) => prev + 1);

      if (mistakes + 1 >= 6) {
        Alert.alert("Derrota!", `A palavra era ${word}`, [
          { text: "Tentar novamente", onPress: resetGame },
        ]);
      }
    }
  };

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessed([]);
    setWrong([]);
    setMistakes(0);
  };

  return (
    <LinearGradient
      colors={["#0055A4", "#FFFFFF", "#EF4135"]}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Jogo da Forca</Text>

        <HangmanDrawing mistakes={mistakes} />

        <WordDisplay word={word} guessed={guessed} />

        <Keyboard guessed={guessed} wrong={wrong} onPress={handleGuess} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inner: {
    alignItems: "center",
    gap: 16,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
});
