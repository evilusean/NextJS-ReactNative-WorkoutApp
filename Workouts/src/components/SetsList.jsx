import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

//TODO:
//HOW TO MAKE QUERY ONLY PULL FROM TODAYS DATE?
//FIX .ENV VARIABLES AND ADD CORRECT QUERY TO CODE - CURRENT DOES LOCAL - NOT CONNECTING TO DB

//BELOW IS HOW TO FETCH ON A SPECIFIC DATE, NEED TO ADD IT IN WITH EXERCISES
//const fetchExercises = async () => {
//    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
//    const response = await fetch(`mongodb://localhost:27017/myDatabase/exercises?date=${today}`);
//    return response.json();
//  };

const SetsList = () => {
  const exercises = useQuery(["exercises"], async () => {
    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const response = await fetch(
      `mongodb://localhost:27017/myDatabase/exercises?date=${today}`
    );
    return response.json();
  });

  return (
    <View>
      {exercises.data.map((exercise) => (
        <Text key={exercise._id}>
          {exercise.name} - {exercise.reps} reps - {exercise.weight} Weight -{" "}
          {exercise.date}
        </Text>
      ))}
    </View>
  );
};

export default SetsList;
