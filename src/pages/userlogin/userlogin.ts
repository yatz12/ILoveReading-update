import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{DashboardPage}from'../dashboard/dashboard'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import{ImagazinespagePage}from'../imagazinespage/imagazinespage'
import{ bigdata}from'../../app/models'
import { HttpClient } from '@angular/common/http';
import{TrialPeriodPage}from'../trial-period/trial-period'
import{RightnavigationmenuscreenPage}from'../rightnavigationmenuscreen/rightnavigationmenuscreen'
/**
 * Generated class for the UserloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {
  username
  password
  userdata
  product=[]
  user_magazine

  private captchaPassed: boolean = false;
    private captchaResponse: string;
  constructor(private http: HttpClient, private zone: NgZone,public bdata:bigdata,private alertCtrl: AlertController,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams,public  loadingCtrl:LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }
  navigateToLogin(){
       let loading=this.loadingCtrl.create({content:'Please Wait..'})
   Observable.of(loading).flatMap(loading=>loading.present())
         .flatMap(() => this.security.login(this.username,this.password))
        .subscribe(data=>{
          loading.dismiss()
        if(data.status==0)
        {
          let alert = this.alertCtrl.create({
            title: data.message,

            buttons: ['Dismiss']
          });
          alert.present();
        }
        else{
       this.bdata.userdata=data.user
       this.user_magazine=data.user_magazine
localStorage['USERID']=data.user.id
localStorage['email']=data.user.email
localStorage['token']=data.token
console.log(localStorage['USERID'])
console.log(this.user_magazine)
       for(var i=0;i<this.user_magazine.length;i++){
       this.product.push({
        magazine_id:this.user_magazine[i].magazine_id
            }) 
            console.log('product'+JSON.stringify(this.product))
            

    }
console.log('hi'+this.bdata.userdata)



          let alert = this.alertCtrl.create({
            title:'SignIn Succesfully',

            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                  // this.navCtrl.setRoot(TrialPeriodPage,{userdata:this.userdata,product:this.product})

                  this.navCtrl.setRoot(ImagazinespagePage)

                }
              }]
          });
          alert.present();

          
        }



  })

  }
  captchaResolved(response: string): void {
 
    this.zone.run(() => {
        this.captchaPassed = true;
        this.captchaResponse = response;
    });

}
sendForm(): void {
 
  let data = {
      captchaResponse: this.captchaResponse
  };     

  this.http.post('http://localhost:8080/test', data).subscribe(res => {
      console.log(res);
  });

}
  forgot(){
    let alert = this.alertCtrl.create({
      title: 'Forget Password',
      inputs: [
        {
          name: 'Email',
          placeholder: 'Enter Email'
        }
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log(data.Email)
            let loading=this.loadingCtrl.create({content:'Please Wait..'})
            Observable.of(loading).flatMap(loading=>loading.present())
                  .flatMap(() => this.security.forgetpassword(data.Email))
                 .subscribe(data=>{
                   loading.dismiss()

              if(data.status==0)
              {
                this.forgetstatus(data.status)
              }

              else{
                this.forgetstatus(data.status)
              }


                 })





          }
        }
      ]
    });
    alert.present();
  }


  forgetstatus(id)
  {

 if(id==0)
 {
  let alert = this.alertCtrl.create({
    title:'Email does not exist',

    buttons: ['Dismiss']
  });
  alert.present();
 }
 else if(id==1){
  let alert = this.alertCtrl.create({
    title:'Password has been sent to your mail',

    buttons: ['Dismiss']
  });
  alert.present();
 }


  }

}
