import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import{PaymentgatewayPage}from'../paymentgateway/paymentgateway'
import{SubscribeNowPage}from'../subscribe-now/subscribe-now'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import{RightnavigationmenuscreenPage}from'../rightnavigationmenuscreen/rightnavigationmenuscreen'
/**
 * Generated class for the AsksubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asksubscribe',
  templateUrl: 'asksubscribe.html',
})
export class AsksubscribePage {
  product
  ReciptNumber
  events
  constructor(public alertCtrl:AlertController,public security:SecurityProvider,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
 this.events='yes'
    this.product=this.navParams.get('product')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsksubscribePage');
  }
  mcqAnswer(event)
  {
    this.events=event
    // alert(event)

     if(this.events=='yes'){

     }
     else if(this.events=='no'){
      this.navCtrl.push(SubscribeNowPage,{product:this.product})
     }








  }
  Subscribe()
  {
    

if(this.events=='no')
{
  this.navCtrl.push(SubscribeNowPage,{product:this.product})
}
else{


















    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.reciptnumber(this.ReciptNumber))
         .subscribe(data=>{
           loading.dismiss()

if(data.status==0)
{
  let alert=this.alertCtrl.create({
    title: data.message,
    buttons: [{
      text:'Ok',
      role:'dismiss',
      handler:()=>{
      //  this.navCtrl.push(SubscribeNowPage,{product:this.product})
      }
    }]
   });
   alert.present();

}
else{
       let alert=this.alertCtrl.create({
           title: data.message,
           buttons: [{
             text:'Ok',
             role:'dismiss',
             handler:()=>{
              // this.navCtrl.push(SubscribeNowPage,{product:this.product})
              this.navCtrl.push(RightnavigationmenuscreenPage)
             }
           }]
          });
          alert.present();

             }     //  this.navCtrl.push(SubscribeNowPage,{product:this.product})
              
       
       
          })

        }


  }

}
