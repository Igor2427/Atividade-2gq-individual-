import { View, Text } from "react-native";

export default function ExperienciaProfissional() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Experiência Profissional
      </Text>
      <Text>• Empresa X — Cargo Y</Text>
      <Text>• Empresa Z — Cargo W</Text>
    </View>
  );
}
