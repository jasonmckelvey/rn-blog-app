import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({});
const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit - {navigation.getParam("id")}</Text>
    </View>
  );
};

export default EditScreen;
