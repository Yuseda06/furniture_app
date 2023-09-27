import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 2,
    color: SIZES.black,
  },
});

export default styles;
