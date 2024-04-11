import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercises = exercises[0];

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={() => {
          return (
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercises.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                {exercises.muscle.toUpperCase()} |{" "}
                {exercises.equipment.toUpperCase()}
              </Text>
            </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
