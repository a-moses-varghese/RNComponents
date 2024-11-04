import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { hp } from "@/helpers/common";

const Spacer = ({ multiplier = 1 }) => {
  const val = hp(2); // default space of 2% of device height
  const h = val * multiplier;
  return (
    <>
      <View style={{ height: h }} />
    </>
  );
};

export default Spacer;

const styles = StyleSheet.create({});
