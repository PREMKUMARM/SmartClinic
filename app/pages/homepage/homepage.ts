import { Component } from '@angular/core';


import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/homepage/homepage.html'
})
export class HomePage {
mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}