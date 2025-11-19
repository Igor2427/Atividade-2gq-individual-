import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Bem-vindo!</Text>

      <Link href="/sobre" asChild>
        <Button title="Sobre o App" />
      </Link>

      <Link href="/experiencia-academica" asChild>
        <Button title="Experiência Acadêmica" />
      </Link>

      <Link href="/experiencia-profissional" asChild>
        <Button title="Experiência Profissional" />
      </Link>

      <Link href="/projetos" asChild>
        <Button title="Projetos" />
      </Link>

      <Link href="/jogo" asChild>
        <Button title="Jogar Forca" />
      </Link>
    </View>
  );
}
