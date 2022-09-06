# Document for Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. Dart

### Những điểm khác biệt so với javascript

- **Kiểu dữ liệu**

  - Numbers: `int` `double`
  - Strings: `String`
  - Booleans: `bool`
  - Lists: `List`
  - Maps: `Map`
  - Dynamic: `dynamic` kiểu dữ liệu chưa xác định

- **Biến**

  - `dynamic`: kiểu dữ liệu động
  - `final`: giống const javascript
  - `const`: không thay đổi

- **Toán tử**

  - `~/`: Return số nguyên. `101~/5= 50`
  - `is`: Return bool nếu check kiểu dữ liệu. `10 is int`
  - `is!`: Return bool nếu check kiểu dữ liệu. `10 is! int`
  - `??=`: set value nếu null.
  - `??`: `final ex = a ?? b`

- **Loop**

  - `for (var i = 1; i < 10; i++)`
  - `for (variablename in item)`
  - `while(condition)`
  - `do {} while(condition)`

- **List**: Mảng

  - List with size: `var list = new List(3)`
  - List with empty: `var list = new List(0)`
  - Add: `list.add(1)`
  - Add all: `list.add([1, 3])`
  - Insert: `list.insert([index, value])`
  - Insert all: `list.insertAll(index,[value1, value2])`
  - Add: `list[1] = 1`
  - List: `var list = [1, 2, 3]`

- **Map**: Object

  - New: `var iden = new Map()`
  - New: `var iden = {'Usrname':'tom','Password':'123'}`
  - Add: `iden['uid'] = 'uid'`

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

## 2. Flutter

<p align="right">(<a href="#readme-top">back to top</a>)</p>
