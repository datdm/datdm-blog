# Documnet coding Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. Tài liệu Javascript với Flutter

<b style="color: red; font-size: 20px;">---- Nội dung ----</b>

### Entry point

- **Javascript**
  ```javascript
  function startHere() {}
  ```
- **Dart**
  ```javascript
  void main() {}
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Print log

- **Javascript**
  ```javascript
  console.log("Hello");
  ```
- **Dart**
  ```javascript
  print("Hello");
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Variables

- **Javascript**
  ```javascript
  var name = "Hello";
  const other = "Flutter";
  ```
- **Dart**
  ```javascript
  String name = "Hello";
  var other = "Flutter";
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Default value

- **Javascript**
  ```javascript
  var name; // undefined
  ```
- **Dart**
  ```javascript
  var name; // null
  int? value; // null
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Check null or 0

- **Javascript**
  ```javascript
  var myNull = null;
  if (!myNull) {
    console.log("null is treated as false");
  }
  var zero = 0;
  if (!zero) {
    console.log("0 is treated as false");
  }
  ```
- **Dart**
  ```javascript
  var myNull = null;
  if (myNull == null) {
    print('use "== null" to check null');
  }
  var zero = 0;
  if (zero == 0) {
    print('use "== 0" to check zero');
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Function

- **Javascript**
  ```javascript
  function fn() {
    return true;
  }
  ```
- **Dart**
  ```javascript
  bool fn() {
    return true;
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Asynchronous: `Future`

- **Javascript**

  ```javascript
  class Example {
    _getIp() {
      const url = "http:/url";
      return fetch(url)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }

  function main() {
    const ex = new Example();
    ex._getIp()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  ```

- **Dart** sử dụng `Future` object để handle async

  ```javascript
  import 'dart:convert';

  import 'package:http/http.dart' as http;

  class Example {
    Future<String> _getIp() {
      final url = Uri.https('example.dat', 'ip');
      return http.get(url).then((res) {
        String ip = jsonDecode(res.body)['origin'];
        return ip;
      })
    }
  }

  void main() {
    final ex = Example();
    ex._getIp()
      .then((res) => print(res))
      .catchError((err) => print(err));
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Asynchronous: `async` & `await`

- **Javascript**

  ```javascript
  class Example {
    async function _getIp() {
      const url = "https://example.dat/ip";
      const res = await fetch(url);
      const json = res.json();
      return json.origin;
    }
  }

  async function main() {
    const ex = new Example();
    try {
      const ip = await ex._getIp();
      console.log(ip);
    } catch (err) {
      console.log(err);
    }
  }
  ```

- **Dart** `async` return về `Future` object. Then await được sử dụng đợt Future.

  ```javascript
  import 'convert:dart';

  import 'package:http/http:dart' as http;

  class Example {
    Future<String> _getIp() async {
      final url = Uri.https('example.dat', 'ip');
      final res = await http.get(url);
      String ip = jsonDecode(res.body)['origin'];
      return ip;
    }
  }

  void main() async {
    final ex = Example();
    try {
      final ex = await ex._getIp();
      print(ex);
    } catch (err) {
      print(err);
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<b style="color: red; font-size: 20px;">---- Cơ bản ----</b>

### Import các widgets

- **Javascript**
  ```javascript
  import React from "react";
  import { View, StyleSheet, Text } from "react-native";
  ```
- **Dart**
  ```javascript
  import "package:flutter/cupertino.dart";
  import "package:flutter/material.dart";
  import "package:flutter/widgets.dart";
  import "package:my_widget/my_widget.dart";
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Chương trình đầu tiên: Hello World

- **Javascript**

  ```javascript
  import React from "react";
  import { StyleSheet, Text, View } from "react-native";

  const App = () => {
    return (
      <View style={styles.container}>
        <Text>Hello React Native</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  ```

- **Dart**

  ```javascript
  import "package:flutter/material:dart";

  void main() {
    runApp(
      const Center(
        child: Text(
          'Hello Flutter',
          textDirection: TextDirection.ltr,
        )
      )
    )
  }
  ```

_In Flutter, almost everything is a widget._

_Widgets are the basic building blocks of an app’s user interface. You compose widgets into a hierarchy, called a widget tree. Each widget nests inside a parent widget and inherits properties from its parent. Even the application object itself is a widget. There is no separate "application" object. Instead, the root widget serves this role._

_A widget can define:_

- _A structural element—like a button or menu_
- _A stylistic element—like a font or color scheme_
- _An aspect of layout—like padding or alignment_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sử dụng widgets và lồng trong tree Flutter

- **Dart**

  ```javascript
  import "package:flutter/material.dart";

  void main() => runApp(const MyApp());

  class MyApp extends StatelessWidget {
    const MyApp({super.key});

    @override
    Widget build(BuildContent context) {
      return MaterialApp(
        title: "Welcome to Flutter",
        home: Scaffold(
          appBar: AppBar(
            title: const Text("Welcome to Flutter"),
          ),
          body: const Center(
            child: Text("Hello World"),
          )
        )
      )
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
