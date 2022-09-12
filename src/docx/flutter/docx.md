# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

<a name="dart"></a>

## 1. Dart

(<a href="#flutter">go to Flutter</a>)

### Những điểm khác biệt so với javascript

- **Kiểu dữ liệu**

  - Numbers: `int` `double`
  - Strings: `String`
  - Booleans: `bool`
  - Lists: `List`
  - Maps: `Map`
  - Dynamic: `dynamic` kiểu dữ liệu chưa xác định

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Biến**

  - `dynamic`: kiểu dữ liệu động
  - `final`: giống const javascript
  - `const`: không thay đổi

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Toán tử**

  - `~/`: Return số nguyên. `101~/5= 50`
  - `is`: Return bool nếu check kiểu dữ liệu. `10 is int`
  - `is!`: Return bool nếu check kiểu dữ liệu. `10 is! int`
  - `??=`: set value nếu null.
  - `??`: `final ex = a ?? b`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Loop**

  - `for (var i = 1; i < 10; i++)`
  - `for (variablename in item)`
  - `while(condition)`
  - `do {} while(condition)`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **List**: Mảng

  - List with size: `var list = new List(3)`
  - List with empty: `var list = new List(0)`
  - Add: `list.add(1)`
  - Add all: `list.add([1, 3])`
  - Insert: `list.insert([index, value])`
  - Insert all: `list.insertAll(index,[value1, value2])`
  - Add: `list[1] = 1`
  - List: `var list = [1, 2, 3]`
  - List: `List<String> list = new List<String>()`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Set**: Object

  - New: `Set number = new Set()`
  - New: `number.add(1)`
  - New: `Set number = new Set.from([1, 2, 3])`
  - Loop: `for(var no in numberSet)`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Queue**: Object

  - New: `Queue queue = new Queue()`
  - New: `queue.add(1)`
  - New all: `queue.addAll([1, 2, 3])`
  - New first: `queue.addFirst(1)`
  - New last: `queue.addLast(1)`
  - Loop: `for(var no in numberSet)`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Map**: Object

  - New: `var iden = new Map()`
  - New: `var iden = {'Usrname':'tom','Password':'123'}`
  - Add: `iden['uid'] = 'uid'`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Runes**

  ```javascript
  String x = "Runes"

  x.codeUnitAt(0) => 82
  x.codeUnits => [82, 117, 110, 101, 115]
  x.runes => (82, 117, 110, 101, 115)
  String.fromCharCode(rune) => 82 => "R"

  Runes rune = new Runes('\u{1f605}');
  String.fromCharCode(rune) => 82 => "R"
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Enum**

  ```javascript
    enum Status {
      none,
      running,
      stopped,
      paused
    }

    print(Status.values);
    print("${Status.none} ${Status.none.index}");
    print(Status.values[1]);
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Function**

  ```javascript
  void function_name(param1, [optional_param_1, optional_param_2]) { }
  function_name(1)
  function_name(1, [1])

  void function_name(a, {optional_param1, optional_param2}) { }
  function_name(1)
  function_name(1, optional_param1: 1)
  function_name(1, optional_param2: 2, optional_param1: 1)

  void function_name(a, {optional_param1 = 1}) { }
  function_name(1)

  function_name() => print(1)
  int function_name() => 123
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Classes**

  ```javascript
  class class_name {
    <fields>
    <getters/setters>
    <constructors>
    <functions>
  }

  class Car {
    // fields
    String equipment = ""

    // Static
    static int num
    static function_static() {}

    // Constructor
    Car(String name) {
      this.equipment = "equipment"
    }

    // getter
    String get equipment_name() {
      return this.equipment
    }

    // setter
    void set equipment_name(String equipment) {
      this.equipment = equipment
    }

    // Function
    void function_name() {}
  }

  Car honda = new Car("honda")
  honda.equipment
  honda.function_name()
  honda.equipment_name
  Car.num = 10
  Car.function_static()

  // Multi constructors
  class Car {
    Car() {}

    Car.namedConst(String name) {}
  }

  Car mec = new Car()
  Car toyata = new Car.namedConst("toyata")

  // Implements, Extends
  class Mec extends Car {
    @override
    void function_name() {
      // Override

      // keyword super, call Parent
      print(super.equipment)
      print(super.function_name())
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Object**

  ```javascript
  class Car {
    void method1() {}
    void method2() {}
  }

  Car honda = new Car()
  honda.method1()
  honda.method2()

  // Toán tử (..)
  new Car()..method1()..method2()
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Exception**

  ```javascript
  // Custom exception
  class Exception_Custom extends Exception {
    String errMsg() => "msg"
  }

  try {
    throw new Exception_name()
    // DeferredLoadException
    // FormatException
    // IntegerDivisionByZeroException
    // IOException
    // IsolateSpawnException
    // Timeout

    throw new Exception_Custom()
  } on {
  } on catch (e) {
  } catch (e) {

    // Msg custom
    print(e.errMsg())
  } finnaly {
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Typedef**: bí danh alias hàm

  ```javascript
  typedef function_name(parameters)

  typedef ManyOperator(int a, int b)

  Add(int a, int b) {}
  Sub(int a, int b) {}
  Calculate(int a, int b, ManyOperator open) {
    open(a, b)
  }

  ManyOperator open = Add
  open(1, 2) => function Add
  open = Sub
  open(1, 2) => function Sub

  Calculate(1, 2, Add) => function Add
  Calculate(1, 2, Sub) => function Sub
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Import**

  ```javascript
  // File, socket, http, i/o
  import "dart:io";
  // Core dart
  import "dart:core";
  // Math constant, function
  import "dart:math";
  // Encode, decode
  import "dart:convert";
  // List fixed data
  import "dart:typed_data";
  import "package:my_lib/my_lib:dart";
  import "package:lib/lib:dart";
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Library**

  ```javascript
  // Create custom library
  library library_name;

  int add(int a, int b) {}
  int random(int a, int b) {}

  // Use custom library
  import "library_name.dart"
  import "folders/library_name.dart"
  import "folders/library_name.dart" as prefix

  void main() {
    print(add(1, 2))
    print(random(1, 2))
    print(prefix.add(1, 2))
    print(prefix.random(1, 2))
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **I/O Async**

  ```javascript
  import "dart:async"
  import "dart:io"

  String name = stdin.readLineSync()
  print(name)

  // Read file
  File file = new File(Directory.current.path + "\\data\\file.txt")
  // Async data file as string
  Future<String> f = file.readAsString()
  // Async
  f.then((data) => print(data))
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **Đa luồng Isolate**

  ```javascript
  import "dart:isolate"

  void func(String msg) {
    print(msg)
  }

  void main(){
    Isolate.spawn(func, "Messge")
    Isolate.spawn(func, "Messge2")
    Isolate.spawn(func, "Messge3")

    print("Text")
    print("Text2")
    print("Text3")
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- **DOM HTML**

  ```javascript
  import "dart:html"
  Element querySelector(String selectors)

  var ele1 = document.querySelector(".className")
  var ele2 = document.querySelector("#id")

  querySelector("#output").text = "html"
  querySelector("#output").onClick.listen(eventHandler)
  String name = (querySelector("output") as InputElement).value

  // Define handle event
  void eventHandler(MouseEvent event) {}
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="flutter"></a>

## 2. Flutter

(<a href="#dart">go to Dart</a>)

<b style="color: red; font-size: 20px;">---- UI Widget ----</b>

### Scaffold: lắp đầy full màn hình

<img src="/technical-react/img/scaffold.png" alt="scaffold" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### AppBar: header màn hình

<img src="/technical-react/img/appbar.png" alt="appbar" />

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

### Center: đặt widget con tại center

<img src="/technical-react/img/center.png" alt="center" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Align: đặt widget con và điều chỉnh vị trí widget con

<img src="/technical-react/img/align.png" alt="align" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Row: hiển thị các widget con trên 1 hàng

<img src="/technical-react/img/row.png" alt="row" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Column: hiển thị các widget con trên 1 cột

<img src="/technical-react/img/column.png" alt="column" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Stack: hiển thị các widget chồng lên nhau, widget đầu sẽ dưới cùng

<img src="/technical-react/img/stack.png" alt="stack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### IndexedStack: lớp con của Stack, tại một thời điểm thị 1 widget con, widget khác sẽ ẩn đi, index: null sẽ ẩn

<img src="/technical-react/img/indexedstack.png" alt="indexedstack" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Spacer: tạo khoảng trống, các thể điều chỉnh giữa các widget con

<img src="/technical-react/img/spacer.png" alt="spacer" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Expanded: widget tạo khoảng trống cho 1 widget con của Row hoặc Column

<img src="/technical-react/img/expanded.png" alt="expanded" />

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

### IconButton: button với icon

<img src="https://s1.o7planning.com/vi/12859/images/64405877.gif" alt="iconbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### FlatButton: button phẳng, độ nhô bằng 0, icon, text,...

<img src="/technical-react/img/flatbutton.png" alt="flatbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### TextButton: button with text, độ nhô bằng 0

<img src="/technical-react/img/textbutton.png" alt="textbutton" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### ElevatedButton: button với độ nhô lớn hơn 0

<img src="/technical-react/img/elevatedbutton.png" alt="elevatedbutton" />

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

### Navigation and Routing

<img src="/technical-react/img/route.png" alt="route" />

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

### EdgeInsetsGeometry: tạo inner padding (padding) và outer padding (margin)

<img src="/technical-react/img/edgeinsetsgeometry.png" alt="edgeinsetsgeometry" />

**EdgeInsets**: dựa trên tham số **_left, top, right, bottom_**

**EdgeInsetsDirectional**: dựa trên tham số **_start, top, end, bottom_**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Alignment: căn chỉnh ví trí của widget con bên trong parent

<img src="/technical-react/img/alignment.png" alt="alignment" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Positioned: định vị trí widget con trong Stack

<img src="/technical-react/img/positioned.png" alt="positioned" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>
