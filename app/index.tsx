import { ImageBackground } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
const PlaceholderImage = require("../assets/images/background.png");
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View className="flex-1 items-center h-20">
      <ImageBackground
        source={selectedImage || PlaceholderImage}
        style={{ flex: 1 }}
      >
        <View>
          <Text className="text-3xl font-bold text-blue-500">
            {" "}
            Tierney Simple Device App{" "}
          </Text>
        </View>
        <View className="items-center justify-content h-20 text-white ">
          <Button
            onPress={pickImageAsync}
            label=" Choose a Background Image "
            theme="primary"
          />
          <Text> {} </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
