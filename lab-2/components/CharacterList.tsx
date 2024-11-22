import { FlatList, StyleSheet, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Character } from "@/types/RickAndMorty";
import { CharacterCard } from "./CharacterCard";

type Props = {
  characters: Character[];
};

export function CharacterList({ characters }: Props) {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }}
      initialNumToRender={5}
      windowSize={10}
      renderItem={({ item }) => (
        <CharacterCard
          id={item.id}
          image={item.image}
          name={item.name}
          status={item.status}
          species={item.species}
          viewableItems={viewableItems}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
});
