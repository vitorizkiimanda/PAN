import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-out-create',
  templateUrl: 'out-create.html',
})
export class OutCreatePage {

  date:any;
  value:any;
  paket:any;
  explanation:any;

  submitted : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = new Date().toISOString();
    this.date = this.date.substr(0, this.date.indexOf('T'));

    this.paket="paket1"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutCreatePage');
  }

  submit(){
    this.submitted = true;
    if(this.value)
      this.navCtrl.pop();
  }

}
