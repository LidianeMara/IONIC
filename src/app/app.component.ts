import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/* ADD ROUTER FIRST PAGE  */
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
        this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      /* APP FIRST PAGE  */
     this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
