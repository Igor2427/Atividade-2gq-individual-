import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" }
      }}
    />
  );
}
