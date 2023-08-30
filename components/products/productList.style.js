import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    paddingTop: SIZES.xxLarge,
    alignItems: "center",
    paddingLeft: SIZES.small / 2,
  },
  separator: {
    height: 16,
  },
});

export default styles;
