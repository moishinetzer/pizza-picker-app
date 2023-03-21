import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

let placeHolderImage = require("./assets/pizza-base.jpg");

export default function App() {
  return (
    <View className="flex-1 bg-[#25292e] items-center justify-center">
      <View className="flex-1 pt-14">
        <ImageViewer placeHolderImageSource={placeHolderImage} />
      </View>
      <View className="flex flex-[1/3] pb-24 items-center">
        <Button label="Choose a base" theme="primary" />
        <Button label="Use this base" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
