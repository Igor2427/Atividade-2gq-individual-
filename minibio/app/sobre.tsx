import { ScrollView, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>

      <Text style={styles.texto}>
        (Aqui vai exatamente o texto que você tinha antes)
      </Text>

      <Text style={styles.titulo2}>Tecnologias Utilizadas</Text>

      <Text style={styles.item}>• React Native</Text>
      <Text style={styles.item}>• Expo</Text>
      <Text style={styles.item}>• TypeScript</Text>
      <Text style={styles.item}>• Expo Router</Text>
      <Text style={styles.item}>• Outras que você já tinha listado</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  titulo2: { fontSize: 22, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  texto: { fontSize: 16, lineHeight: 22, marginBottom: 20 },
  item: { fontSize: 16, marginVertical: 4 },
});
