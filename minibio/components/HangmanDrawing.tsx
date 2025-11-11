import React from "react";
import Svg, { Line, Circle } from "react-native-svg";

interface HangmanDrawingProps {
  mistakes: number;
}

export default function HangmanDrawing({ mistakes }: HangmanDrawingProps) {
  return (
    <Svg height="250" width="200">
      {/* Base e poste */}
      <Line x1="10" y1="240" x2="150" y2="240" stroke="white" strokeWidth={4} />
      <Line x1="50" y1="20" x2="50" y2="240" stroke="white" strokeWidth={4} />
      <Line x1="50" y1="20" x2="120" y2="20" stroke="white" strokeWidth={4} />
      <Line x1="120" y1="20" x2="120" y2="40" stroke="white" strokeWidth={4} />

      {/* Cabeça */}
      {mistakes >= 1 && <Circle cx="120" cy="60" r="20" stroke="white" strokeWidth={4} fill="transparent" />}
      {/* Tronco */}
      {mistakes >= 2 && <Line x1="120" y1="80" x2="120" y2="140" stroke="white" strokeWidth={4} />}
      {/* Braço esquerdo */}
      {mistakes >= 3 && <Line x1="120" y1="100" x2="90" y2="120" stroke="white" strokeWidth={4} />}
      {/* Braço direito */}
      {mistakes >= 4 && <Line x1="120" y1="100" x2="150" y2="120" stroke="white" strokeWidth={4} />}
      {/* Perna esquerda */}
      {mistakes >= 5 && <Line x1="120" y1="140" x2="90" y2="180" stroke="white" strokeWidth={4} />}
      {/* Perna direita */}
      {mistakes >= 6 && <Line x1="120" y1="140" x2="150" y2="180" stroke="white" strokeWidth={4} />}
    </Svg>
  );
}
