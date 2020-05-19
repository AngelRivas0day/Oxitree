import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'grid'
    },
    {
      title: "Planta un arbol",
      url: '/plant-a-tree',
      icon: "leaf"
    },
    {
      title: 'Huella de carbono',
      url: '/footprint',
      icon: 'finger-print'
    },
    {
      title: '¿Dónde conseguirlos?',
      url: '/find-them',
      icon: 'location'
    },
    {
      title: '¿Qué es Oxitree?',
      url: '/about-us',
      icon: 'information'
    }
  ];

  loggedIn: boolean = true;

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
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logOut(){
    this.loggedIn = false;
  }
}
