import { View, Text, StyleSheet } from "react-native";

const NewSetInput = () => {
  return (
    <View style={styles.container}>
      <Text>New Set Input</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});

export default NewSetInput;
