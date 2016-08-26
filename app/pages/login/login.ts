import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../homepage/homepage';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
    //  alert(this.login.username);
      this.userData.login(this.login.username);
      alert("Successfully logged in..");
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  asPublic(){    
    this.navCtrl.push(HomePage);
  }
}
