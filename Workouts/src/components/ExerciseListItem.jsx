import exercises from "../../assets/data/exercises.json";

function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
  );
}
