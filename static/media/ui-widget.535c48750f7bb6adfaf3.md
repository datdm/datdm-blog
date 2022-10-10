# Flutter for UI Widget

<a name="readme-top"></a>
Flutter for UI Widget

<ol>
  <li><a href="#materialapp">MaterialApp</a></li>
  <li><a href="#scaffold">Scaffold</a></li>
  <li><a href="#appbar">AppBar</a></li>
  <li><a href="#sliverappbar">SliverAppBar</a></li>
  <li><a href="#bottomappbar">BottomAppBar</a></li>
  <li><a href="#tabbar">TabBar</a></li>
  <li><a href="#banner">Banner</a></li>
  <li><a href="#splashscreen">SplashScreen</a></li>
  <li><a href="#bottombavigationbar">BottomNavigationBar</a></li>
  <li><a href="#fancybottomnavigation">FancyBottomNavigation</a></li>
  <li><a href="#circularprogressindicator">CircularProgressIndicator</a></li>
  <li><a href="#linearprogressindicator">LinearProgressIndicator</a></li>
  <li><a href="#container">Container</a></li>
  <li><a href="#sizedbox">SizedBox</a></li>
  <li><a href="#rotatedbox">RototedBox</a></li>
  <li><a href="#fittedbox">FittedBox</a></li>
  <li><a href="#card">Card</a></li>
  <li><a href="#circleavatar">CircleAvatar</a></li>
  <li><a href="#iconbutton">IconButton</a></li>
  <li><a href="#flatbutton">(Removed) FlatButton</a></li>
  <li><a href="#textbutton">TextButton</a></li>
  <li><a href="#elevatedbutton">ElevatedButton</a></li>
  <li><a href="#materialbutton">MaterialButton</a></li>
  <li><a href="#snackbar">Snackbar</a></li>
  <li><a href="#tween">Tween</a></li>
  <li><a href="#simpledialog">SimpleDialog</a></li>
  <li><a href="#alertdialog">AlertDialog</a></li>
  <li><a href="#shapeborder">ShapeBorder</a></li>
  <li><a href="#border">Border</a></li>
  <li><a href="#continuousrectangleborder">ContinuousRectangleBorder</a></li>
  <li><a href="#roundedrectangleborder">RoundedRectangleBorder</a></li>
  <li><a href="#circleborder">CircleBorder</a></li>
  <li><a href="#stadiumborder">StatiumBorder</a></li>
  <li><a href="#safearea">SafeArea</a></li>
  <li><a href="#center">Center</a></li>
  <li><a href="#align">Align</a></li>
  <li><a href="#row">Row</a></li>
  <li><a href="#column">Column</a></li>
  <li><a href="#stack">Stack</a></li>
  <li><a href="#indexedstack">IndexedStack</a></li>
  <li><a href="#edgeinsetsgeometry">EdgeInsetsGeometry</a></li>
  <li><a href="#alignment">Alignment</a></li>
  <li><a href="#positioned">Positioned</a></li>
  <li><a href="#expanded">Expanded</a></li>
  <li><a href="#spacer">Spacer</a></li>
  <li><a href="#text">Text</a></li>
  <li><a href="#icon">Icon</a></li>
  <li><a href="#listview">ListView</a></li>
  <li><a href="#opacity">Opacity</a></li>
  <li><a href="#textfield">TextField</a></li>
  <li><a href="#aspectratio">AspectRatio</a></li>
  <li><a href="#cliprrect">ClipRRect</a></li>
  <li><a href="#singlechildscrollview">SingleChildScrollView</a></li>
</ol>

## 1. MaterialApp: sử dụng Material Design

<a name="materialapp"></a>

Code:

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
            return MaterialPageRoute(builder: (context) => HomePage())
        }
      }
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. Scaffold: lắp đầy full màn hình

<a name="scaffold"></a>

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
      // use AppBar custom
      appBar: buildAppBar(..)
      // Content
      body: Center(...)
      // button widget, default dưới góc phải
      floatingActionButton: FloatingActionButton(
        // on press
        onPressed: () {},
        // tooltip
        tooltip: "",
        // widget con
        child: Icon(Icons.add),
        // background color
        backgroundColor: Colors.red,
      )
      // bottom navigation bar
      bottomNavigationBar: BottomNavigationBar(..)
      // resize tránh bottom
      resizeToAvoidBottomInset: bool,
    )

    // Custom method
    AppBar buildAppBar() {
      return AppBar(..)
    }
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 3. AppBar: header màn hình

