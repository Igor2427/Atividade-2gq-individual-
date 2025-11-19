import { View, Text, StyleSheet } from "react-native";

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Projetos</Text>

      <Text style={styles.item}>• Projeto A</Text>
      <Text style={styles.item}>• Projeto B</Text>
      <Text style={styles.item}>• Projeto C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { fontSize: 16, marginBottom: 6 },
});
