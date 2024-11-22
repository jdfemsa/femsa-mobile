import React from "react";
// expo-image is a better alternative to Image from react-native and is similar to FastImage
import { Image } from "expo-image";
import { Text, View, StyleSheet, ViewToken } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import { useAnimatedCard } from "@/hooks/useAnimatedCard";
import { Character } from "@/types/RickAndMorty";

type Props = {
  viewableItems: SharedValue<ViewToken[]>;
} & Pick<Character, "id" | "name" | "image" | "status" | "species">;

const CharacterCard = React.memo(
  ({ id, name, image, status, species, viewableItems }: Props) => {
    const { animatedStyle } = useAnimatedCard({ viewableItems, currentId: id });

    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.infoText}>
            {status} - {species}
          </Text>
        </View>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#ffafcc",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  nameText: {
    flexShrink: 1,
    color: "white",
    fontSize: 26,
  },
  infoText: {
    color: "white",
    fontSize: 18,
  },
});

export { CharacterCard };
