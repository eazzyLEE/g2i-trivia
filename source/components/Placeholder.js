import React from "react";
import { View, StyleSheet } from "react-native";
import { Fade, Placeholder as Plc, PlaceholderLine } from "rn-placeholder";

export const Placeholder = () => {
  return (
    <View>
      <Plc Animation={Fade}>
        <PlaceholderLine
          noMargin
          width={80}
          height={200}
          style={styles.mainLoader}
        />
        <View style={styles.row}>
          <PlaceholderLine
            noMargin
            width={45}
            height={40}
            style={styles.loader}
          />
          <PlaceholderLine
            noMargin
            width={45}
            height={40}
            style={styles.loader}
          />
        </View>
      </Plc>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLoader: {
    marginHorizontal: 35,
    marginTop: "30%",
    borderRadius: 0,
  },
  loader: {
    margin: 5,
    borderRadius: 3,
    marginHorizontal: 35,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20%",
    width: "70%",
    justifyContent: "space-between",
  },
});
