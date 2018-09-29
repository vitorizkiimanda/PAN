import { Component } from '@angular/core';
import {  NavController, NavParams, App } from 'ionic-angular';
import { OutCreatePage } from '../out-create/out-create';

@Component({
  selector: 'page-out',
  templateUrl: 'out.html',
})
export class OutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutPage');
  }

  gotoOutCreate(){
    this.app.getRootNav().push(OutCreatePage);
  }

}
