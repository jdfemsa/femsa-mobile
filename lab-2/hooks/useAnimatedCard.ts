import { ViewToken } from "react-native";
import {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  viewableItems: SharedValue<ViewToken[]>;
  currentId: number;
};
export function useAnimatedCard({ viewableItems, currentId }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => {
          return viewableItem.item.id === currentId;
        })
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

  return { animatedStyle };
}
