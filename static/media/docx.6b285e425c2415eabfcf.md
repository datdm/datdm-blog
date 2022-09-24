# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. UI Widget

## 2. UI Layout

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Center: đặt widget con tại center +++</p>**

UI:

<img src="/technical-react/img/center.png" alt="center" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      // widget con trong Center
      child: Row(...)
      // width của Center, double, default maximum
      widthFactor: 2.0
      // height của Center, double, default maximum
      heightFactor: 2.0
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Align: đặt widget con và điều chỉnh vị trí widget con +++</p>**

UI:

<img src="/technical-react/img/align.png" alt="align" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Row: hiển thị các widget con trên 1 hàng +++</p>**

UI:

<img src="/technical-react/img/row.png" alt="row" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      // list child item row
      children: [
        Text("text")
      ],
      // sắp xếp vị trí widget con trên trục chính (nằm ngang)
      // MainAxisAlignment.start (Default)
      // MainAxisAlignment.center
      // MainAxisAlignment.end
      // MainAxisAlignment.spaceBetween
      // MainAxisAlignment.spaceAround
      // MainAxisAlignment.spaceEvenly
      mainAxisAlignment: MainAxisAlignment
      // không gian chiếm giữ
      // MainAxisSize.min
      // MainAxisSize.max (Default)
      mainAxisSize: MainAxisSize
      // sắp xếp vị trí widget con trên trục chéo (nằm dọc)
      // CrossAxisAlignment.start
      // CrossAxisAlignment.end
      // CrossAxisAlignment.center (Default)
      // CrossAxisAlignment.baseline
      // CrossAxisAlignment.stretch
      crossAxisAlignment: CrossAxisAlignment
      // sắp xếp thứ tự
      // VerticalDirection.down (Default)
      // VerticalDirection.up
      textDirection: TextDirection
      // đường cơ sở
      // TextBaseline.alphabetic (Default)
      // TextBaseline.ideographic
      textBaseline: TextBaseline
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Column: hiển thị các widget con trên 1 cột +++</p>**

UI:

