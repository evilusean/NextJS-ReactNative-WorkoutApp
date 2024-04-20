import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Workout App</Text>
      <Button
        title="Add Exercise"
        onPress={() => navigation.navigate("ManualInput")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#000",
    height: 60,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Navbar;
