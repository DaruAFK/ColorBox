keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias color-box
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk color-box
zipalign -v 4 app-release-unsigned.apk ColorBox.apk
apksigner verify ColorBox.apk