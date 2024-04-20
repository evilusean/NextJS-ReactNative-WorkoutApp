import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addSet = () => {
    console.warn("Add Set: ", reps, weight);
    // TODO:
    // ADD ENV VARIABLES
    // ADD DATABASE CODE HERE - NEED TO POST TO OUR MONGO DB = CLUSTER 0 / 'workouts.sets'
    // NEED TO MAKE DATE AND ID VARIABLES FOR DATABASE ENTRY WITH EXERCISE NAME/SETS/WEIGHT+TIME(cardio)
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        styles={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight/Time"
        styles={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gainsboro",
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
});

export default NewSetInput;
