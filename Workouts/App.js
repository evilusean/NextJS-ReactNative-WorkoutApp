import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercises = exercises[0];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{exercises.name}</Text>
      <Text style={{ color: "dimgray" }}>
        Muscle: {exercises.muscle} | Equipment: {exercises.equipment}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
