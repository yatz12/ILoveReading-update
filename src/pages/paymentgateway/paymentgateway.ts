import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{bigdata}from'../../app/models'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import{RightnavigationmenuscreenPage}from'../rightnavigationmenuscreen/rightnavigationmenuscreen'
import{ImagazinespagePage}from'../imagazinespage/imagazinespage'
/**
 * Generated class for the PaymentgatewayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentgateway',
  templateUrl: 'paymentgateway.html',
})
export class PaymentgatewayPage {
  actualamount
  product
  cardNumber
  month
  myYear
  CVV
  currency
  maxDate="2050"
  constructor(public alertCtrl:AlertController,public loadingCtrl:LoadingController,public security:SecurityProvider,public bdata:bigdata,public navCtrl: NavController, public navParams: NavParams) {
   this.actualamount=this.navParams.get('actualamount') 
   this.product=this.navParams.get('product')
   
  //       alert(JSON.stringify(this.bdata.userdata)) 
  //  alert(this.bdata.userdata.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentgatewayPage');
  }
  navigatetopayment()
  {
//     alert('product'+JSON.stringify(this.product))
//    alert('actualamount'+this.actualamount)
//    alert('cardnumber'+this.cardNumber)
//   alert('mymonth'+this.month)
// alert('year'+this.myYear)
// alert('cvv'+this.CVV)
// alert('userid'+localStorage['USERID'])
 
if(localStorage['country']=='Singapore')
{
this.currency='SGD'
}
else{
  this.currency='USD'
  // alert('usd'+this.currency)
}
let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
      .flatMap(() => this.security.payment(
this.product,
this.actualamount,
this.cardNumber,
this.month,
this.myYear,
this.CVV,
this.currency
     

      ))
     .subscribe(data=>{
       loading.dismiss()
        if(data.status==0){
       
       let alert = this.alertCtrl.create({
        title:data.message,

        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
            this.navCtrl.push(ImagazinespagePage)
            }
          }]
        
      });
      alert.present();
    }
    else{
      let alert = this.alertCtrl.create({
        title:data.message,

        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              this.navCtrl.push(ImagazinespagePage)
            }
          }]
        
      });
      alert.present();




    }


     })
 




}

}
