import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRickAndMorty } from "@/hooks/useRickAndMorty";
import { CharacterList } from "@/components/CharacterList";

export default function RickAndMortyScreen() {
  const { loading, characters } = useRickAndMorty();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick & Morty</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#3a86ff" />
        ) : (
          <CharacterList characters={characters} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#495057",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
  },
});
