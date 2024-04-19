import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

//TODO:
//FIX .ENV VARIABLES AND ADD CORRECT QUERY TO CODE - CURRENT DOES LOCAL - NOT CONNECTING TO DB
//ADD LINK TO ROOT_LAYOUT NAVBAR/HAMBURGER BUTTON?
//ADD SOME DUMMY DATA FOR TODAY
//TEST WEB/ANDROID

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
      <Text>Today's date: {today}</Text>
      {exercises.data.map((exercise) => (
        <Text key={exercise._id}>
          {exercise.name} - {exercise.reps} - reps / {exercise.weight} -
          Weight/Time
        </Text>
      ))}
    </View>
  );
};

export default SetsList;
