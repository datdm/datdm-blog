# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. UI Widget

**<p style="color: #635cd1">MaterialApp: sử dụng Material Design</p>**

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // title app
      title: "title"
      // hide/show banner debug
      debugShowCheckedModeBanner: bool
      // theme
      theme: ThemeDate(
        // theme primary
        primarySwatch: Colors.blue,
      )
      // home
      home: MyHomePage(...)
      // initial route
      initialRoute: "/home",
      // routes
      routes: <String, WidgetBuilder>{
        "/home": (BuildContext context) => HomePage(),
        "/details": (BuildContext context) => DetailsPage(),
        "/about": (BuildContext context) => AboutPage(),
      }
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Scaffold: lắp đầy full màn hình</p>**

UI:

<img src="/technical-react/img/scaffold.png" alt="scaffold" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // AppBar widget
      appBar: AppBar(...)
      // Content
      body: Center(...)
      // button widget, default dưới góc phải
      floatingActionButton: FloatingActionButton(...)
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">AppBar: header màn hình</p>**

UI:

<img src="/technical-react/img/appbar.png" alt="appbar" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      // title app bar
      title: "title"
      title: Align(
        child: Text("title"),
        alignment: Alignment.center
      )
      // default: true
      // nếu leading: null và automaticallyImplyLeading: true, drawer ở Scaffold có data thì hiển thị drawer đóng mở
      // nếu leading: null và automaticallyImplyLeading: true, drawer ở AppBar: null thì hiển thị button back
      automaticallyImplyLeading: bool
      // leading: đặt trước title, thường là icon
      leading: IconButton(...)
      // actions: thêm các hành động trên app bar, thường icon
      actions: <Widget>[
        IconButton(...),
        IconButton(...),
        IconButton(...),
      ]
      // buttom của app bar chứa tabbar
      bottom: TabBar(...)
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">SliverAppBar: app bar với thanh cuộn</p>**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### BottomAppBar: bottom màn hình

<img src="/technical-react/img/bottomappbar.png" alt="bottomappbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### TabBar: tab bar

<img src="/technical-react/img/tabbar.png" alt="tabbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Banner: thông điệp chéo hiển thị trên bề mặt

<img src="/technical-react/img/banner.png" alt="banner" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Splash Screen: màn hình đầu tiên khi khởi động ứng dụng

<img src="https://s1.o7planning.com/vi/13143/images/64421067.gif" alt="splashscreen">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### BottomNavigationBar: thanh điều hướng ở bottom

<img src="/technical-react/img/bottomnavigationbar.png" alt="bottomnavigationbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### FancyBottomNavigation: thanh điều hướng ở bottom

<img src="/technical-react/img/fancybottomnavigation.png" alt="fancybottomnavigation" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### CircularProgressIndicator: tiến trình dạng hình tròn

<img src="/technical-react/img/circularprogressindicator.png" alt="circularprogressindicator" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### LinearProgressIndicator: tiến trình dạng nằm ngang

<img src="/technical-react/img/linearprogressindicator.png" alt="linearprogressindicator" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Container: hộp chứa các widget con và có thuộc tính: padding, margin,...

<img src="/technical-react/img/container.png" alt="container" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### SizedBox: hộp trong suốt, set kích thước cụ thể như width, height, size, child

<img src="/technical-react/img/sizedbox.png" alt="sizedbox" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### RototedBox: xoay widget theo 1/4 vòng tròn(90 độ or -90 độ)

<img src="/technical-react/img/rotatedbox.png" alt="rotatedbox" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Card: widget tạo hình nhật với border tròn 4 góc

<img src="/technical-react/img/card.png" alt="card" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### CircleAvatar: widget vòng tròn chứa màu nền, hình nền, văn bản

<img src="/technical-react/img/circleavatar.png" alt="circleavatar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">IconButton: button với icon</p>**

UI:

