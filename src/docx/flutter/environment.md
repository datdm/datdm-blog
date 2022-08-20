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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. Android

### Download Android Studio

- Android SDK
- Android SDK Command-line Tools
- Android SDK Build-Tools
- **Install Plugins**: <b style="color: red">Flutter, Dart</b>
- Setup SDK Platform
  - Android SDK Platform 31
  - Sources for Android 31
  - Intel x86 Atom_64 System Image
  - Google APIs Intel x86 Atom System Image

### Set up the Android emulator

- Virtual Device Manager
- Tips: Set memory and Storage, Internal Storeage: 2048MB để tăng dung lượng install app trên máy app.

### Set up your Android device

### Agree to Android Licenses

- CMD:
  ```powershell
  flutter doctor --android-licenses
  ```

### Visual Studio Code

- Install extension: <b style="color: red">Flutter, Dart</b>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
