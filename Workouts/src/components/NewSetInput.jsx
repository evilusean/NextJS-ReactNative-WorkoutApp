import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const NewSetInput = () => {
  const addset = () => {
    console.warn("Add Set");
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder="Reps" styles={styles.input} />
      <TextInput placeholder="Weight" styles={styles.input} />
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
