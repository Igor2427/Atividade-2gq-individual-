import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  guessed: string[];
  onPress: (letter: string) => void;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ guessed, onPress }: Props) {
  return (
    <View style={styles.container}>
      {letters.map((letter) => {
        const used = guessed.includes(letter);
        return (
          <Pressable
            key={letter}
            style={[styles.key, used && styles.keyUsed]}
            onPress={() => onPress(letter)}
            disabled={used}
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
  keyUsed: {
    backgroundColor: "#2a2850",
  },
  keyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
