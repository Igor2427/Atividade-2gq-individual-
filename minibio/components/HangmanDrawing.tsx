import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";

interface Props {
  mistakes: number;
}

export default function HangmanDrawing({ mistakes }: Props) {
  return (
    <View style={styles.container}>
      <Svg height="180" width="120" viewBox="0 0 120 180">
        {/* Base da forca */}
        <Line x1="10" y1="170" x2="110" y2="170" stroke="white" strokeWidth="4" />
        <Line x1="40" y1="20" x2="40" y2="170" stroke="white" strokeWidth="4" />
        <Line x1="40" y1="20" x2="100" y2="20" stroke="white" strokeWidth="4" />
        <Line x1="100" y1="20" x2="100" y2="40" stroke="white" strokeWidth="4" />

        {/* Boneco */}
        {mistakes > 0 && <Circle cx="100" cy="55" r="15" stroke="white" strokeWidth="3" />}
        {mistakes > 1 && <Line x1="100" y1="70" x2="100" y2="110" stroke="white" strokeWidth="3" />}
        {mistakes > 2 && <Line x1="100" y1="80" x2="85" y2="100" stroke="white" strokeWidth="3" />}
        {mistakes > 3 && <Line x1="100" y1="80" x2="115" y2="100" stroke="white" strokeWidth="3" />}
        {mistakes > 4 && <Line x1="100" y1="110" x2="85" y2="140" stroke="white" strokeWidth="3" />}
        {mistakes > 5 && <Line x1="100" y1="110" x2="115" y2="140" stroke="white" strokeWidth="3" />}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
