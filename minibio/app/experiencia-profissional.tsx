import { View, Text, StyleSheet } from "react-native";

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Experiência Profissional</Text>

      <Text style={styles.item}>• Empresa X — Cargo Y</Text>
      <Text style={styles.item}>• Empresa Z — Cargo W</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { fontSize: 16, marginBottom: 6 },
});
