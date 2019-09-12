import React, { useContext } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const styles = StyleSheet.create({});

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
