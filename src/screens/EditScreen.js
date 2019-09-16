import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  wrapper: {
    padding: 16
  },
  inputWrapper: {
    marginBottom: 16
  },
  input: {
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8EDF1"
  }
});

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Text style={{ marginBottom: 4, color: "#5F738C" }}>Edit Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={newTitle => setTitle(newTitle)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ marginBottom: 4, color: "#5F738C" }}>Edit Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={newContent => setContent(newContent)}
        />
      </View>
      <Button title="Add Blog Post" />
    </View>
  );
};

export default EditScreen;
