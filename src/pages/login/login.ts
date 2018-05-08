import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{UserloginPage}from'../userlogin/userlogin'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import{EnterdetailscreenPage}from'../enterdetailscreen/enterdetailscreen'



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;
  signup_type=2
  constructor(private googlePlus: GooglePlus,public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  navigatetoemail(){
    this.navCtrl.setRoot(UserloginPage)
  }
  loginWithFB() {
    var fblogin=1
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      alert('res'+response)
      this.facebook.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'],last_name:profile['last_name'] ,first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      // alert('--'+JSON.stringify(this.userData))
      // alert(profile['last_name'])
      this.navCtrl.setRoot(EnterdetailscreenPage,{
        signup_type:this.signup_type,
        email: profile['email'],
        first_name:profile['first_name'],
        last_name:profile['last_name'],
        picture:this.userData.picture,
        fblogin:fblogin
      })
      });
    }) .catch((e) =>{
    //  alert('error'+JSON.stringify(e))
    alert('Test Developement Mode Allow only Admin login')
    });
  }

  loginWithGoogle()
  {
  //   this.googlePlus.login({})
  // .then((res) => {
  //  alert('response'+res)
  //  alert('response'+JSON.stringify(res))
  // })
  // .catch((err) =>{
  //   alert('ERROR'+err)
  //   alert('ERROR'+JSON.stringify(err))
  // });
  var googlelogin=1
  this.googlePlus.login({
    'webClientId': '995709379088-5k30oe3tnfvlv07h5jlmgdrn4fkojo3g.apps.googleusercontent.com'
  }).then((res) => {
     alert('response'+res)
     alert('response'+JSON.stringify(res))
     alert('response'+res.givenName)
     alert('response'+res.imageUrl)
     alert('response'+res.email)
     this.navCtrl.setRoot(EnterdetailscreenPage,{
      signup_type:this.signup_type,
      googlelogin:googlelogin,
      first_name:res.givenName,
      picture:res.imageUrl,
      email:res.email
      
       })
    })
    .catch((err) =>{
      // alert('ERROR'+err)
      alert('Test Developement Mode Allow only Admin login')
    });
  }
  testlogin()
  {
    this.navCtrl.setRoot(UserloginPage,{
      signup_type:this.signup_type
    })
  }
}
