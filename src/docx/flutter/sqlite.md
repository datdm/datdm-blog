# Config data local: SQLite

<a name="readme-top"></a>
Config data local: SQLite

## 1. Installation

- Lib:

  ```bash
  flutter pub add sqflite
  ```

- Các library liên quan

  _path_provider_: Get vị trí lưu file

  ```bash
  flutter pub add path_provider
  ```

  _path_

  ```bash
  flutter pub add path
  ```

## 2. How to use

- Tạo singleton class

  ```javascript
  class DBProvider {
    DBProvider._();
    static final DBProvider db = DBProvider._();
  }
  ```

- Create table

  ```javascript
  import 'package:sqflite/sqflite.dart';

  class DBProvider {
    // Tạo singleton class
    ...

    static Database _database;

    // Future Database
    Future<Database> get database async {
      if (_database != null)
        return _database;


    }
  }
  ```
