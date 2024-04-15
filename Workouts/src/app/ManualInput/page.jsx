import React from "react";
import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import axios from "axios";

const ExerciseForm = () => {
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
          {/* Add more TextInput fields for type, muscle, equipment, difficulty, and instructions */}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ExerciseForm;
