import { Stack } from "expo-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Stack>
      <Navbar />
      <Stack.Screen name="Index" options={{ title: "Exercises " }} />
    </Stack>
  );
}
