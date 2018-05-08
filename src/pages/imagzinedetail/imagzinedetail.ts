import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ActionSheetController,LoadingController } from 'ionic-angular';
import{ReactionsPage}from'../reactions/reactions'
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
import{SocialSharing}from'@ionic-native/social-sharing'
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'

/**
 * Generated class for the ImagzinedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagzinedetail',
  templateUrl: 'imagzinedetail.html',
})
export class ImagzinedetailPage {
  data
  htmledittexts
  i
  type
  constructor(public security:SecurityProvider,public loadingCtrl:LoadingController,public socialshare:SocialSharing,public actionCtrl:ActionSheetController,public santizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController) {
    window.addEventListener("contextmenu", (e) => { 
    console.log(e)
      e.preventDefault();
     });
  this.data=this.navParams.get("data")
  this.i=this.navParams.get('i')
  // alert(JSON.stringify(this.data))
  this.htmledittexts = santizer.bypassSecurityTrustHtml(this.data[this.i].content)
  
  
  // var videoFrame = document.querySelector("#content_data iframe");
  // if(videoFrame){
  //     videoFrame.style.width="100%";
  // }
  // var allImages = document.getElementById('content_data').getElementsByTagName('img');
  // for(var i = 0; i < allImages.length ; i++) {
  //   allImages[i].style.width = '100%';
  //   allImages[i].style.height = '100%';
  // }
setTimeout(()=>{
  this.like()
},50)
  }
//   showReactions(ev){
 
//     let reactions = this.popoverCtrl.create(ReactionsPage);

//     reactions.present({
//         ev: ev
//     });

// }

likes(){
    console.log("like");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagzinedetailPage');
  }
  showReactions(ev){
 
    let reactions = this.popoverCtrl.create(ReactionsPage);

    reactions.present({
        ev: ev
    });

}

like(){
   var allImages = document.getElementById('content_data').getElementsByTagName('img');
   for(var i = 0; i < allImages.length ; i++) {
     allImages[i].style.width = '100%';
     allImages[i].style.height = '100%';
   }
   var videoFrame = (<HTMLElement>document.querySelector("#content_data iframe"));
   if(videoFrame){
       videoFrame.style.width="100%";
   }
 
 
}

sharevia()
{

  console.log('hi')
let actionsheet=this.actionCtrl.create({
title: 'Share Content!',
    buttons: [{
      text: 'Share Via Twitter',
      handler: () => {
      // alert('hi')
 
      this.twitterShare()
 
      },
    }
      ,
    {
      text: 'Share Via Facebook',
      handler: () => {
      
        this.facebookShare()
      }}
    // },{
    //   text: 'Share Via Google+',
    //   handler: () => {
      
      
    //   }
    // }
  ]
})
actionsheet.present()

}
twitterShare(){
  this.socialshare.shareViaTwitter("Message via Twitter",null /*Image*/,this.data[this.i].share_url)
  .then(()=>{
      // alert("Success"); 
      this.type='twitter'
      this.ShareCount()
    },
    ()=>{
      this.ShareCount()
      this.type='twitter'
       alert("App is not available")
    })
}

facebookShare(){
  this.socialshare.shareViaFacebook("Message via Twitter",null /*Image*/,this.data[this.i].share_url)
  .then(()=>{
      // alert("Success");
      this.type='facebook'
      this.ShareCount()
    },
    ()=>{
      this.type='twitter'
      this.ShareCount()
       alert("App is not available")
    })
}

ShareCount()
{
  let loading=this.loadingCtrl.create({content:'Please Wait..'})
  Observable.of(loading).flatMap(loading=>loading.present())
        .flatMap(() => this.security.ShareCount(this.data[this.i].id,this.type))
       .subscribe(data=>{
         loading.dismiss()
         this.sharetotal()
       })

  
}
sharetotal(){
  let loading=this.loadingCtrl.create({content:'Please Wait..'})
  Observable.of(loading).flatMap(loading=>loading.present())
        .flatMap(() => this.security.Sharetotal(this.data[this.i].id))
       .subscribe(data=>{
         loading.dismiss()
         
       })
}

}
