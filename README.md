# evalculator
It's a calculator that uses javascript's built in eval() function. The project runs as a desktop program using electron/react + node.js.

## Download
Click ["Releases"](https://github.com/fjij/evalculator/releases) to download Windows versions of this project. Otherwise follow the build instructions down below.

## Build instructions
Go to app directory:
`cd app`
Install all npm packages and dependencies:
`npm install`
Build static React pages:
`npm run build`
Build application folder:
`npm run electron-packager -- --platform=<platform> --arch=<arch> [optional args...]`
*See [electron-packager](https://github.com/electron-userland/electron-packager) for more information about the arguments. The folder and name arguments are already filled in.
