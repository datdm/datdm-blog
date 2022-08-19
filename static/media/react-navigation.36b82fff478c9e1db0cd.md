# Config routing with react-navigation

<a name="readme-top"></a>
Setup routing and navigation React Native use Expo or React Native

## 1. Settings

### Installation

- Install library
  ```sh
  npm install @react-navigation/native
  ```
- Install in Expo project
  ```sh
  expo install react-native-screens react-native-safe-area-context
  ```
- Install in Native project
  ```sh
  npm install react-native-screens react-native-safe-area-context
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Config app

- Wrapping app with `NavigationContainer`

  ```javascript
  import React from "react";
  import { NavigationContainer } from "@react-navigation/native";

  export default function App() {
    return (
      <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    );
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. Use bottom bar with `@react-navigation/bottom-tabs`

### Installation

- Install library
  ```sh
  npm install @react-navigation/bottom-tabs
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### How to use

- Define

  ```javascript
  import { NavigationContainer } from "@react-navigation/native";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

  const Tab = createBottomTabNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- Customize prop navigation `Tab.Navigator`
  ```javascript
  <Tab.Navigator
    screenOptions={(props) => ({
      // Hide/show label
      tabBarShowLabel: false,
      // Hide/show header
      headerShown: false,
      // Css bottom bar
      tabBarStyle: {
        display: "flex",
      },
    })}
  >
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- Customize prop navigation `Tab.Screen`
  ```javascript
  <Tab.Screen
    // Name
    name="Home"
    // Component
    component={Home}
    options={{
      // Custom icon bottom bar
      tabBarIcon: ({ color, size, focused }) => (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 5,
            borderBottomColor: focused ? "#e283cc" : color,
          }}
        >
          <Feather
            name="home"
            color={focused ? "#e283cc" : color}
            size={size}
          />
          <Text style={{ color: focused ? "#e283cc" : color }}>Home</Text>
        </View>
      ),
      // Custom button, hide then return null
      tabBarButton: ({ children, onPress }) => (
        <TouchableOpacity onPress={onPress}>
          <View>{children}</View>
        </TouchableOpacity>
      ),
    }}
  />
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
