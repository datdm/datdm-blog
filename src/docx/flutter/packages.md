# Packages pub

<a name="readme-top"></a>
Packages pub.

## 1. shared_preferences

- Lưu trữ dữ liệu nhỏ local dạng key-value
- Dữ liệu: int, double, bool, String, List<String>
- Dữ liệu file .xml và lưu vào bộ nhớ đệm
- Ex: Settings, token,...

```javascript
// Instance
final prefs = await SharedPreferences.getInstance();

// Lưu dữ liệu
final Future<bool> isBool = await prefs.setInt('counter', 10);

// Đọc dữ liệu
final int? counter = prefs.getInt('counter');
```
