import { Image, ImageSourcePropType } from "react-native";

export default function ImageViewer({
  placeHolderImageSource,
}: {
  placeHolderImageSource: ImageSourcePropType;
}) {
  return (
    <Image
      source={placeHolderImageSource}
      className="w-80 h-[440px] rounded-3xl"
    />
  );
}
