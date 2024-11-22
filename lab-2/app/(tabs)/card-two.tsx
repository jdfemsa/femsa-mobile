import { useEffect } from "react";
import { StyleSheet, Button } from "react-native";
import { Text, View } from "@/components/Themed";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function CardTwoScreen() {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card React Native Reanimated</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Text style={styles.cardText}>Animated Card</Text>
        </Animated.View>

        <Button
          title="Reiniciar Animación"
          color="#007bff"
          onPress={() => {
            opacity.value = 0;
            opacity.value = withTiming(1, {
              duration: 2000,
              easing: Easing.inOut(Easing.ease),
            });
          }}
        />
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
    color: "#457b9d",
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
    backgroundColor: "#00b4d8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
  },
});
