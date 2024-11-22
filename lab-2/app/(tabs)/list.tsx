import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, ViewToken } from "react-native";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  SharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text, View } from "@/components/Themed";

const data = new Array(20).fill(0).map((_, index) => ({ id: index }));

type ListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item.id)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View style={[styles.listItem, rStyle]}>
        <Text style={styles.textItem}>{item.id}</Text>
      </Animated.View>
    );
  }
);

export default function ListScreen() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 40 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    height: 120,
    width: "90%",
    backgroundColor: "#ffc2d1",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textItem: {
    color: "#fff",
    fontSize: 20,
  },
});
