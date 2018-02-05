# Color Box (Angular 5 + Ionic + Firebase + Cordova)

### Installation & Development
1. clone this repo: `git clone https://github.com/DaruAFK/color-box.git`
2. `cd color-box`
3. `npm install`
4. run `ionic serve` from a terminal

### Run in Android
```bash
$ ionic cordova run android --device
```

### Production build Android: 
```bash
$ ionic cordova build android --prod --release
```

### Sign Android APK
```bash
$ keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias color-box
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk color-box
$ zipalign -v 4 app-release-unsigned.apk ColorBox.apk
$ apksigner verify ColorBox.apk
```