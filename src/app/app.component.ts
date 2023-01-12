import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  /*constructor(
    private platform: Platform,
    private router: Router
  ) {
      this.platform.backButton.subscribeWithPriority(-1, () => {
          const url = this.router.url;
          console.log(url);
          if (url != 'tabs/tab1') {
              this.router.navigate(['tabs/tab1']);
          } else if (url == 'tabs/tab1') {
              App.exitApp();
              console.log('exit');
          }
      });
  }*/
  constructor(
    //private platform: Platform, private router: Router
    ) {
    /*this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Another handler was called!');
      const url = this.router.url;
      console.log(url);
      if (url != "tabs/tab1") {
          this.router.navigate(['tabs/tab1']);
      } 
      else if (url == "tabs/tab1") {
          App.exitApp();
          console.log('exit');
      }
    });
  
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Handler was called!');
  
      processNextHandler();
    });*/
  }
}
