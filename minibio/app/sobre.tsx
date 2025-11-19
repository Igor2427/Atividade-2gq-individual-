import { View, Text, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Sobre o App
      </Text>

      <Text style={{ marginTop: 10 }}>
        Tecnologias utilizadas:
      </Text>

      <Text>• Expo</Text>
      <Text>• React Native</Text>
      <Text>• Expo Router</Text>
      <Text>• TypeScript</Text>
    </ScrollView>
  );
}
