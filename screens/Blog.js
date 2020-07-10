import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Blog = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Blog Details"
        onPress={() => {
          navigation.navigate("BlogDetails", {
            postId: 3006,
            otherParam: "Pass whatever you want here",
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Blog;
