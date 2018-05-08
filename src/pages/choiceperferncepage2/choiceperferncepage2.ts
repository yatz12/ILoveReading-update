import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{ChoiceofperferencePage}from'../choiceofperference/choiceofperference'
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
/**
 * Generated class for the Choiceperferncepage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choiceperferncepage2',
  templateUrl: 'choiceperferncepage2.html',
})
export class Choiceperferncepage2Page {
  sciselection:boolean
  artsselection:boolean
  sportsselection:boolean
  travelselection:boolean
  jokesselection:boolean

  content_list
selectnumber:number


accepted
signupdata
user_relation
user_content_nature=[]

content_id
user_magazine

buttonDisabled
  constructor(public security:SecurityProvider,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {

this.sciselection=false
this.artsselection=false
this.sportsselection=false
this.travelselection=false
this.jokesselection=false

this.accepted=this.navParams.get('accepted')
this.signupdata=this.navParams.get('signupdata')
this.user_relation=this.navParams.get('user_relation')
this.user_magazine=this.navParams.get('user_magazine')

this.buttonDisabled=true

  }

  ionViewDidLoad() {
    let loading=this.loadingCtrl.create({content:'wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.contentNatureList())
    .subscribe(data=>{
      loading.dismiss()
      console.log(data)
      this.content_list=data.content_list
        


    })

  }
  contentid(id)
  {
    this.content_id=id+1

    this.user_content_nature.push({
      content_id:this.content_id
    })
    this.buttonDisabled=false

  }
selectintrest(i)
{

// this.selectnumber=i+1
// for(var j=0;j<this.content_list.length;j++)
// {
//  this.selectnumber =this.content_list[j].id

// }


// for(var j=0;j<this.content_list.length;j++)
// {

// if(x==j)
// {
//   this.artsselection=true
// }

// }
if(i==0)
{
this.sciselection=true
}
if(i==1)
{
this.sciselection=true
}
else if(i==2)
{
this.artsselection=true
}
else if(i==3)
{
  this.sportsselection=true
}
else if(i==4)
{
  this.travelselection=true
}
// else if(id==5)
// {
//   this.jokesselection=true
// }
}
next(){
this.navCtrl.setRoot(ChoiceofperferencePage,{
  accepted:this.accepted,
  signupdata:this.signupdata,
  user_relation:this.user_relation,
  user_content_nature:this.user_content_nature,
  user_magazine:this.user_magazine
})
}
}
