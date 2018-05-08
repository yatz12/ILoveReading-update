import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController} from 'ionic-angular';
import{AsksubscribePage}from'../asksubscribe/asksubscribe'
import{PaymentgatewayPage}from'../paymentgateway/paymentgateway'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
/**
 * Generated class for the SubscribeNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscribe-now',
  templateUrl: 'subscribe-now.html',
})
export class SubscribeNowPage {
magzine_name=[]
Print
Digital
PrintorDigital
id
event

actualamount
product
  constructor(public loadingCtrl:LoadingController,public security:SecurityProvider,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  
  this.product=this.navParams.get('product')
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribeNowPage');
  }
  SelectSelction(i)
  {
   this.id=i
    alert(i)  
  }
  mcqAnswer(event)
  {
    this.event=event
  }
  subscribe()
  {
    
    
// alert(localStorage["country"])
    this.magzine_name=JSON.parse(localStorage['magzine_name'])

// alert(JSON.stringify(this.magzine_name))
// alert(this.event)

    let prompt = this.alertCtrl.create({
      title: 'Choose Subscription',
      message: 'Select option ',
      inputs : [
      {
          type:'radio',
          label:'Yearly',
          value:'year'
      },
      {
          type:'radio',
          label:'Monthly',
          value:'month'
      }],
      buttons : [
     
      {
          text: "Submit",
          handler: data => {
          console.log(data);
          this.getmeamount(data)
          }
      }]});
      prompt.present();
// this.navCtrl.push(PaymentgatewayPage)
  }
  getmeamount(data)
  {

    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.getmeamount(data,this.event,this.magzine_name))
         .subscribe(data=>{
           loading.dismiss()

      console.log('data'+data.amount)
if(data.status==1)
{

        this.actualamount=data.amount
 
      this.showtheamount(this.actualamount)  

}
    })




  }

  showtheamount(actualamount)
  {

    let alert = this.alertCtrl.create({
      title: 'Your Amount is',
      subTitle: this.actualamount,
      buttons: [ {
        text: "OK",
        handler: data => {
        console.log(data);
        this.navCtrl.push(PaymentgatewayPage,{actualamount:this.actualamount,product:this.product})
        }
    }]
    });
    alert.present();
    
  }





}
