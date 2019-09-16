import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

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

const BlogPostForm = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Text style={{ marginBottom: 4, color: "#5F738C" }}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ marginBottom: 4, color: "#5F738C" }}>
          Enter Content:
        </Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={text => setContent(text)}
        />
      </View>
      <Button title="Save Blog Post" />
    </View>
  );
};

export default BlogPostForm;
