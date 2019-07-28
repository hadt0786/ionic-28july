import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBWWHxBaFpJxN9doSgH3ixI6r5XwgUTnag",
  authDomain: "ionic-28jul.firebaseapp.com",
  databaseURL: "https://ionic-28jul.firebaseio.com",
  projectId: "ionic-28jul",
  storageBucket: "",
  messagingSenderId: "987668034549",
  appId: "1:987668034549:web:56cfd108f6aa7b13"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
