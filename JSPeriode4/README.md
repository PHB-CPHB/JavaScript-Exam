# Period-4 Hybrid App Development

###Explain the concept of: Hybrid Mobile App Development
- Native Apps
    - This is for a specific platform
- HTML5 Apps
    - This is standard web apps to create cross platform applications.
    - HTML5 has limited functionality.
- Hybrid Apps
  - This is combinding the best and worst for Native and HTML5 apps.
  - This has all the features from native apps but has slow proformence from HTML5

This picture shows the feature list.
[Ionic-apps](https://github.com/philliphb/JavaScript-Exam/blob/master/JSPeriode4/Ionic-apps.png)

### Explain the Pros & Cons of using Hybrid Mobile App Development compared to Native App Development

- Pros:
  - Can run on cross platforms so therefore its cheaper.
  - Eaiser to get developerts for since its in javascript.
  - Eaiser to maintain since its one app.

- Cons:
  - Not as fast or smooth as Native apps.
  - Possibly miss out on extra native apis that are not supported by Cordova.
  - Does not support newly arrived features as quickly as native.
  - Expensive.

### Explain about the "building blocks" involved in an Ionic Hybrid Application

- Cordova/Ionic for communication with the phones hardware.

- AngularJS for the presentation.

- HTML5/Sass for styling and displaying components.

- ADB, Debugging tool.

- Node.js, brings it all together.

### Explain and demonstrate ways to debug Hybrid Mobile Applications Running on a real device

With Ionic you can debug your app through your browser using the sockets and ports that the phone uses to communicate with the browser, this enbables you to see the console and debug live.

If you use: "ionic run android" or if you have an emulater use: "ionic emulate android" to start up an emulater of an android phone.
This will still be able to track the emulater phone on the inspect webpage.

Open Chrome and navigate to: "chrome://inspect/#devices"

### Explain how and why, it is possible for a Hybrid Application to access native phone devices like location, calendar etc. 

- Cordova/PhoneGap is a framework which have apis that can access different features on the phone.

>## Explain, using an example you have implemented, the "fundamentals" of an Ionic application.

Ionic uses AngularJS and Cordova to create Hybrid Apps, for the styling of this app Ionic uses CSS and JavaScript like BootStrap does. When creating the HTML for the app, Ionic specific directives is used like this.

INSERT OWN EXAMPLE
```javascript
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

### Explain using an example how your Hybrid Application communicates with a backend 
- Here we use this example: [IonicBackend](https://github.com/KongBoje/Hand-in-4-Ionic/tree/master/BackendIonic)
To get a hybrid application to communicate with a back-end you first need a noSQL database. In our case we use mongodb for that, so we first install mongodb. When that is done you run mongodb by writing mongod.

Now that you have a database you run the code as shown in this example: [DBConnection](https://github.com/KongBoje/Hand-in-4-Ionic/blob/master/BackendIonic/bin/www)

The code points to a collection in the database and what port to listen on.

- Running on the server or an emulater/device
When you run the application on the browser you write "ionic serve", this means a local web server is started up and that
your browser is opened to point at the local server address.

This starts you off looking at your app loaded in a browser on your computer with the address http://localhost:8100 (if you chose localhost).

When running on an emulater or a device you type "ionic emulate android" for the emulator or "ionic run" for a device.
This brings you over to the index.html front-end view.

- Data setup
When you run it first time it's empty, so to know that a db is connected and that the backend communicates, we can insert some test data like this: [Test Data](https://github.com/KongBoje/Hand-in-4-Ionic/blob/master/BackendIonic/utils/dataSetup.js)
This will show the test data on the started webpage.