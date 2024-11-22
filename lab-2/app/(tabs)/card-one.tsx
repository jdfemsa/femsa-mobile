import { useRef } from "react";
import { Animated, PanResponder, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function CardOneScreen() {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipable Card Animated API</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.cardContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.card]}
        >
          <Text style={styles.cardText}>Swipe Me!</Text>
        </Animated.View>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#fb6f92",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: "#fb6f92",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
  },
});
