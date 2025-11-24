import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  guessed: string[];   // letras corretas
  wrong: string[];     // letras erradas
  onPress: (letter: string) => void;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ guessed, wrong, onPress }: Props) {
  return (
    <View style={styles.container}>
      {letters.map((letter) => {
        const isCorrect = guessed.includes(letter);
        const isWrong = wrong.includes(letter);

        let keyStyle = styles.key;
        if (isCorrect) keyStyle = styles.keyCorrect;
        else if (isWrong) keyStyle = styles.keyWrong;

        return (
          <Pressable
            key={letter}
            style={keyStyle}
            onPress={() => onPress(letter)}
            disabled={isCorrect || isWrong}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
  },
  key: {
    backgroundColor: "#4e4b8c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 8,
  },
  keyCorrect: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 8,
  },
  keyWrong: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 8,
  },
  keyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
