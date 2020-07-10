import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Blog from "./screens/Blog";
import BlogDetails from "./screens/BlogDetails";

const Stack = createStackNavigator();
const NavStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Blog"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />
      <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        options={{ title: "BlogDetails" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default App;
