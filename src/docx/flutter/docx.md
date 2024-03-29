# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. UI Animation

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ AnimatedOpacity: hiệu ứng làm mờ +++</p>**

```javascript
class MyPage extends StatelessWidget {
  return AnimatedOpacity(
    // thời gian
    duration: Duration(hours: 1)
    // độ mờ
    opacity: double,
    // widget con
    children: <Widget>[
      ItemOne(),
      ItemTwo(),
      ItemThree(),
    ]
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ InkWell: hiệu ứng gợn sóng dạng hình chủ nhật +++</p>**

UI:

<img src="/technical-react/img/inkwell.gif" alt="inkwell" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return InkWell(
    // on tap screen
    onTap: () {},
    // widget con
    child: Container(..),
    // color nháy lần đầu click
    splashColor: Colors.red,
    // color highlight giữ tap
    highlightColor: Colors.red,
    // highlight border
    borderRadius: BorderRadius.circular(20),
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ InkResponse: hiệu ứng gợn sóng dạng hình tròn +++</p>**

UI:

<img src="/technical-react/img/inkresponse.gif" alt="inkresponse" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return InkResponse(
    // on tap screen
    onTap: () {},
    // widget con
    child: Container(..),
    // color nháy lần đầu click
    splashColor: Colors.red,
    // color highlight giữ tap
    highlightColor: Colors.red,
    // highlight border
    borderRadius: BorderRadius.circular(20),
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ InkImage: hiệu ứng gợn sóng image +++</p>**

UI:

<img src="/technical-react/img/inkimage.gif" alt="inkimage" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return InkImage(
    // fit image
    fit: BoxFix.cover,
    // height
    height: double,
    // width
    width: double,
    // image
    image: NetworkImage(""),
    // widget con
    child: InkWell(..)
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. Navigation and Routing

<img src="https://s1.o7planning.com/vi/13151/images/64420896.gif" alt="route" />

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Route Transition: Nagivation từ screen 1 tới screen 2 +++</p>**

- Di chuyển screen

  - Di chuyển với route là string

    - `Navigator.pushNamed(context, route_name, arguments: "params")`: Go to page dựa trên route name

      `Navigator.of(context).pushNamed(route_name, arguments: "params")`: Go to page dựa trên route name

    - `Navigator.push(context, route_name, arguments: "param")`: Go to page with param

    - `ModalRoute.of(context).settings.arguments`: Get param arguments

    - `Navigator.of(context).pop()`: Back về page trước đó

      `Navigator.of(context).pop(route_name)`: Back về page dựa trên route

    - `Navigator.pop(context)`: Back về route trước

      `Navigator.pop(context, route_name, params)`: Back param trở về

      `Navigator.pop(context, route_name, params)`: Back param trở về

      `final data = await Navigator.push(route_name)`: Get param từ page trở về

  - Di chuyển với route là đối tượng Route widget

    - `Navigator.of(context).push(_createRoute())`

    - `Navigator.push(context, MaterialPageRoute(builder: (context) => Page1()))`: Go to page 1 (Push Widget vào Stack)

    - `Navigator.push(context, MaterialPageRoute(builder: (context) => Page1("param")))`: Go to page 1 with param

      `Navigator.push(context, MaterialPageRoute(builder: (context) => { return Page1("param") }))`: Go to page 1 with param

    - `Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => Page1()))`: Replace route to page 1

    - `Navigator.of(context).pushAndRemoveUntil(builder: (context) => Page1(), (route) => false)`: Go to page 1 và xóa tất cả route cũ

- Create đối tượng Route

  ```javascript
  class Page1 extends StatelessWidget {
    const Page1({Key? key}) : super(key: key)

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text("Page1")
        ),
        body: const Center(
          child: ElevatedButton(
            child: Text("Go Page2"),
            onPressed: () {
              Navigator.of(context).push(_createRoute())
              Navigator.push(context, MaterialPageRoute(builder: (context) => Page1()))
              Navigator.push(context, MaterialPageRoute(builder: (context) => Page1(params.id)))
            }
          )
        )
      )
    }
  }

  Route _createRoute() {
    return PageRouteBuilder(
      pageBuilder: (BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation) {
        return const Page2(...)
      },
      transitionBuilder: (BuildContext context, Animation<double> animation, Aniamtion<double> secondaryAnimation, Widget child) {
        return child;
        return SlideTransition(
          position: new Tween<Offset>(
            begin: const Offset(-1.0, 0.0),
            end: Offset.zero,
          ).animate(animation),
          child: new SlideTransition(
            position: new Tween<Offset>(
              begin: Offset.zero,
              end: const Offset(-1.0, 0.0),
            ).animate(secondaryAnimation),
            child: child,
          ),
        );
        return ScaleTransition(
          scale: new Tween<double>(
            begin: 0.0,
            end: 1.0,
          ).animate(
            CurvedAnimation(
              parent: animation,
              curve: Interval(
                0.00,
                0.50,
                curve: Curves.easeInCirc,
              ),
            ),
          ),
          child: child
        );
      }
    )
  }
  ```

- Định nghĩa map route

  ```javascript
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        // title
        title: Text("Title"),
        // init route
        initialRoute: "/home",
        // home
        home: HomePage(),
        // routes
        routes: <String, WidgetBuilder>{
          "/home": (BuildContext context) => HomePage(),
          "/details": (BuildContext context) => DetailsPage(),
          "/about": (context) => AboutPage(),
        },
        // on init route
        onGenerateRoute: (RouteSettings settings) {
          switch (setting.name) {
            case "/home":
              return MaterialPageRoute(builder: (_) => HomePage())
            case "/details":
              return MaterialPageRoute(builder: (_) => DetailsPage(settings.id))
            default:
              return MaterialPageRoute(builder: () => HomePage())
          }
        },
        // unknown route
        onUnknownRoute: (RouteSettings setting) {
          String unknownRoute = setting.name
          return new MaterialPageRoute(
            builder: (context) => NotFoundPage()
          )
        }
      )
    }
  }

  class HomePage extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(...)
        body: Center(
          child: Row(
            children: [
              ElevatedButton(
                child: Text("Go to Detail")
                onPressed: () {
                  Navigator.of(context).pushNamed("/details")
                  Navigator.of(context).pop()
                  Navigator.of(context).pop("/home")
                }
              )
            ]
          )
        )
      )
    }
  }
  ```

- Custom route

  ```javascript
  class CustomPageRoute extends PageRouteBuilder {
    final Widget widget;
    final String params;

    CustomPageRoute({required: this.widget, required: this.params})
      : super(
        pageBuilder: (BuildContext context, Animation<double> animation, Animation<double> animationSecondary) {
          return this.widget
        },
        transitionBuilder:(BuildContext context, Animation<double> animation, Animation<double> animationSecondary, Widget widget) {
          return SlideTransition(
            position:  Tween<Offset>(
              begin: const Offset(1.0, 0.0),
              end: Offset.zero,
            ).animate(animation),
            child: child,
         );
        }
      )
  }

  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        onGenerateRoute: (RouteSettings setting) {
          switch (settings.name) {
            case "/home":
              return CustomPageRoute(widget: MyHome(), params: "params");
            case "/details":
              return CustomPageRoute(widget: MyDetails(), params: "params");
          }
        }
      )
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 3. Structure

    start_flutter
    ├── anddroid             Config file android
    ├── build                File build android and IOS
    ├── ios                  Config file ios
    ├── lib                  Contains source
    │   ├── screen           Screen page
    │   │    └── welcome_screen.dart
    │   ├── main.dart        File main flutter app and start app
    ├── test
    └── pubspec.yml         Contains metadata Flutter and package lib

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 4. Theme

