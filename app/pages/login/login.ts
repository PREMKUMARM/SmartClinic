import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../homepage/homepage';
import { UserData } from '../../providers/user-data';
import { LoginService } from '../../providers/login-service/login-service';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;
  public userDetails: any;

  constructor(public navCtrl: NavController, public userData: UserData,public auth: LoginService) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
    //  alert(this.login.username);
      this.userData.login(this.login.username);
      this.auth.authenticateUser().subscribe
     (data => {
    this.userDetails = data;
    alert(JSON.stringify(this.userDetails));
  });
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
