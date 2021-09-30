# g2i-trivia
A 10-question, true or false, trivia app made with React Native for G2i

## Prerequisites
- [Nodejs](https://nodejs.org/en/) (Best to use along with [yarn](https://yarnpkg.com) for this project)
- [Cocoapods](https://cocoapods.org)
- [Xcode](https://developer.apple.com/xcode/) > 12
- [Android Studio](https://developer.android.com/studio) and Android SDK
- [JDK > 11](https://www.oracle.com/java/technologies/downloads/)

## Base dependencies
- [axios](https://github.com/axios/axios) _for http calls to external urls_
- react-native-router-flux _for navigation between screens_
- react-native-safe-area-context _a ReactNative/Expo dependency under the hood_

## Code Structure
The main JavaScript part of this project is sub-divided into different folders for easy comprehension and for localization/separation of concerns.
The parent folder, located at the root of the ptoject is the `source` folder, further broken down into the following:
* components- _this folder comprises different components that are shared across the screens_
* screens
    - Home _this screen is the first screen you come in contact with. It comprises the instructions of the game and a summary of what the game is about._
    - Quiz _here all the questions are displayed in the requested sequence with buttons that enable you select an answer you feel is appropriate._
    - Results _this is the final screen. It displays the results of the quiz, showing the user's final score, the list of all the questions answered and an option to restart the quiz_
    - styles _all the stylesheets for the different screens are declared here_
* api- _the external call to get all the questions is made here_
* Router- _all the routes are declared in this file_

## Getting Started
- If you do not already have the project installed on your machine, run `git clone {url}` where url is the git url of this repository.
- cd into the project folder
- Run `yarn` to install the dependencies listed in `package.json`

### Android
- Open the android folder ({project_name || g2i-trivia}/android) in Android Studio in order to sync gradle files as well as set the SDK directory
- If you do not intend to use an Android emulator, ensure you have a 'developer-mode-enabled' device connected to your machine
- Run `yarn android` and Voila!

### iOS
- cd into the ios folder and run `pod install`
- if you intend to use Xcode, open the {project_name}.workspace file in Xcode and run on a simulator or you can just run from your terminal and there you GO! you can now play the trivia
