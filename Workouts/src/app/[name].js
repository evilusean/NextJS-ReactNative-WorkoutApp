import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ExercuseDetailsScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Exercise Details: {params.name}</Text>
    </View>
  );
}
