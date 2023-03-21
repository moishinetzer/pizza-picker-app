import { View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({
  label,
  theme,
}: {
  label: string;
  theme?: "primary" | "secondary";
}) {
  return (
    <>
      {theme === "primary" ? (
        <View className="w-80 h-16 mx-5 rounded-2xl p-[2px] border-4 border-yellow-300">
          <Pressable
            onPress={() => alert("you pressed " + label)}
            className="flex flex-row rounded-xl w-full h-full items-center justify-center bg-white"
          >
            <FontAwesome name="picture-o" size={22} />
            <Text className="pl-4 text-[#25292e] text-xl">{label}</Text>
          </Pressable>
        </View>
      ) : (
        <View className="w-80 h-16 mx-5 items-center justify-center p-1">
          <Pressable
            onPress={() => alert("you pressed " + label)}
            className="rounded-xl w-full h-full items-center justify-center"
          >
            <Text className="text-white text-lg">{label}</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}
