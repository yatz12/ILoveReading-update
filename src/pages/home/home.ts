import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import{UserloginPage}from'../userlogin/userlogin'
import{SignupPage}from'../signup/signup'
import{LoginPage}from'../login/login'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public http: Http,public  loadingCtrl:LoadingController,public navCtrl: NavController,public security:SecurityProvider) {

  }
  navigatetologin()
  {
this.navCtrl.setRoot(LoginPage)
  }
  navigatetoSignup(){
this.navCtrl.setRoot(SignupPage)


//   let loading=this.loadingCtrl.create({content:'Please Wait..'})
//   Observable.of(loading).flatMap(loading=>loading.present())
//         .flatMap(() => this.security.testsignup())
//        .subscribe(data=>{
//          loading.dismiss()
//  })


            }

}
