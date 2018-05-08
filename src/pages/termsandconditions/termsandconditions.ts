import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DashboardPage}from'../dashboard/dashboard'

/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termsandconditions',
  templateUrl: 'termsandconditions.html',
})
export class TermsandconditionsPage {
  signupdata
  user_relation
  accepted
  buttonDisabled
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.signupdata=this.navParams.get('signupdata')
this.user_relation=this.navParams.get('user_relation')
this.buttonDisabled = true;
// alert(JSON.stringify(this.user_relation))
// alert(this.accepted)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsandconditionsPage');
  }
  validatecheck()
  {
    if(this.accepted==true)
    {
 this.buttonDisabled=false

    }
  }
  navigatetodashboard()
  {

    this.navCtrl.setRoot(DashboardPage,{accepted:this.accepted,signupdata:this.signupdata,user_relation:this.user_relation})


  }
}
