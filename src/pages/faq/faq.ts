import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  htmledittexts
  constructor(public santizer: DomSanitizer,public loadingCtrl:LoadingController,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams) {
    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.FAQ())
         .subscribe(data=>{
           loading.dismiss()
           this.htmledittexts = santizer.bypassSecurityTrustHtml(data.faq.faq)
         })
 
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
