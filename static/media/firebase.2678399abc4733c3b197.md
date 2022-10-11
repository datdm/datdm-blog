# Config Firebase in Flutter

<a name="readme-top"></a>
Config Firebase in Flutter.

## 1. Config firebase cloud to Android

- Tạo project: https://console.firebase.google.com/
- Add Firebase to Android App

  - Register app:

    - Android package name: Get từ file `AndroidManifest.xml` trong folder `android`. Ex: "com.example.chat_messsaging"
    - App nickname: Tên app
    - Debug signing certificate SHA-1:

      - Get client auth from: https://developers.google.com/android/guides/client-auth
      - CMD folder: `C:\Users\Name\.android`

        ```bash
        keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
        ```

        - _Cài đặt Java trước: https://www.oracle.com/java/technologies/downloads_

        - _Add PATH System varialbles: C:\Program Files\Java\jdk-19\bin_

      - Get key SHA-1
      - Add SHA256 sau khi done vào SHA certificate fingerprints

  - Download and then config file

    - Download `google-services.json` to folder `/android/app`.

  - Add Firebase SDK

    - Add plugins vào file `/android/build.gradle`

      ```gradle
      buildscript {
        repositories {
          // Make sure that you have the following two repositories
          google()  // Google's Maven repository
          mavenCentral()  // Maven Central repository
        }
        dependencies {
          ...
          // Add this line
          classpath 'com.google.gms:google-services:4.3.13'
        }
      }

      allprojects {
        ...
        repositories {
          // Make sure that you have the following two repositories
          google()  // Google's Maven repository
          mavenCentral()  // Maven Central repository
        }
      }
      ```

    - Add plugins vào file `/android/app/build.gradle`

      ```gradle
      apply plugin: 'com.google.gms.google-services'

      plugins {
        id 'com.android.application'

        // Add this line
        id 'com.google.gms.google-services'
        ...
      }

      dependencies {
        // Import the Firebase BoM
        implementation platform('com.google.firebase:firebase-bom:30.4.1')

        // TODO: Add the dependencies for Firebase products you want to use
        // When using the BoM, don't specify versions in Firebase dependencies
        // https://firebase.google.com/docs/android/setup#available-libraries
      }

      // TIPS:
      defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "com.example.chat_messsaging"
        // You can update the following values to match your application needs.
        // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-build-configuration.
        minSdkVersion flutter.minSdkVersion // flutter.minSdkVersion => 12
        targetSdkVersion flutter.targetSdkVersion
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
        multiDexEnabled true
      }
      ```

  - Done

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 2. Config firebase cloud to IOS

- Tạo project: https://console.firebase.google.com/
- Add Firebase to IOS App

  - Register app:

    - Apple bundle ID: Get từ keyword `PRODUCT_BUNDLE_IDENTIFIER` trong file `/ios/Runner.xcodeproj/project.pbxproj`
    - App nickname: Tên app
    - App Store ID: 123456789

  - Download config file

    - Download `GoogleService-Info.plist` to folder `/ios/Runner`

  - TODO:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 3. Config firebase cloud to Web

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 4. Authentication

- Email/Password

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 5. Cloud Firestore

- Change rules
  ```bash
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
      }
    }
  }
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 6. How to use

### Add library

- File `pubspec.yaml`

  ```bash
  flutter pub add firebase_core, firebase_auth, cloud_firestore
  ```

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Initialize

- File `lib/main.dart`

  ```javascript
  import 'package:firebase_core/firebase_core.dart';
  import 'package:flutter/foundation.dart';

  void main() async {
    WidgetsFlutterBinding.ensureInitialized();
    if (kIsWeb) {
      await Firebase.initalizeApp({
        options: FirebaseOptions(
          apiKey: "",
          appId: "",
          messagingSenderId: "",
          projectId: "",
        )
      })
    } else {
      await Firebase.initalizeApp();
    }

    runApp(const MyApp());
  }
  ```

### Firebase Auth

- File `lib/services/auth_services.dart`

  ```javascript
  // instance
  FirebaseAuth firebaseAuth = FirebaseAuth.instance;

  // UserCredential with createUserWithEmailAndPassword
  UserCredential userCredential = await firebaseAuth.createUserWithEmailAndPassword(
    email: email,
    password: password,
  );
  // UserCredential with signInWithEmailAndPassword
  UserCredential userCredential = await firebaseAuth.signInWithEmailAndPassword(
    email: email,
    password: password,
  );

  // get current user
  User user = FirebaseAuth.instance.currentUser;

  // User
  User? user = userCredential.user;

  // sign out
  await firebaseAuth.signOut();
  ```

### Cloud Firestore

- File `lib/services/database_services.dart`

  ```javascript
  // instance
  FirebaseFirestore instanceFirestore = FirebaseFirestore.instance;

  // collection
  CollectionReference userCollection = instanceFirestore.collection("users");
  CollectionReference groupCollection = instanceFirestore.collection("groups");

  // document
  DocumentReference doc = userCollection.doc(uid);

  // set data to document
  await userCollection.doc(id).set({
    "params": "",
    "uid": uid,
  });

  // query: where
  Query query = userCollection.where("field", isEqualTo: field);
  // get snapshot
  QuerySnapshot snapshot = await query.get();
  // return value của snapshot
  String fullname = snapshot.docs[0]["fullname"];
  ```
