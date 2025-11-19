import { View, Text } from "react-native";

export default function Projetos() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Projetos
      </Text>

      <Text>• Projeto A</Text>
      <Text>• Projeto B</Text>
      <Text>• Projeto C</Text>
    </View>
  );
}
