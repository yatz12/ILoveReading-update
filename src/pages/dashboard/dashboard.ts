import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Choiceperferncepage2Page}from'../choiceperferncepage2/choiceperferncepage2'
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
import{bigdata}from'../../app/models'
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  magazine_list
  accepted
  signupdata
  user_relation
  user_magazine=[]
  magazine_name=[]
  buttonDisabled
  magazine_name1=[]
  constructor(public bigdata:bigdata,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
 this.accepted=this.navParams.get("accepted")
this.signupdata=this.navParams.get("signupdata")
 this.user_relation=this.navParams.get("user_relation")
this.buttonDisabled=true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
     let loading=this.loadingCtrl.create({
       content:'wait..'
     })
     Observable.of(loading).flatMap(loading=>loading.present())
     .flatMap(()=>this.security.magzinelist())
     .subscribe(data=>{
       loading.dismiss()
       this.magazine_list=data.magazine_list
       console.log(data)
     })


  }

  tapcard(id)
  {
var magazine_id=id+1
 var x=document.getElementById('x_'+id)
 x.style.border="2px solid red"

 this.user_magazine.push({
  magazine_id:magazine_id
 })

//  var str=str.toUpperCase(this.magazine_list[id].name)
this.magazine_name.push({
  name:this.magazine_list[id].name
})

this.bigdata.magazine_name=this.magazine_name

var str=this.magazine_list[id].name
var res=str.toUpperCase()
this.magazine_name1.push({
  name:res
})


localStorage["magzine_name"]=JSON.stringify(this.magazine_name1)
this.buttonDisabled=false



  }
  next()
  {
this.navCtrl.setRoot(Choiceperferncepage2Page,{accepted:this.accepted,
  signupdata:this.signupdata,
  user_relation:this.user_relation,
  user_magazine:this.user_magazine
})
  }
}
