import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function Home() {
  return (
    <LinearGradient colors={["#0a192f", "#112240"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Currículo</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.left}>
          <Image
            source={require("../assets/foto.jpg")}
            style={styles.image}
          />
          <Link href="/jogo" style={styles.button}>
            Jogar Forca
          </Link>
        </View>

        <View style={styles.right}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Nome: Igor Gabriel Lira Uchôa</Text>
            <Text style={styles.infoText}>Idade: 20</Text>
            <Text style={styles.infoText}>Sobre:</Text>
            <Text style={styles.desc}>
              Nasci no estado de Pernambuco na cidade de Recife, me formei no
              colégio Damas da Instrução Cristã no ano de 2022 e atualmente
              estou cursando Ciência da Computação na Unicap (5º período).
            </Text>
            <Text style={styles.infoText}>Tecnologias:</Text>
            <Text style={styles.desc}>Python, Java, C, CSS.</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  header: {
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 15,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 30,
    gap: 20,
  },
  left: {
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "black",
  },
  button: {
    backgroundColor: "#64ffda",
    color: "#0A192F",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: "center",
  },
  right: {
    maxWidth: 300,
  },
  infoBox: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 8,
  },
  infoText: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 4,
  },
  desc: {
    color: "white",
    textAlign: "justify",
    marginBottom: 8,
  },
});
