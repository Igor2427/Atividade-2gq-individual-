import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import HangmanDrawing from "../components/HangmanDrawing";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";

const WORDS = ["REACT", "PYTHON", "JAVA", "C", "CSS", "UNIVERSO"];

export default function JogoPage() {
  const [word, setWord] = useState<string>(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [guessed, setGuessed] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);

  const handleGuess = (letter: string) => {
    if (guessed.includes(letter)) return;

    const newGuessed = [...guessed, letter];
    setGuessed(newGuessed);

    if (!word.includes(letter)) {
      setMistakes(mistakes + 1);
    }

    if (word.split("").every((l) => newGuessed.includes(l))) {
      Alert.alert("🔥 Vitória!", `A palavra era ${word}`, [
        { text: "Jogar novamente", onPress: resetGame },
      ]);
    } else if (mistakes + 1 >= 6) {
      Alert.alert("💀 Derrota!", `A palavra era ${word}`, [
        { text: "Tentar de novo", onPress: resetGame },
      ]);
    }
  };

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessed([]);
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
        <Keyboard guessed={guessed} onPress={handleGuess} />
        <Link href="/" style={styles.backButton}>
          Voltar para Home
        </Link>
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
  backButton: {
    marginTop: 20,
    backgroundColor: "#64ffda",
    color: "#0A192F",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
