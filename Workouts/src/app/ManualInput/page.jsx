import React from "react";
import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import axios from "axios";

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(""); // Add state for selected exercise type
  const [selectedEquipment, setSelectedEquipment] = useState("");
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
        axios
          .post("Your_API_Endpoint", values)
          .then((response) => {
            console.log("Form data sent successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error sending form data:", error);
          });
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
          {/* Add more TextInput fields for type, muscle, equipment, difficulty, and instructions 
          FIX selectedValue={selectedType} for TYPE / DIFFICULTY / MUSCLE USING SAME VARIABLE NAME
          FIX USE STATE AT TOP, SOME MISSING, ("")
          CHECK INITIAL VALUES
          CHECK FORMIK - FIRST TIME ENCOUNTERED - READ DOCS
          CHECK onValueChange={(itemValue, itemIndex) =>
                setSelectedMuscle(itemValue) FOR EACH, REPEATED VARIABLE USE MIGHT CLASH
          CONNECT API TO MONGODB, 
          IMPORT TO LAYOUT, CREATE A WAY TO ADD IN NEW EXERCISES AND GET TO THIS SCREEN/URL
          TEST DB
          SEE IF WE CAN USE AXIOS OR NEED MONGOOSE
          FUTURE SEAN PROBLEMS, HALF WAY THERE
          AFTER IT WORKS, ADD EXERCISES
          */}
          <Text>Select exercise type:</Text>
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
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
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMuscle(itemValue)
              }
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
            </Picker>
          </View>
          <View>
            <Text>Select difficulty:</Text>
            <Picker
              selectedValue={selectedDifficulty}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDifficulty(itemValue)
              }
            >
              <Picker.Item label="Beginner" value="beginner" />
              <Picker.Item label="Intermediate" value="intermediate" />
              <Picker.Item label="Expert" value="expert" />
            </Picker>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={3} // Set the number of lines to 3 for a 3-line high box
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
