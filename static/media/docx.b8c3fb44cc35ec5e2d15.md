# Documnet coding Flutter

<a name="readme-top"></a>
Tài liệu coding Flutter.

## 1. Tài liệu Javascript với Flutter

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
