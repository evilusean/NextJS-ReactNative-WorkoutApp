import React, { useState } from "react";
import { View, TextInput, Button, Picker, Text } from "react-native";
import { Formik } from "formik";
import * as FileSystem from "expo-file-system";

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const { documentDirectory, readAsStringAsync, writeAsStringAsync } =
    FileSystem;

  const appendExerciseDataToFile = async (newValues) => {
    try {
      // Read existing exercise data
      const fileUri = documentDirectory + "exercises.json";
      let existingData = await readAsStringAsync(fileUri);

      // Parse existing exercise data into a JavaScript object
      let exerciseData = existingData ? JSON.parse(existingData) : [];

      // Append new data to the existing JavaScript object
      exerciseData = [...exerciseData, ...newValues];

      // Convert the updated data back to a JSON string
      const updatedData = JSON.stringify(exerciseData);

      // Write the updated content back to the file
      await writeAsStringAsync(fileUri, updatedData);

      console.log("Exercise data appended and saved successfully.");
    } catch (error) {
      console.error("Error appending exercise data:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        muscle: "",
        equipment: "",
        difficulty: "",
        instructions: "",
      }}
      onSubmit={(values) => {
        appendExerciseDataToFile(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Name"
          />
          <TextInput
            onChangeText={handleChange("equipment")}
            onBlur={handleBlur("equipment")}
            value={values.equipment}
            placeholder="Equipment"
          />
          <Text>Select exercise type:</Text>
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue) => setSelectedType(itemValue)}
          >
            <Picker.Item label="Cardio" value="cardio" />
            <Picker.Item label="Strength" value="strength" />
            <Picker.Item label="Stretch" value="stretch" />
            <Picker.Item label="Calisthenics" value="calisthenics" />
          </Picker>
          <View>
            <Text>Select a muscle group:</Text>
            <Picker
              selectedValue={selectedMuscle}
              onValueChange={(itemValue) => setSelectedMuscle(itemValue)}
            >
              <Picker.Item label="Core" value="core" />
              <Picker.Item label="Biceps" value="biceps" />
              <Picker.Item label="Triceps" value="triceps" />
              <Picker.Item label="Wrist" value="wrist" />
              <Picker.Item label="Quads" value="quads" />
              <Picker.Item label="Chest" value="chest" />
              <Picker.Item label="Hamstring" value="hamstring" />
              <Picker.Item label="Glutes" value="glutes" />
              <Picker.Item label="Delts" value="delts" />
              <Picker.Item label="Traps" value="traps" />
              <Picker.Item label="Lats" value="lats" />
              <Picker.Item label="Full-Body" value="full-body" />
            </Picker>
          </View>
          <View>
            <Text>Select difficulty:</Text>
            <Picker
              selectedValue={selectedDifficulty}
              onValueChange={(itemValue) => setSelectedDifficulty(itemValue)}
            >
              <Picker.Item label="Beginner" value="beginner" />
              <Picker.Item label="Intermediate" value="intermediate" />
              <Picker.Item label="Expert" value="expert" />
            </Picker>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={3}
            onChangeText={handleChange("instructions")}
            onBlur={handleBlur("instructions")}
            value={values.instructions}
            placeholder="Instructions"
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ExerciseForm;