<img src="https://s1.o7planning.com/vi/12859/images/64405877.gif" alt="iconbutton" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return IconButton(
      // icon
      icon: Icon(Icons.directions_bike)
      // icon with image
      icon: Image.network("")
      // icon with text
      icon: Text("")
      // icon size, double
      iconSize: 0.3
      // on press
      onPressed: () {}
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### FlatButton: button phẳng, độ nhô bằng 0, icon, text,...

<img src="/technical-react/img/flatbutton.png" alt="flatbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### TextButton: button with text, độ nhô bằng 0

<img src="/technical-react/img/textbutton.png" alt="textbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">ElevatedButton: button với độ nhô lớn hơn 0</p>**

UI:

<img src="/technical-react/img/elevatedbutton.png" alt="elevatedbutton" />

Code:

```javascript

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      // widget con
      child: Text("")
      // on press
      onPressed: () {}
      // on long press
      onLongPress: () {}
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Snackbar: phản hồi ngắn, nằm dưới bottom, undo action

<img src="/technical-react/img/snackbar.png" alt="snackbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Tween:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### SimpleDialog: dialog đơn giản bao gồm tiêu đề, danh sách lựa chọn

<img src="/technical-react/img/simpledialog.png" alt="simpledialog" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### AlertDialog: hộp thoại thông báo xác nhận

<img src="/technical-react/img/alertdialog.png" alt="alertdialog" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### ShapeBorder: shape border

<img src="/technical-react/img/shapeborder.png" alt="shapeborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Border: border gồm top, bottom, left, right

<img src="/technical-react/img/border.png" alt="border" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### ContinuousRectangleBorder: border hình chữ nhật với chuyển tiếp liên tục giữa cạnh và góc

<img src="/technical-react/img/continuousrectangleborder.png" alt="continuousrectangleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### RoundedRectangleBorder: border hình chữ nhật góc tròn

<img src="/technical-react/img/roundedrectangleborder.png" alt="roundedrectangleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### CircleBorder: border hình tròn lớn nhất

<img src="/technical-react/img/circleborder.png" alt="circleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### StatiumBorder: border hình sân vận động

<img src="/technical-react/img/stadiumborder.png" alt="stadiumborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. UI Layout

**<p style="color: #635cd1">Center: đặt widget con tại center</p>**

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

**<p style="color: #635cd1">Align: đặt widget con và điều chỉnh vị trí widget con</p>**

UI:

<img src="/technical-react/img/align.png" alt="align" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Row: hiển thị các widget con trên 1 hàng</p>**

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
      // đường cơ sơ
      // TextBaseline.alphabetic (Default)
      // TextBaseline.ideographic
      textBaseline: TextBaseline
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Column: hiển thị các widget con trên 1 cột</p>**

UI:

<img src="/technical-react/img/column.png" alt="column" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Stack: hiển thị các widget chồng lên nhau, widget đầu sẽ dưới cùng</p>**

UI:

<img src="/technical-react/img/stack.png" alt="stack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">IndexedStack: lớp con của Stack, tại một thời điểm thị 1 widget con, widget khác sẽ ẩn đi, index: null sẽ ẩn</p>**

UI:

<img src="/technical-react/img/indexedstack.png" alt="indexedstack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">EdgeInsetsGeometry: tạo inner padding (padding) và outer padding (margin)</p>**

UI:

<img src="/technical-react/img/edgeinsetsgeometry.png" alt="edgeinsetsgeometry" />

**EdgeInsets**: dựa trên tham số **_left, top, right, bottom_**

**EdgeInsetsDirectional**: dựa trên tham số **_start, top, end, bottom_**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Alignment: căn chỉnh ví trí của widget con bên trong parent</p>**

UI:

<img src="/technical-react/img/alignment.png" alt="alignment" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Positioned: định vị trí widget con trong Stack</p>**

UI:

<img src="/technical-react/img/positioned.png" alt="positioned" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Expanded: widget tạo khoảng trống cho 1 widget con của Row hoặc Column</p>**

UI:

<img src="/technical-react/img/expanded.png" alt="expanded" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1">Spacer: tạo khoảng trống, các thể điều chỉnh giữa các widget con</p>**

UI:

<img src="/technical-react/img/spacer.png" alt="spacer" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 3. Navigation and Routing

<img src="https://s1.o7planning.com/vi/13151/images/64420896.gif" alt="route" />

**<p style="color: #635cd1">Route Transition: Nagivation từ screen 1 tới screen 2</p>**

- Di chuyển screen

  - Di chuyển với route là string

    `Navigator.pushNamed(context, route_name)`: Go to page dựa trên route name

    `Navigator.of(context).pushNamed(route_name)`: Go to page dựa trên route name

    `Navigator.of(context).pop()`: Back về page trước đó

    `Navigator.of(context).pop(route_name)`: Back về page dựa trên route

  - Di chuyển với route là đối tượng Route widget

    `Navigator.of(context).push(_createRoute())`

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
          "/about": (BuildContext context) => AboutPage(),
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 4. StatelessWidget

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
