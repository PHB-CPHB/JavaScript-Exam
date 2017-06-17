# Period-4 Hybrid App Development

### Explain the concept of: Hybrid Mobile App Development
[4.1](#Explain-the-concept-of:-Hybrid-Mobile-App-Development)
- Native Apps are specific to a given mobile platform (iOS or Android) using the development tools and language that the respective platform supports. Native apps look and perform the best
- HTML5 Apps use standard web technologies, like JavaScript and CSS to create cross platform mobile applications. Limitations from this strategy is, session management, no secure offline storage, no access to native device functionality (camera, calendar etc.)
- Hybrid Apps make it possible to embed HTML5 apps inside a thin native container, combining the best (and worst) elements of Native and HTML5 apps.

To get native-like functionality in fake HTML apps, we can use a tool such as Cordova.

Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone.[4] It enables wrapping up of CSS, HTML, and JavaScript code depending upon the platform of the device. It extends the features of HTML and JavaScript to work with the device. The resulting applications are hybrid, meaning that they are neither truly native mobile application (because all layout rendering is done via Web views instead of the platform's native UI framework) nor purely Web-based (because they are not just Web apps, but are packaged as apps for distribution and have access to native device APIs).

>## Explain the Pros & Cons of using Hybrid Mobile App Development compared to Native App Development

Pros:
- Much cheaper than Native apps which makes it good for startups.
- It can be used cross platformsn like IOS and android.
- It is faster to develop and make a demo of the app.
- It has better maintainability
- Works great for simple data-driven applications.

Cons:
- Not as fast or smooth as Native apps.
- Performance isn't as good as Native, so it could suffer more.
- Possibly miss out on extra native apis that are not supported by Cordova
- Doesn't utilize native features (like the camera) as good as native applications.
- Angular.js has a steep learning curve.
- Does not support newly arrived features as quickly as native.

>## Explain about the "building blocks" involved in an Ionic Hybrid Application

- AngularJS framework on javascript for front-end presentation layer.
- Cordova/Ionic for communication with phone hardware and a test server (Ionic serve).
- HTML5 & Sass for styling and display of components.
- ADB(Android Debug Bridge) to communicate with phone and enables debugging.
It’s a “bridge” for developers to work out bugs in their Android applications. This is done by connecting a device that runs the software through a PC, and feeding it terminal commands. ADB lets you modify your device (or device’s software) via a PC command line.
- Node.js to bring all the code together using middleware, ionic, express and so on.

So basically Ionic apps are made of high-level building blocks called components. Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards. Although components are primarily Angular directives with HTML and CSS, some components also include more advanced JavaScript functionality.

>## Explain and demonstrate ways to debug Hybrid Mobile Applications Running on a real device

With Ionic you can debug your app through your browser using the sockets and ports that the phone uses to communicate with the browser, this enbables you to see the console and debug live.

If you use: "ionic run android" or if you have an emulater use: "ionic emulate android" to start up an emulater of an android phone.
This will still be able to track the amulater phone on the inspect webpage.

Open Chrome and navigate to: "chrome://inspect/#devices"

>## Explain how and why, it is possible for a Hybrid Application to access native phone devices like location, calendar etc. 

Cordova or PhoneGap act as a common interface that can be used to expose native functionality.

Accessing native phone features like location and the calendar is possible through the use of Cordova plugins.

>## Explain, using an example you have implemented, the "fundamentals" of an Ionic application.

Ionic uses AngularJS and Cordova to create Hybrid Apps, for the styling of this app Ionic uses CSS and JavaScript like BootStrap does. When creating the HTML for the app, Ionic specific directives is used like this.

```
  <ion-side-menu side="left">
    <ion-header-bar class="bar-dark">
      <h1 class="title">Projects</h1>
      <button class="button button-icon ion-plus" ng-click="newProject()">
      </button>
    </ion-header-bar>
    <ion-content scroll="false">
      <ion-list>
        <ion-item ng-repeat="project in projects" ng-click="selectProject(project, $index)" ng-class="{active: activeProject == project}">
          {{project.title}}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu>
```
For the full example on the HTML code look here: [HTMLIon](https://github.com/KongBoje/Hand-in-4-Ionic/blob/master/IonicApp/todo/www/index.html)

>## Explain using an example how your Hybrid Application communicates with a backend 
#### Here we use this example: [IonicBackend](https://github.com/KongBoje/Hand-in-4-Ionic/tree/master/BackendIonic)
To get a hybrid application to communicate with a back-end you first need a noSQL database. In our case we use mongodb for that, so we first install mongodb. When that is done you run mongodb by writing mongod.

Now that you have a database you run the code as shown in this example: [DBConnection](https://github.com/KongBoje/Hand-in-4-Ionic/blob/master/BackendIonic/bin/www)

The code points to a collection in the database and what port to listen on.

#### Running on the server or an emulater/device
When you run the application on the browser you write "ionic serve", this means a local web server is started up and that
your browser is opened to point at the local server address.

This starts you off looking at your app loaded in a browser on your computer with the address http://localhost:8100 (if you chose localhost).

When running on an emulater or a device you type "ionic emulate android" for the emulator or "ionic run" for a device.
This brings you over to the index.html front-end view.

#### data setup
When you run it first time it's empty, so to know that a db is connected and that the backend communicates, we can insert some test data like this: [Test Data](https://github.com/KongBoje/Hand-in-4-Ionic/blob/master/BackendIonic/utils/dataSetup.js)
This will show the test data on the started webpage.