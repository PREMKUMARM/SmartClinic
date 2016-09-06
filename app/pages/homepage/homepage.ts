import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/homepage/homepage.html'
})
export class HomePage {
constructor(public navCtrl: NavController) { }


createToken() {
    this.navCtrl.push(TabsPage);
}

deleteToken() {
 
}

trackToken() {
    
}

}