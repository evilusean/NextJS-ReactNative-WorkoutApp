import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

//CREATE A QUERY
//REMOVE IF NOT NEEDED FROM [name].jsx
const fetchExercises = async () => {
  const response = await fetch(
    "mongodb://localhost:27017/myDatabase/exercises"
  );
  return response.json();
};

const exercises = useQuery(["exercises"], fetchExercises);

const SetsList = () => {
  return (
    <View>
      {exercises.data.map((exercise) => (
        <Text key={exercise._id}>
          {exercise.reps} Reps - {exercise.name} - {exercise.weight} Weight
        </Text>
      ))}
    </View>
  );
};

export default SetsList;
