# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. UI Widget

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ MaterialApp: sử dụng Material Design +++</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Scaffold: lắp đầy full màn hình +++</p>**

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
      floatingActionButton: FloatingActionButton(...)
    )

    // Custom method
    AppBar buildAppBar() {
      return AppBar(..)
    }
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ AppBar: header màn hình +++</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ SliverAppBar: app bar với thanh cuộn +++</p>**

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
  )
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### SizedBox: hộp trong suốt, set kích thước cụ thể như width, height, size, child

<img src="/technical-react/img/sizedbox.png" alt="sizedbox" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### RototedBox: xoay widget theo 1/4 vòng tròn(90 độ or -90 độ)

<img src="/technical-react/img/rotatedbox.png" alt="rotatedbox" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ FittedBox: scale và vị trí widget con phù hợp trong nó +++</p>**

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

### Card: widget tạo hình nhật với border tròn 4 góc

<img src="/technical-react/img/card.png" alt="card" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### CircleAvatar: widget vòng tròn chứa màu nền, hình nền, văn bản

<img src="/technical-react/img/circleavatar.png" alt="circleavatar" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ IconButton: button với icon +++</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ (Removed) FlatButton: button phẳng, độ nhô bằng 0, icon, text,... +++</p>**

<img src="/technical-react/img/flatbutton.png" alt="flatbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ TextButton: button with text, độ nhô bằng 0 +++</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ ElevatedButton: button với độ nhô lớn hơn 0 +++</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ MaterialButton: button material</p>**

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

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ RoundedRectangleBorder: border hình chữ nhật góc tròn +++</p>**

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

### CircleBorder: border hình tròn lớn nhất

<img src="/technical-react/img/circleborder.png" alt="circleborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### StatiumBorder: border hình sân vận động

<img src="/technical-react/img/stadiumborder.png" alt="stadiumborder" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ SafeArea: dùng phù hợp với thanh status bar +++</p>**

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
      // đường cơ sơ
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Stack: hiển thị các widget chồng lên nhau, widget đầu sẽ dưới cùng +++</p>**

UI:

<img src="/technical-react/img/stack.png" alt="stack" />

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

**<p style="color: #635cd1; font-size: 20px; border-bottom: 1px solid #635cd1; padding-bottom: 4px;">+++ Expanded: widget tạo khoảng trống cho 1 widget con của Row hoặc Column +++</p>**

UI:

<img src="/technical-react/img/expanded.png" alt="expanded" />

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
    )
  }
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

## 6. StatelessWidget

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
