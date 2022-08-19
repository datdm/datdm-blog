# Setup môi trường flutter

<a name="readme-top"></a>
Setup môi trường cài đặt Flutter trên windows.

## 1. Windows.

### Fullter SDK

- Install SDK
  - Download: `https://docs.flutter.dev/development/tools/sdk/releases`
  - Git:
    ```sh
    git clone https://github.com/flutter/flutter.git -b stable
    ```
- Configure path môi trường window tại biến `Path`: `C:/flutter/bin`
- Xem các phần cần setup
  ```powershell
  flutter doctor
  ```

## 2. Android

### Download Android Studio

- Android SDK
- Android SDK Command-line Tools
- Android SDK Build-Tools

### Set up the Android emulator

- Virtual Device Manager
- Tips: Set memory and Storage, Internal Storeage: 2048MB để tăng dung lượng install app trên máy app.

### Agree to Android Licenses

```powershell
flutter doctor --android-licenses
```

### VS Code

- Install extension: Flutter
