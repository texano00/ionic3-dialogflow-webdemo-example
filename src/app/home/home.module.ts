import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  providers: [InAppBrowser]
})
export class HomePageModule {}
