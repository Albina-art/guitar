# guitar

## Install and run on linux
Install node-js. Then
```
npm install
node_modules/.bin/grunt
cd app
npm install
npm start
```

## Build for windows
```
sudo npm install -g electron-packager
cd dist
electron-packager ../app --overwrite --platform=win32 --arch=ia32
```