```javascript
class Theme extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // theme of text
    return Text(
      "Text",
      // textTheme: headline5 with copyWith style
      style: Theme.of(context).textTheme.headline5.copyWith(fontWeight: FontWeight.bold, color: Color)
      // color
      style: TextStyle(
        color: Theme.of(context).textTheme.bodyText1.color.withOpacity(0.4)
      )
      // colorSchema
      style: TextStyle(
        color: Theme.of(context).colorSchema.secondary
      )
    )
    // custom light theme
    return ThemeData.light().copyWith(
      textTheme: ...
      // color schema
      colorSchema: ColorSchema.light(
        primary: Colors.blue,
        seconday: Colors.yellow,
        error: Color.red,
      )
      // icon theme
      iconTheme: IconThemeData(
        // color
        color: Colors.red,
      )
      // selected icon theme
      selectedIconTheme: IconThemeData(...)
    )
    // Condition check light or dark
    return Column(
      Image.asset(
        MediaQuery.of(context).platformBrighness == Brightness.light ? "light" : "dark"
      )
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 5. Models

```javascript
// Tạo model
class Data {
  final String name, lastname, fullname, image;
  final int age;
  final bool male;

  Data({
    this.name = '',
    this.lastname = '',
    this.fullname = '',
    this.image = '',
    this.age = 0,
    this.male = false,
  })
}

// Cách dùng
List datas = [
  Data(
    name: '',
    lastname: '',
    fullname: '',
    image: '',
    age: 0,
    male: false,
  )
]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 6. StatelessWidget

