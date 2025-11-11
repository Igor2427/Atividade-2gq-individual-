import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  word: string;
  guessed: string[];
}

export default function WordDisplay({ word, guessed }: Props) {
  return (
    <View style={styles.row}>
      {word.split("").map((letter, i) => (
        <Text key={i} style={styles.letter}>
          {guessed.includes(letter) ? letter : "_"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 24,
  },
  letter: {
    color: "white",
    fontSize: 28,
    marginHorizontal: 4,
  },
});
