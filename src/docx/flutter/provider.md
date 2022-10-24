# Config state management: Provider

<a name="readme-top"></a>
Config state management: Provider

## 1. Installation

```bash
flutter pub add provider
```

## 2. How to use

- **Provider**: package basic, không render widget tree

  ```javascript
  import 'package:provider/provider.dart';

  class MyModel {
    String value = "";

    void do_something() {
      value = "test something";
    }
  }

  class MyPage extends StatelessWidget {
    // provider
    return Provider<MyModel>(
      // create model
      create: (context) => MyModel(),
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
            }
          )
        )
      ),
    );
  }
  ```

- **ChangeNotifierProvider**: lắng nghe các thay đổi model

  ```javascript
  import 'package:provider/provider.dart';
  import 'package:flutter/material.dart';

  class MyModel extends ChangeNotifier {
    String value = "";

    void do_something() {
      value = "test something";
      // cấp quyền truy cập, thông báo widget Consumer re-render
      notifyListeners();
    }
  }

  class MyPage extends StatelessWidget {
    // provider
    return ChangeNotifierProvider<MyModel>(
      // create model
      create: (context) => MyModel(),
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
            }
          )
        )
      ),
    );
  }
  ```

- **FutureProvider**: cung cấp dữ liệu ban đầu và bất đồng bộ, không render widget tree

  ```javascript
  import 'package:provider/provider.dart';

  class MyModel {
    String value = "";

    MyModel({ this.value });

    Future<void> do_something() async {
      await Future.deplayed(Duration(seconds: 2));
      value = "test something";
    }
  }

  Future<MyModel> someGetModel() async {
    await Future.delayed(Duration(seconds: 3));
    return MyModel(value: "3");
  }

  class MyPage extends StatelessWidget {
    // provider
    return FutureProvider<MyModel>(
      // create model
      create: (context) => someGetModel(),
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
            }
          )
        )
      ),
    );
  }
  ```

- **StreamProvider**: cung cấp dữ liệu ban đầu và stream, không render widget tree

  ```javascript
  import 'package:provider/provider.dart';

  class MyModel {
    String value = "";

    MyModel({ this.value });

    void do_something() {
      value = "test something";
    }
  }

  Stream<MyModel> someGetModel() {
    return Stream<MyModel>.periodic(
      Duration(seconds: 1),
      (x) => MyModel(value: "3"),
    ).take(10);
  }

  class MyPage extends StatelessWidget {
    // provider
    return StreamProvider<MyModel>(
      // create model
      create: (context) => someGetModel(),
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
            }
          )
        )
      ),
    );
  }
  ```

- **ValueListenableProvider**: giống ChangeNotifierProvider

  ```javascript
  import 'package:flutter/material.dart';
  import 'package:provider/provider.dart';

  class MyModel {
    ValueNotifier<String> value = ValueNotifier("");

    void do_something() {
      value.value = "test something";
    }
  }

  class MyPage extends StatelessWidget {
    // provider
    return Provider<MyModel>(
      // create model
      create: (context) => MyModel(),
      // widget child
      child: Consumer<MyModel>(
        builder: (context, myModel, child) {
          // ValueListenableProvider
          return ValueListenableProvider<String>.value(
            value: myModel.value,
            child: MaterialApp(
              home: Container(
                child: Consumer<MyModel>(
                  // render ui provider
                  builder: (context, value, child) {
                    return Text(value.value);
                    return Text(value.do_something());
                  }
                ),
                child: Consumer<String>(
                  // render ui provider
                  builder: (context, value, child) {
                    return Text(value);
                  }
                )
              )
            ),
          )
        }
      )
    );
  }
  ```

- **MultiProvider**: sử dụng multi model

  ```javascript
  import 'package:flutter/material.dart';
  import 'package:provider/provider.dart';

  class MyModel1 extends ChangeNotifier {
    String value = "Hello";

    void do_something() {
      value = "test something";
      notifyListener();
    }
  }

  class MyModel2 extends ChangeNotifier {
    String value = "Hello";

    void do_something2() {
      value = "test something 2";
      notifyListener();
    }
  }

  class MyPage extends StatelessWidget {
    // provider
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<MyModel1>(
          // create model
          create: (context) => MyModel1(),
        ),
        ChangeNotifierProvider<MyModel2>(
          // create model
          create: (context) => MyModel2(),
        ),
      ],
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel1>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
              return Text(value.do_something());
            }
          ),
          child: Consumer<MyModel2>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.value);
              return Text(value.do_something2());
            }
          )
        )
      ),
    );
  }
  ```

- **ProxyProvider**: sử dụng multi model phụ thuộc lẫn nhau, không lắng nghe thay đổi

  ```javascript
  import 'package:flutter/material.dart';
  import 'package:provider/provider.dart';

  class MyModel1 extends ChangeNotifier {
    String value = "Hello";

    void do_something() {
      value = "test something";
      notifyListener();
    }
  }

  class MyModel2 {
    MyModel1 myModel1;

    MyModel2({ required this.myModel1 });

    void do_something2() {
      myModel1.do_something();
    }
  }

  class MyPage extends StatelessWidget {
    // provider
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<MyModel1>(
          // create model
          create: (context) => MyModel1(),
        ),
        ProxyProvider<MyModel1, MyModel2>(
          // update model
          update: (context, myModel1, myModel2) => MyModel2(myModel1: myModel1),
        ),
      ],
      // widget child
      child: MaterialApp(
        home: Container(
          child: Consumer<MyModel1>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.do_something());
            }
          ),
          child: Consumer<MyModel2>(
            // render ui provider
            builder: (context, value, child) {
              return Text(value.do_something2());
            }
          )
        )
      ),
    );
  }
  ```
