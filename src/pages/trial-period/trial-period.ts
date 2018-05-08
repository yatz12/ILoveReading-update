import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{SubscribeNowPage}from'../subscribe-now/subscribe-now'
import{AsksubscribePage}from'../asksubscribe/asksubscribe'
/**
 * Generated class for the TrialPeriodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trial-period',
  templateUrl: 'trial-period.html',
})
export class TrialPeriodPage {
  product
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product=this.navParams.get('product')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrialPeriodPage');
  }
  subscribenow(){
    this.navCtrl.push(AsksubscribePage,{product:this.product})
  }

}
