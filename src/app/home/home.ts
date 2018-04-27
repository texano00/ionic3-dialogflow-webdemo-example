import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dialogFlowDemoUrl: string = 'https://console.dialogflow.com/api-client/demo/embedded/43c53c64-397f-4295-8724-823118e7fb5c';
  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  // Open dialogflow chatbot
  openChatBot(): void {
    const browser = this.iab.create(this.dialogFlowDemoUrl, '_blank', {
      location: 'no',
      zoom: 'no'
    });

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: '.b-agent-demo_powered_by{display:none}' });
    });
  }
}
