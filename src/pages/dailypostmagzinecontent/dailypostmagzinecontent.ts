import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Events,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
/**
 * Generated class for the DailypostmagzinecontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dailypostmagzinecontent',
  templateUrl: 'dailypostmagzinecontent.html',
})
export class DailypostmagzinecontentPage {
  daily_posts
  constructor(public security:SecurityProvider,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public events:Events) {
    // alert(localStorage['type'])
    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.dailypost(localStorage['type']))
         .subscribe(data=>{
           loading.dismiss()
           this.daily_posts=data.daily_posts
           
         })

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailypostmagzinecontentPage');
  }

}
