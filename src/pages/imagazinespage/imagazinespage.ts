import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ActionSheetController, ActionSheet} from 'ionic-angular';
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import{ImagzinedetailPage}from'../imagzinedetail/imagzinedetail'

/**
 * Generated class for the ImagazinespagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagazinespage',
  templateUrl: 'imagazinespage.html',
})
export class ImagazinespagePage {
  // daily_posts
  contents
  contentid
  constructor(public actionCtrl:ActionSheetController,public loadingCtrl:LoadingController,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams) {
 
    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.getContents())
         .subscribe(data=>{
           loading.dismiss()
           this.contents=data.contents
      
          })



//  this.daily_posts=this.navParams.get("daily_posts")
//  alert(JSON.stringify(this.daily_posts))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagazinespagePage');
  }
  views(i)
  {
    let loading=this.loadingCtrl.create({content:'Please Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.totalviews(i))
         .subscribe(data=>{
           loading.dismiss()
         
          })
  }
  readmore(i){
    this.contentid=this.contents[i].id
  alert(this.contentid)
this.navCtrl.push(ImagzinedetailPage,{data:this.contents,i:i})
this.views(this.contentid)
  }
 
}