```javascript
class MyHomePage extends StatelessWidget {
  // Contructor
  const MyHomePage({Key? key}) : super(key: key);

  // Render UI
  @override
  Widget build(BuildContext context) {
    return Scaffold(..)
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 7. StatefulWidget

```javascript
class MyScreen extends StatefulWidget {
  // Contructor
  const MyScreen({Key? key}) : super(key: key);

  //
  final bool isScreen = false;

  // Create state
  @override
  State<MyScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<MyScreen> {
  // state
  int _selectedIndex = 1;

  // init state
  @override
  void initState() {
    super.initState();
  }

  // override
  @override
  Widget build(BuildContext context) {
    return Scaffold(..
      // setState
      onTap: () {
        // get widget
        print(widget.isScreen);

        // set state
        setState(() {
          _selectedIndex = 2;
        })
      }
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 8. Form

```javascript
class _MyFormScreenState extends State<MyForm> {
  // cung cấp GlobalKey
  final formKey = GlobalKey<FormState>();

  // value
  String name = "";

  @override
  Widget build(BuildContext context) {
    return Form(
      // key form
      key: formKey,
      // widget con
      child: Column(
        // text field
        TextFormField(
          // initial value
          initialValue: string,
          // secure text, same password
          obscureText: bool,
          // trang trí text field
          decoration: InputDecoration(
            // label text
            labelText: string,
            // label style focused
            floatingLabelStyle: TextStyle(..),
            // label style
            labelStyle: TextStyle(..),
            // border focus
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(width: 15.0, color: Colors.red)
            ),
            // border enable
            enabledBorder: OutlineInputBorder(..),
            // border error
            errorBorder: OutlineInputBorder(..),
            // border focus error
            focusedErrorBorder: OutlineInputBorder(..),
          ),
          // on change input
          onChanged: (val) {
            setState(() {
              name = val;
            });
          },
          // validator
          validator: (val) {
            return null;
            return "Message error";
          },
        )
      )
    )
  }

  void submitForm() {
    // submit form
    if (formKey.currentState!.validate()) {

    }
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 9. MediaQuery

```javascript
class MediaQuery extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // how to use
      MediaQuery.of(context)...
      // size width, height
      MediaQuery.of(context).size.width
      MediaQuery.of(context).size.height
      // mode light dart
      MediaQuery.of(context).platformBrighness == Brightness.light
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 10. Function

- `showDialog`

  ```javascript
  showDialog(
    // chặn click outsite
    barrierDismissible: bool,
    // context
    context: context,
    // builder render dialog
    builder: (context) {
      return AlertDialog(
        ..
        // cancel dialog
        Navigator.of(context).pop();
      )
    }
  )
  ```

- `showSnackBar`

  ```javascript
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      // content
      content: Text(..),
      // background color
      backgroundColor: Colors.red,
      // duration: khoảng thời gian ẩn
      duration: Duration(seconds: 2),
      // action
      action: SnackBarAction(
        // label
        label: string,
        // on press
        onPressed: () {},
        // text color
        textColor: Colors.white,
      )
    )
  )
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 11. Gesture

- Cử chỉ tương tác với thiết bị di động như vuốt, chạm, lắc,...
- Ex:

  - Tap: chạm
  - Double Tap: chạm 2 lần
  - Drag: Chạm và di chuyển và thả ra
  - Flick: Giống drag nhưng nhanh hơn
  - Pinch: Chạm bằng 2 ngón tay
  - Spread/Zoom: Ngược lại Pinch
  - Panning

- Tap
  - _onTapDown_
  - _onTapUp_
  - _onTap_
  - _onTapCancel_
- Double Tap
  - _onDoubleTap_
- Long Press
  - _onLongPress_
- Vertical Drag
  - _onVerticalDragStart_
  - _onVerticalDragUpdate_
  - _onVerticalDragEnd_
- Horizontal Drag
  - _onHorizontalDragStart_
  - _onHorizontalDragUpdate_
  - _onHorizontalDragEnd_
- Pan
  - _onPanStart_
  - _onPanUpdate_
  - _onPanEnd_

```javascript
class MyPage extends StatelessWidget {
  return GestureDetector(
    // on tap
    onTap: () {},
    // child
    child: Text("Text"),
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 12. Docx

- Install new package

  ```bash
  flutter pub add <new_package_name>
  ```

- Khởi tạo widget ràng buộc

  ```javascript
  void main() async {
    WidgetsFlutterBinding.ensureInitialized();
  }
  ```

- Async await

  ```javascript
  Future<String> _getIp() {
    final url = Uri.https('example.dat', 'ip');
    return http.get(url).then((res) {
      String ip = jsonDecode(res.body)['origin'];
      return ip;
    })
  }

  Future<String> ex = Example();
  ex._getIp()
    .then((res) => print(res))
    .catchError((err) => print(err));

  const ip = await ex._getIp()
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
