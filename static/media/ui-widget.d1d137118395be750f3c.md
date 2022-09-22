# Flutter for UI Widget

<a name="readme-top"></a>
Flutter for UI Widget

## 1. MaterialApp: sử dụng Material Design

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

## 3. AppBar: header màn hình

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>
