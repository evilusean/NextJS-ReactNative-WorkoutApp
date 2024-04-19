import React, { useState } from "react";
import { View, TextInput, Button, Picker } from "react-native";
import { Formik } from "formik";
import Realm from "realm";

{
  /* TODO: 
    CHANGED TO TYPESCRIPT - FIX ALL THE RED - HOW IS IT SAYING THE MODULES DON'T EXIST IF WE ARE USING THEM?
      MAYBE WE NEED TO USE .jsx, WHEN SWITCHING TO .tsx GOT 10 RED ERROR MESSAGES
      HOW CAN <TEXT> NOT BE USED AS A .jsx COMPONENT? LIKE WHAT? IS IT THE LINTER? DO WE NEED TO ADD TO OUR CONFIG?
    ADD .env VARIABLES TO POST METHOD, CLUSTER 0 'workouts.exercises' COLLLECTION
    FIGURE OUT SCHEMA = REMOVE DIFFICULTY / uID / NAME / TYPE / MUSCLE / EQUIPMENT / INSTRUCTIONS / COUNT = 0
      MAYBE ADD A INT COUNT THAT COUNTS THE AMOUNT OF TIMES WE DID AN EXERCISE SO MOST FREQUENT WILL BE AT TOP OF OUR QUERY
      FUTURE SEAN PROBLEM, BUT WOULD BE NICE TO HAVE IF WE STILL USE OUR APP IN A YEAR DO PULLUPS EVERY WORKOUT/BENCH ETC
      CAN THEN SORT BY TYPE AND USE OUR BEST STRETCHES / MOST USED CARDIO / MOST USED ETC WILL BE AT TOP - DON'T NEED TO SCROLL

  ADD uID, Count to Realm Schema, add MongoDB to realm
  Make sure to replace 'myrealm' with the actual name of your Realm database.
  You may need to adjust the schema property in the Realm constructor to match the schema of your MongoDB collection.
  You may also need to adjust the properties object in the Exercise schema to match the fields in your MongoDB collection.

    Add more TextInput fields for type, muscle, equipment, difficulty, and instructions 
    FIX USE STATE AT TOP, SOME MISSING, ("")
    ADD CSS / styles={}
    CHECK INITIAL VALUES, HOW DOES "" WORK WITH DROPDOWNS, MAYBE CHANGE DEFAULT
    CHECK FORMIK - FIRST TIME ENCOUNTERED - READ DOCS
    READ DOCS ON USESTATE - WE AREN'T USED TO USING IT YET
    CHECK onValueChange={(itemValue, itemIndex) =>
      setSelectedMuscle(itemValue) FOR EACH, REPEATED VARIABLE USE MIGHT CLASH
      CONNECT API TO MONGODB, 
      IMPORT TO LAYOUT, CREATE A WAY TO ADD IN NEW EXERCISES AND GET TO THIS SCREEN/URL
      EDIT / DELETE FUNCTIONALITY
      TEST DB, FIGURE OUT HOW TO RAISE AN ERROR IF VALUES ARE NULL
      FUTURE SEAN PROBLEMS, HALF WAY THERE
      AFTER IT WORKS, ADD EXERCISES
      FIX selectedValue={selectedType} for TYPE / DIFFICULTY / MUSCLE USING SAME VARIABLE NAME

    
            */
}

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const realm = new Realm({
    path: "myrealm",
    schema: [
      {
        name: "Exercise",
        properties: {
          name: "string",
          type: "string",
          muscle: "string",
          equipment: "string",
          instructions: "string",
        },
      },
    ],
  });

  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        muscle: "",
        equipment: "",
        instructions: "",
      }}
      onSubmit={(values) => {
        realm.write(() => {
          realm.create("Exercise", values);
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
              <Picker.Item label="Full-Body" value="full-body" />
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
