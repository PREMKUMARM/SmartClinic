import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'build/pages/homepage/homepage.html'
})
export class HomePage {
constructor(public navCtrl: NavController,public userData: UserData) { }


createToken() {
    this.navCtrl.push(TabsPage);
}

deleteToken() {
 
}

trackToken() {
    
}
dismiss(){
this.userData.login("");
alert("Successfully logged out..")
this.navCtrl.push(LoginPage);
}

}