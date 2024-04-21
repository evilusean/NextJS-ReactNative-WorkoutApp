import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import BestSheet from "best-sheet";
import moment from "moment";

const App = () => {
  const [sheetRef, setSheetRef] = useState(null);
  const [exerciseName, setExerciseName] = useState("");
  const [reps, setReps] = useState("");
  const [weightTime, setWeightTime] = useState("");
  const [sets, setSets] = useState([
    {
      reps: "",
      exerciseName: "",
      weightTime: "",
    },
  ]);

  const openSheet = () => {
    sheetRef.show();
  };

  const addSet = () => {
    setSets([...sets, { reps: "", exerciseName: "", weightTime: "" }]);
  };

  const submitForm = () => {
    // Get the current date
    const today = moment().format("YYYY-MM-DD");

    // Check if the current date is already in the Google Sheet
    // If it is, add the new exercise to the correct column
    // If it is not, create a new row for the new date

    // Add the new exercise to the Google Sheet
    sheetRef.close();
  };

  return (
    <View>
      <Button title="Open Sheet" onPress={openSheet} />
      <BestSheet
        ref={setSheetRef}
        height={300}
        closeOnDragDown={true}
        closeOnPressMask={true}
      >
        <View>
          {sets.map((set, index) => (
            <View key={index} style={styles.inputContainer}>
              <TextInput
                placeholder="Reps"
                value={set.reps}
                onChangeText={(text) => {
                  const newSets = [...sets];
                  newSets[index].reps = text;
                  setSets(newSets);
                }}
              />
              <TextInput
                placeholder="Exercise Name"
                value={set.exerciseName}
                onChangeText={(text) => {
                  const newSets = [...sets];
                  newSets[index].exerciseName = text;
                  setSets(newSets);
                }}
              />
              <TextInput
                placeholder="Weight/Time"
                value={set.weightTime}
                onChangeText={(text) => {
                  const newSets = [...sets];
                  newSets[index].weightTime = text;
                  setSets(newSets);
                }}
              />
            </View>
          ))}
          <Button title="Add Set" onPress={addSet} style={styles.button} />
          <Button title="Submit" onPress={submitForm} />
        </View>
      </BestSheet>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: row,
    alignItems: center,
    justifyContent: space - between,
  },
  button: {
    width: 100,
    marginTop: 10,
  },
});