<img src="/technical-react/img/column.png" alt="column" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Column(
    // list child item column
    children: [
      Text("text")
    ],
    // sắp xếp vị trí widget con trên trục chính (nằm dọc)
    // MainAxisAlignment.start (Default)
    // MainAxisAlignment.center
    // MainAxisAlignment.end
    // MainAxisAlignment.spaceBetween
    // MainAxisAlignment.spaceAround
    // MainAxisAlignment.spaceEvenly
    mainAxisAlignment: MainAxisAlignment
    // sắp xếp vị trí widget con trên trục chéo (nằm ngang)
    // CrossAxisAlignment.start
    // CrossAxisAlignment.end
    // CrossAxisAlignment.center (Default)
    // CrossAxisAlignment.baseline
    // CrossAxisAlignment.stretch
    crossAxisAlignment: CrossAxisAlignment
    // không gian chiếm giữ
    // MainAxisSize.min
    // MainAxisSize.max (Default)
    mainAxisSize: MainAxisSize
    // sắp xếp thứ tự
    // VerticalDirection.down (Default)
    // VerticalDirection.up
    textDirection: TextDirection
    // đường cơ sở
    // TextBaseline.alphabetic (Default)
    // TextBaseline.ideographic
    textBaseline: TextBaseline
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Stack: hiển thị các widget chồng lên nhau, widget đầu sẽ dưới cùng, thường dùng kiểu position with Positioned +++</p>**

UI:

<img src="/technical-react/img/stack.png" alt="stack" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Stack(
    children: <Widget>[
      Container(..)
      Container(..)
      Container(..)
      // Set vị trí child trong stack
      Positioned(
        top: 0,
        left: 0,
        child: Container(..)
      )
    ]
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ IndexedStack: lớp con của Stack, tại một thời điểm thị 1 widget con, widget khác sẽ ẩn đi, index: null sẽ ẩn +++</p>**

UI:

<img src="/technical-react/img/indexedstack.png" alt="indexedstack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ EdgeInsetsGeometry: tạo inner padding (padding) và outer padding (margin) +++</p>**

UI:

<img src="/technical-react/img/edgeinsetsgeometry.png" alt="edgeinsetsgeometry" />

**EdgeInsets**: dựa trên tham số **_left, top, right, bottom_**

```javascript
class MyPage extends StatelessWidget {
  return Padding(
    // widget con with padding
    child: Column(..)
    // padding
    padding: EdgeInsets.symmetric(
      // chiều ngang
      horizontal: 10.0,
      // chiều dọc
      vertical: 10.0,
    )
    // padding: left top right bottom
    padding: EdgeInsets.fromLTRB(
      10,
      10,
      10,
      10,
    )
  )
}
```

**EdgeInsetsDirectional**: dựa trên tham số **_start, top, end, bottom_**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Alignment: căn chỉnh ví trí của widget con bên trong parent +++</p>**

UI:

<img src="/technical-react/img/alignment.png" alt="alignment" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Positioned: định vị trí widget con trong Stack +++</p>**

UI:

<img src="/technical-react/img/positioned.png" alt="positioned" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Stack(
    children: <Widget>[
      // Set vị trí child trong stack
      Positioned(
        // left
        left: double,
        // top
        top: double,
        // right
        right: double,
        // bottom
        bottom: double,
        // width
        width: double,
        // height
        height: double,
        // widget con
        child: Container(..)
      )
    ]
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Expanded: widget tạo khoảng trống cho 1 widget con của Row hoặc Column +++</p>**

UI:

<img src="/technical-react/img/expanded.png" alt="expanded" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Expanded(
    // flex: tỉ lệ khoảng trống (Default = 1)
    flex: int,
    // widget con
    child: Row(..)
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Spacer: tạo khoảng trống, các thể điều chỉnh giữa các widget con +++</p>**

UI:

<img src="/technical-react/img/spacer.png" alt="spacer" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Spacer(
      // flex: tỉ lệ khoảng trống (Default = 1)
      flex: int
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Text: text +++</p>**

```javascript
class MyText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text(
      // Content
      "Text",
      // align
      textAlign: TextAlign.center,
      // textTheme: Theme.of(context).textTheme.
      style: Theme.of(context).textTheme.....
      // max line trên 1 dòng
      maxLines: int,
      // xử lý text khi tràn dòng
      // TextOverflow.ellipsis: hiển thị ...
      overflow: TextOverflow.ellipsis,
      // textStyle
      style: TextStyle(
        fontSize: 10,
        fontWeight: FontWeight.bold,
        color: Theme.of(context).textTheme.bodyText1!.color.withOpacity(0.5),
      )
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Icon: icon +++</p>**

```javascript
class MyIcon extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Icon(
      // Get icon from Icons
      Icons.directions_bike,
      // size
      size: 16,
      // color
      color: Theme.of(context).textTheme.bodyText1.color,
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ ListView: list view +++</p>**

```javascript
class MyPage extends StatelessWidget {
  // chứa item con và scroll
  return ListView(
    children: <Widget>[
      ItemOne(),
      ItemTwo(),
      ItemThree(),
    ]
  )
  // lặp lại số item con
  return ListView.builder(
    // tổng số item
    itemCount: int,
    // view từng item
    itemBuilder: (BuildContext context, int index) {
      return listItem(),
    }
  )
}
```

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Opacity: làm mờ +++</p>**

```javascript
class MyPage extends StatelessWidget {
  return Opacity(
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

## Widget animation

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

<img src="/technical-react/img/inkwell.png" alt="inkwell" />

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

<img src="/technical-react/img/inkresponse.png" alt="inkresponse" />

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

<img src="/technical-react/img/inkimage.png" alt="inkimage" />

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

## 3. Navigation and Routing

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

    - `Navigator.pop(context, route_name, params)`: Back param trở về

      `Navigator.pop(context, route_name, params)`: Back param trở về

      `final data = await Navigator.push(route_name)`: Get param từ page trở về

  - Di chuyển với route là đối tượng Route widget

    - `Navigator.of(context).push(_createRoute())`

    - `Navigator.push(context, MaterialPageRoute(builder: (context) => Page1()))`: Go to page 1 (Push Widget vào Stack)

    - `Navigator.push(context, MaterialPageRoute(builder: (context) => Page1("param")))`: Go to page 1 with param

      `Navigator.push(context, MaterialPageRoute(builder: (context) => { return Page1("param") }))`: Go to page 1 with param

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

## 4. Structure

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

## 5. Theme

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

## 6. Models

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

## 7. StatelessWidget

```javascript
class MyHomePage extends StatelessWidget {
  // Contructor
  const MyHomePage({Key? key}) : super(key: key);

  // Render UI
  @override
  Widget build(BuildContext context) {
    return Scaffold()
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
