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
     // alert(this.login.username);
     // alert(this.login.password);
      this.userData.login(this.login.username);
      this.auth.authenticateUser().subscribe
     (data => {
/*    this.userDetails = data;  
     alert("JSON data:"+JSON.stringify(data));
        //console.log("JSON data123456:"+data);
        var t=[];
        t=this.userDetails._body;
        console.log("hii->"+this.userDetails._body);
    console.log("Username:"+this.userDetails._body["Username"]);
    console.log("Password:"+(t[0].Password));*/
    console.log(data.json())
    this.userDetails=data.json();
    console.log("hii->"+this.userDetails[0].Username);
    console.log("hii->"+this.userDetails[0].Password);

    if((this.login.username==this.userDetails[0].Username)&&(this.login.password==this.userDetails[0].Password))
    {
      alert("Successfully logged in..");
      this.navCtrl.push(HomePage);
    }
    else{
      alert("Incorrect login credentials..");
    }
  })
    
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  asPublic(){    
    this.navCtrl.push(HomePage);
  }
}
