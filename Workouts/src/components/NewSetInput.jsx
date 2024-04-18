import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addset = () => {
    console.warn("Add Set: ", reps, weight);
    setReps("");
    setWeight("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        styles={styles.input}
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        styles={styles.input}
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
