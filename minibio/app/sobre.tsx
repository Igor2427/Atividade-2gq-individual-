import { ScrollView, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>

      <Text style={styles.texto}>
         Nasci no estado de Pernambuco na cidade de Recife, me formei no
              colégio Damas da Instrução Cristã no ano de 2022 e atualmente
              estou cursando Ciência da Computação na Unicap (5º período).
      </Text>

      <Text style={styles.titulo2}>Tecnologias</Text>

      <Text style={styles.item}>• React Native</Text>
      <Text style={styles.item}>• Expo</Text>
      <Text style={styles.item}>• TypeScript</Text>
      <Text style={styles.item}>• Expo Router</Text>
      <Text style={styles.item}>• Java</Text>
      <Text style={styles.item}>• Python</Text>
      <Text style={styles.item}>• C</Text>
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
