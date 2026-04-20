import { Image } from "expo-image";
import React from "react";

type Props = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} />;
}