<a name="appbar"></a>

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
      // set height của thanh ứng dụng và shadow. 0 sẽ remove shadow
      elevation: double
      // background:
      backgroundColor: Colors.green,
      // default: true
      // nếu leading: null và automaticallyImplyLeading: true, drawer ở Scaffold có data thì hiển thị drawer đóng mở
      // nếu leading: null và automaticallyImplyLeading: true, drawer ở AppBar: null thì hiển thị button back
      // nếu automaticallyImplyLeading: false thì không hiển thị button back
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

## 4. SliverAppBar: app bar với thanh cuộn

<a name="sliverappbar"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 5. BottomAppBar: bottom màn hình

<a name="bottomappbar"></a>

UI:

<img src="/technical-react/img/bottomappbar.png" alt="bottomappbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 6. TabBar: tab bar

<a name="tabbar"></a>

UI:

<img src="/technical-react/img/tabbar.png" alt="tabbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 7. Banner: thông điệp chéo hiển thị trên bề mặt

<a name="banner"></a>

UI:

<img src="/technical-react/img/banner.png" alt="banner" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 8. SplashScreen: màn hình đầu tiên khi khởi động ứng dụng

<a name="splashscreen"></a>

UI:

<img src="https://s1.o7planning.com/vi/13143/images/64421067.gif" alt="splashscreen">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 9. BottomNavigationBar: thanh điều hướng ở bottom

<a name="bottombavigationbar"></a>

UI:

