import { Component } from '@angular/core';

import { NavController,LoadingController,ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public userData: UserData,public auth: LoginService,public loadingCtrl: LoadingController,public toastCtrl: ToastController) { }
 
   

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      
     // alert(this.login.username);
     // alert(this.login.password);
      this.userData.login(this.login.username);
      //For loader implementation
       let loader = this.loadingCtrl.create({
      content: "Logging in...",      
      dismissOnPageChange: true
       })
       //For toaster implementaion
        let toast = this.toastCtrl.create({
      message: 'Successfully logged in',
      duration: 1500
    });
   
      loader.present();
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
      loader.dismiss();
      toast.present();
      //alert("Successfully logged in..");
      this.navCtrl.push(HomePage);
    }
    else{
       loader.dismiss();
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
