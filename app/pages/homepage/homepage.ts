import { Component } from '@angular/core';
import { NavController,LoadingController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'build/pages/homepage/homepage.html'
})
export class HomePage {
constructor(public navCtrl: NavController,public userData: UserData,public loadingCtrl: LoadingController,public toastCtrl: ToastController) { }


createToken() {
    this.navCtrl.push(TabsPage);
}

deleteToken() {
 
}

trackToken() {
    
}
dismiss(){
   let loader1 = this.loadingCtrl.create({
      content: "Logging out...",
      duration: 3000,      
      dismissOnPageChange: true
       });
       //For toaster implementaion
        let toast1 = this.toastCtrl.create({
      message: 'Successfully logged out',
      duration: 1500
    });
this.userData.login("");
//alert("Successfully logged out..")
 loader1.present();
this.navCtrl.push(LoginPage);
 toast1.present();
}

}