<img src="/technical-react/img/bottomnavigationbar.png" alt="bottomnavigationbar" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return BottomNavigationBar(
    // bố trị bố cục (default: BottomNavigationBarType.fixed)
    // BottomNavigationBarType.fixed: hiển thị label và icon
    // BottomNavigationBarType.shifting: hiển thị icon
    type: BottomNavigationBarType.shifting,
    // vị trí hiện tại trong list
    currentIndex: int,
    // list item hiển thị
    items: [
      BottomNavigationBarItem(
        // label
        label: string,
        // icon
        icon: Icon(Icons.contacts)
      )
    ],
    // background color
    backgroundColor: Colors.red,
    // color fixed, if fixedColor then selectedItemColor = null
    fixedColor: Colors.red,
    // color selected item, if selectedItemColor then fixedColor = null
    selectedItemColor: Colors.red,
    // color unselected item
    unselectedItemColor: Colors.red,
    // color selected theme
    selectedIconTheme: IconThemeData(

    )
    // on tap click item
    onTap: (value) {}
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 10. FancyBottomNavigation: thanh điều hướng ở bottom

<a name="fancybottomnavigation"></a>

UI:

<img src="/technical-react/img/fancybottomnavigation.png" alt="fancybottomnavigation" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 11. CircularProgressIndicator: tiến trình dạng hình tròn

<a name="circularprogressindicator"></a>

UI:

<img src="/technical-react/img/circularprogressindicator.png" alt="circularprogressindicator" />

Code:

```javascript
class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CircularProgressIndicator(
      // color
      color: Colors.red,
    );
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 12. LinearProgressIndicator: tiến trình dạng nằm ngang

<a name="linearprogressindicator"></a>

UI:

<img src="/technical-react/img/linearprogressindicator.png" alt="linearprogressindicator" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 13. Container: hộp chứa các widget con và có thuộc tính: padding, margin,...

<a name="container"></a>

UI:

<img src="/technical-react/img/container.png" alt="container" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Container(
    // color: background
    color: Color.red,
    // padding
    padding: EdgeInsets.all(1.0),
    // margin
    margin: EdgeInsets.all(1.0),
    // widget con
    child: Column(..),
    // trang trí trên nền container và đằng sau child
    decoration: BoxDecoration(
      // color
      color: Colors.red,
      // shape: kiểu dáng shape, border
      shape: BoxShape.circle,
      // border
      border: Border.all(color: Colors.red),
      // box shadow
      boxShadow: List<BoxShadow>[
        BoxShadow(
          // độ mờ
          blurRadius: int,
          // offset độ mờ x, y
          offset: Offset(x, y),
        )
      ]
    )
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 14. SizedBox: hộp trong suốt, set kích thước cụ thể như width, height, size, child

<a name="sizedbox"></a>

UI:

<img src="/technical-react/img/sizedbox.png" alt="sizedbox" />

Code:

```javascript
class MyPage extends StatelessWidget {
  // contructor
  return SizedBox(
    // width
    width: double,
    // height
    height: double,
    // widget con
    child: Text(""),
  )
  // fromSize
  return SizedBox.fromSize(
    // use Size voi
    size: Size(50, 100)
    // widget con
    child: Text("")
  )
  // from max size infinity
  return SizedBox.expand(
    // widget con
    child: Text("")
  )
  // tạo widget theo size parent
  return SizedBox.shrink(
    // widget con
    child: Text("")
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 15. RototedBox: xoay widget theo 1/4 vòng tròn(90 độ or -90 độ)

<a name="rotatedbox"></a>

UI:

<img src="/technical-react/img/rotatedbox.png" alt="rotatedbox" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 16. FittedBox: scale và vị trí widget con phù hợp trong nó

<a name="fittedbox"></a>

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FittedBox(
      // widget
      children: TextButton(..)
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 17. Card: widget tạo hình nhật với border tròn 4 góc

<a name="card"></a>

UI:

<img src="/technical-react/img/card.png" alt="card" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 18. CircleAvatar: widget vòng tròn chứa màu nền, hình nền, văn bản

<a name="circleavatar"></a>

UI:

<img src="/technical-react/img/circleavatar.png" alt="circleavatar" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return CircleAvatar(
    // background image
    backgroundImage: NetworkImage('https://'),
    backgroundImage: AssetImage('assets/..'),
    // background color avatar
    backgroundColor: Colors.red,
    // color default của text
    foregroundColor: Colors.red,
    // widget con avatar
    child: Text(..),
    // độ bo tròn radius
    radius: double,
    // min radius
    minRadius: double,
    // max radius
    maxRadius: double,
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 19. IconButton: button với icon

<a name="iconbutton"></a>

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
      // padding
      padding: EdgeInsets.all(0),
      // on press
      onPressed: () {}
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 20. (Removed) FlatButton: button phẳng, độ nhô bằng 0, icon, text,...

<a name="flatbutton"></a>

<img src="/technical-react/img/flatbutton.png" alt="flatbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 21. TextButton: button with text, độ nhô bằng 0

<a name="textbutton"></a>

UI:

<img src="/technical-react/img/textbutton.png" alt="textbutton" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //
    return TextButton(
      // widget con
      child: Text("Text"),
      // on press
      onPressed: () {}
      // style
      style: ButtonStyle(..)
      style: TextButton.styleForm(
        shape: RoundedRectangleBorder(..)
      )
    )
    // return ButtonStyle
    return TextButton.styleForm(
      shape: RoundedRectangleBorder(..)
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 22. ElevatedButton: button với độ nhô lớn hơn 0

<a name="elevatedbutton"></a>

UI:

<img src="/technical-react/img/elevatedbutton.png" alt="elevatedbutton" />

Code:

```javascript
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //
    return ElevatedButton(
      // widget con
      child: Text("")
      // on press
      onPressed: () {}
      // on long press
      onLongPress: () {}
      // style
      style: ElevatedButton.styleForm( // return ButtonStyle
        // set height của thanh ứng dụng và shadow. 0 sẽ remove shadow
        elevation: double,
        // background
        primary: Colors.red,
        // color text
        onPrimary: Colors.white
        // shape: hình dáng, border
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(0.4)),
          side: BorderSide(..)
        )
      )
    )
    // icon
    return ElevatedButton.icon(
      // icon
      icon: Icon(..),
      // label
      label: Text(""),
      // on press
      onPressed: () {},
      // style
      style: ElevatedButton.styleForm(..)
    )
    // style ElevatedButton, return ButtonStyle
    return ElevatedButton.styleForm(
      shape: RoundedRectangleBorder(..)
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 23. MaterialButton: button material

<a name="materialbutton"></a>

UI:

<img src="/technical-react/img/materialbutton.png" alt="materialbutton" />

Code:

```javascript
class MyButton extends StatesWidget {
  return MaterialButton(
    // shape: kiểu dáng border
    shape: RoundedRectangleBorder(..),
    // padding
    padding: EdgeInsets.all(10),
    // color: background
    color: Colors.red,
    // min width: double.infinity => 100%
    minWidth: double.infinity,
    // set height của thanh ứng dụng và shadow. 0 sẽ remove shadow
    elevation: double
    // on press
    onPressed: () {}
    // widget content
    child: Text("Text")
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 24. Snackbar: phản hồi ngắn, nằm dưới bottom, undo action

<a name="snackbar"></a>

UI:

<img src="/technical-react/img/snackbar.png" alt="snackbar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 25. Tween

<a name="tween"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 26. SimpleDialog: dialog đơn giản bao gồm tiêu đề, danh sách lựa chọn

<a name="simpledialog"></a>

UI:

<img src="/technical-react/img/simpledialog.png" alt="simpledialog" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 27. AlertDialog: hộp thoại thông báo xác nhận

<a name="alertdialog"></a>

UI:

<img src="/technical-react/img/alertdialog.png" alt="alertdialog" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 28. ShapeBorder: shape border

<a name="shapeborder"></a>

UI:

<img src="/technical-react/img/shapeborder.png" alt="shapeborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 29. Border: border gồm top, bottom, left, right

<a name="border"></a>

UI:

<img src="/technical-react/img/border.png" alt="border" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Container(
    heigth: 20,
    width: 20,
    decoration: BoxDecoration(
      // constructor
      border: Border(
        // top
        top: BorderSide(width: 15.0, color: Colors.red),
        // left
        left: BorderSide(width: 15.0, color: Colors.red),
        // right
        right: BorderSide(width: 15.0, color: Colors.red),
        // bottom
        bottom: BorderSide(width: 15.0, color: Colors.red),
      )
      // tạo border đồng nhất
      border: Border.all(
        // color
        color: Colors.red,
        // width
        width: double,
        // style
        style: BorderStyle(..)
      )
      // tạo border đồng nhất với BorderSide
      border: Border.fromBorderSide(
        side: BorderSide(
          // color
          color: Colors.red,
          // width
          width: double,
          // style
          style: BorderStyle(..)
        )
      )
      // tạo border theo chiều dọc và chiều ngang
      border: Border.symmetric(
        // chiều dọc
        horizontal: BorderSize(..)
        // chiều ngang
        vertical: BorderSize(..)
      )
    )
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 30. ContinuousRectangleBorder: border hình chữ nhật với chuyển tiếp liên tục giữa cạnh và góc

<a name="continuousrectangleborder"></a>

UI:

<img src="/technical-react/img/continuousrectangleborder.png" alt="continuousrectangleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 31. RoundedRectangleBorder: border hình chữ nhật góc tròn

<a name="roundedrectangleborder"></a>

UI:

<img src="/technical-react/img/roundedrectangleborder.png" alt="roundedrectangleborder" />

Code:

```javascript
class MyButton extends StatelessWidget {
  return MaterialButton(
    // shape
    shape: RoundedRectangleBorder(
      // màu sắc, chiểu rồng, kiểu dáng border
      side: BorderSide(
        width: 10,
        color: Color.blue,
        style: BorderStyle.solid,
      ),
      // radius
      borderRadius: BorderRadius.all(Radius.circular(40)),
    )
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 32. CircleBorder: border hình tròn lớn nhất

<a name="circleborder"></a>

UI:

<img src="/technical-react/img/circleborder.png" alt="circleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 33. StatiumBorder: border hình sân vận động

<a name="stadiumborder"></a>

UI:

<img src="/technical-react/img/stadiumborder.png" alt="stadiumborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 34. SafeArea: dùng phù hợp với thanh status bar

<a name="safearea"></a>

UI:

<img src="/technical-react/img/safearea.png" alt="safearea" />

Code:

```javascript
class WelcomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        // widget con
        child: Column(...)
        // Tránh system padding của màn hình
        top: bool,
        bottom: bool,
        left: bool,
        right: bool,
        // Padding nhỏ nhất áp dụng
        minimum: const EdgeInsets.all(16.0)
        // Viewpadding or padding cuar ViewInsets (Default: false)
        maintainBottomViewPadding: bool
      )
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 35. Center: đặt widget con tại center

<a name="center"></a>

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

## 36. Align: đặt widget con và điều chỉnh vị trí widget con

<a name="align"></a>

UI:

<img src="/technical-react/img/align.png" alt="align" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 37. Row: hiển thị các widget con trên 1 hàng

<a name="row"></a>

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

## 38. Column: hiển thị các widget con trên 1 cột

<a name="column"></a>

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

## 39. Stack: hiển thị các widget chồng lên nhau, widget đầu sẽ dưới cùng, thường dùng kiểu position with Positioned

<a name="stack"></a>

UI:

<img src="/technical-react/img/stack.png" alt="stack" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Stack(
    // căn chỉnh widget con không phải Positioned
    alignment: Alignment.center,
    // xác định nội dung bị cắt hay không
    clipBehavior: Clip.none,
    // chidren
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

## 40. IndexedStack: lớp con của Stack, tại một thời điểm thị 1 widget con, widget khác sẽ ẩn đi, index: null sẽ ẩn

<a name="indexedstack"></a>

UI:

<img src="/technical-react/img/indexedstack.png" alt="indexedstack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 41. EdgeInsetsGeometry: tạo inner padding (padding) và outer padding (margin)

<a name="edgeinsetsgeometry"></a>

UI:

<img src="/technical-react/img/edgeinsetsgeometry.png" alt="edgeinsetsgeometry" />

**EdgeInsets**: dựa trên tham số **_left, top, right, bottom_**

```javascript
class MyPage extends StatelessWidget {
  return Padding(
    // widget con with padding
    child: Column(..),
    // padding
    padding: EdgeInsets.symmetric(
      // chiều ngang
      horizontal: 10.0,
      // chiều dọc
      vertical: 10.0,
    ),
    // padding: left top right bottom
    padding: EdgeInsets.fromLTRB(
      10,
      10,
      10,
      10,
    ),
    // margin
    margin: EdgeInsets.only(
      top: 10,
      bottom: 10,
      right: 10,
      left: 10,
    )
  )
}
```

**EdgeInsetsDirectional**: dựa trên tham số **_start, top, end, bottom_**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 42. Alignment: căn chỉnh ví trí của widget con bên trong parent

<a name="alignment"></a>

UI:

<img src="/technical-react/img/alignment.png" alt="alignment" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 43. Positioned: định vị trí widget con trong Stack

<a name="positioned"></a>

UI:

<img src="/technical-react/img/positioned.png" alt="positioned" />

Code:

```javascript
class MyPage extends StatelessWidget {
  return Stack(
    // căn chỉnh widget con không phải Positioned
    alignment: Alignment.center,
    // xác định nội dung bị cắt hay không
    clipBehavior: Clip.none,
    // children
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

## 44. Expanded: widget tạo khoảng trống cho 1 widget con của Row hoặc Column

<a name="expanded"></a>

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

## 45. Spacer: tạo khoảng trống, các thể điều chỉnh giữa các widget con

<a name="spacer"></a>

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

## 46. Text: text

<a name="text"></a>

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
      // textTheme: headline5 with copyWith style
      style: Theme.of(context).textTheme.headline5.copyWith(fontWeight: FontWeight.bold, color: Color)
      // color
      style: TextStyle(
        color: Theme.of(context).textTheme.bodyText1.color.withOpacity(0.4)
      )
    )
    // text rich: text nhiều style khác nhau
    Text.rich(
      // TextSpan
      TextSpan(
        // text
        text: string,
        // text style
        style: TextStyle(..),
        // children text
        children: <TextSpan>[
          TextSpan(..),
          TextSpan(..),
        ],
        // on tap
        recognizer: TapGestureRecognizer()..onTap = () {}
      )
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 46.1. RichText: text với nhiều style khác nhau

<a name="richtext"></a>

```javascript
class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RichText(
        // text
        text: string,
        // text style
        style: TextStyle(..),
        // children text
        children: <TextSpan>[
          TextSpan(..),
          TextSpan(..),
        ],
        // on tap
        recognizer: TapGestureRecognizer()..onTap = () {}
    )
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 47. Icon: icon

<a name="icon"></a>

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

## 48. ListView: list view

<a name="listview"></a>

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 49. Opacity: làm mờ

<a name="opacity"></a>

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

## 50. TextField: input text

<a name="textfield"></a>

```javascript
class MyPage extends StatelessWidget {
  return TextField(
    // trang trí text field
    decoration: InputDecoration(
      // icon
      icon: Icon(Icons.print),
      // hint text
      hintText: string,
      // hint style
      hintStyle: TextStyle(..)
      // border
      border: OutlineInputBorder(..),
      // prefix icon, hiển thị trong input
      prefixIcon: Icon(Icons.print),
      // prefix common, hiển thị trong input
      prefix: CircularProgressIndicator(),
      // helper text
      helperText: string,
    ),
    // remove underline text
    decoration: null,
    decoration: InputDecoration.collapse(
      hintText: ""
    ),
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 51. AspectRatio: tỉ lệ khung hình

<a name="aspectratio"></a>

```javascript
class MyPage extends StatelessWidget {
  return AspectRatio(
    // tỉ lệ
    aspectRatio: 3/4,
    // widget con
    child: Container(..)
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 52. ClipRRect: hình chữ nhật bo tròn

<a name="cliprrect"></a>

```javascript
class MyPage extends StatelessWidget {
  return ClipRRect(
    // border radius
    borderRadius: BorderRadius.circular(8),
    // kiểu dáng bo tròn
    clipBehavior: Clip.hardEdge,
    // widget con
    child: Image.asset(""),
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 53. SingleChildScrollView: Scroll element

<a name="singlechildscrollview"></a>

```javascript
class MyPage extends StatelessWidget {
  return SingleChildScrollView(
    // scroll dọc hay ngang
    // Axis.horizontal
    // Axis.vertical
    scrollDirection: Axis.horizontal,
    // widget con
    children: <Widget>[
      Container(..),
      Container(..),
    ],
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
