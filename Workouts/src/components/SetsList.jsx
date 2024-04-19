import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

//CREATE A QUERY
//REMOVE IF NOT NEEDED FROM [name].jsx
//HOW TO MAKE QUERY ONLY PULL FROM TODAYS DATE?

const SetsList = () => {
  const exercises = useQuery(["exercises"], async () => {
    const response = await fetch(
      "mongodb://localhost:27017/myDatabase/exercises"
    );
    return response.json();
  });

  return (
    <View>
      {exercises.data.map((exercise) => (
        <Text key={exercise._id}>
          {exercise.name} - {exercise.reps} reps - {exercise.weight} lbs
        </Text>
      ))}
    </View>
  );
};

export default SetsList;
