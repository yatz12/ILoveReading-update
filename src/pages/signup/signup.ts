import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{UserloginPage}from'../userlogin/userlogin'
import{EnterdetailscreenPage}from'../enterdetailscreen/enterdetailscreen'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import { FormControl, AbstractControl } from '@angular/forms'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  username
  password
  ValidateForm: FormGroup

  signup_type=4
  constructor(public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    
    
    this.ValidateForm=formbuilder.group({
    username:['',Validators.compose([Validators.maxLength(10), Validators.required])],
    password:['',Validators.compose([Validators.maxLength(30), Validators.pattern(passwordRegex), Validators.required])]
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  navigateToLogin(){
  
  
  this.navCtrl.setRoot(EnterdetailscreenPage,{signup_type:this.signup_type,username:this.ValidateForm.controls["username"].value,password:this.ValidateForm.controls["password"].value})
  
  
}
}
