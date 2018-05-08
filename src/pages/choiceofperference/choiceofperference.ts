import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{TrialPeriodPage}from'../trial-period/trial-period'
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
import { Jsonp } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import{UserloginPage}from'../userlogin/userlogin'
/**
 * Generated class for the ChoiceofperferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choiceofperference',
  templateUrl: 'choiceofperference.html',
})
export class ChoiceofperferencePage {
  narrateselection:boolean
  personalselection:boolean
  expositoryselection:boolean
  hybridselection:boolean
  desciptiveselection:boolean
  argumentativeselection:boolean
  situationselection:boolean


contentbox


accepted
signupdata
user_relation
user_content_nature
user_magazine
user_text_type=[]

userid

buttonDisabled
product=[]
  constructor(public filetransfer: FileTransfer,public alertCtrl:AlertController,public security:SecurityProvider,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  
    this.accepted=this.navParams.get('accepted')
    this.signupdata=this.navParams.get('signupdata')
    this.user_relation=this.navParams.get('user_relation')
this.user_content_nature=this.navParams.get('user_content_nature')
  this.user_magazine=this.navParams.get('user_magazine')
    this.narrateselection=false
    this.personalselection=false
    this.expositoryselection=false
    this.hybridselection=false
    this.desciptiveselection=false
    this.argumentativeselection=false
    this.situationselection=false

    this.buttonDisabled=true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoiceofperferencePage');
let loading=this.loadingCtrl.create({content:'wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
        .flatMap(() => this.security.contentNatureListSecond())
       .subscribe(data=>{
         loading.dismiss()
     this.contentbox=data.text_type_list
      
            
             })


  }
  textid(i)
  {
    
    var textid=i+1
    this.user_text_type.push({
      text_id:textid
    }) 
     
    this.buttonDisabled=false
  }
  selctionbox(id)
  {
    if(id==1)
    {
this.narrateselection=true
    }
    else if(id==2)
    {
this.personalselection=true
    }
    else if(id==3)
    {
this.expositoryselection=true
    }
    else if(id==4)
    {
      this.hybridselection=true
    }
    else if(id==5)
    {
      this.desciptiveselection=true
    }
    else if(id==6)
    {
      this.argumentativeselection=true
    }
    else if(id==7)
    {
      this.situationselection=true
    }


  }
  next()
  {
  //  alert(this.signupdata[0].signup_type)
    
      
     if(this.signupdata[0].signup_type==4)
     {
      var  user_image="http://88.198.133.25/ILR_dev/uploads/Webuser_profilepic/197790b8aeddf696e5376adf97953bfc.jpg"
      var terms_checked=1
      var content_type_id=0
      var is_subscribed=0
      var subscription_id=0
      let loading=this.loadingCtrl.create({content:'Please Wait..'})
      Observable.of(loading).flatMap(loading=>loading.present())
            .flatMap(() => this.security.signup(
              this.signupdata[0].student,
              this.signupdata[0].signup_type,
             this.signupdata[0].username,
             this.signupdata[0].password,
             this.signupdata[0].FirstName,
             this.signupdata[0].LastName,
             this.signupdata[0].Email_Id,
             this.signupdata[0].PhoneNo,
             this.signupdata[0].Age,
              this.signupdata[0].gender,
              this.signupdata[0].image,
               this.signupdata[0].SchoolName,
              this.signupdata[0].SchoolAddress,
              this.signupdata[0].City,
              this.signupdata[0].State,
              this.signupdata[0].Country,
              this.signupdata[0].StudentDetails,
             terms_checked,
              content_type_id,
              is_subscribed,
            subscription_id,
             this.user_content_nature,
             this.user_magazine,
             this.user_relation,
             this.user_text_type 
             ))
           .subscribe(data=>{
             loading.dismiss()
             if(data.status==0){
             let alert=this.alertCtrl.create({
              title:data.errorData[0],
    
              buttons: ['Dismiss']
             })
             alert.present()
             }
             else
             {
              loading.dismiss()
                    this.userid=data.userId
                    for(var i=0;i<this.user_magazine.length;i++){
                      this.product.push({
                       magazine_id:this.user_magazine[i].magazine_id
                           }) 
                           console.log('product'+JSON.stringify(this.product))
                          
               
                   }
              let alert=this.alertCtrl.create({
                title:data.message,
      
                buttons: [
                  {
                    text: 'OK',
                    role: 'cancel',
                    handler: () => {
                      // this.fileupload()
                      this.navCtrl.setRoot(TrialPeriodPage,{product:this.product})
                    }
                  }]
               })
               alert.present()
             
             }
    
     })
     }
     
     else if(this.signupdata[0].signup_type==2)
     {
      var  user_image="http://88.198.133.25/ILR_dev/uploads/Webuser_profilepic/197790b8aeddf696e5376adf97953bfc.jpg"
      var terms_checked=1
      var content_type_id=0
      var is_subscribed=0
      var subscription_id=0
      let loading=this.loadingCtrl.create({content:'Please Wait..'})
      Observable.of(loading).flatMap(loading=>loading.present())
            .flatMap(() => this.security.socialsignup(
              this.signupdata[0].student,
              this.signupdata[0].signup_type,
          
             this.signupdata[0].FirstName,
             this.signupdata[0].LastName,
             this.signupdata[0].Email_Id,
            
             this.signupdata[0].PhoneNo,
             this.signupdata[0].Age,
              this.signupdata[0].gender,
              this.signupdata[0].image,
               this.signupdata[0].SchoolName,
              this.signupdata[0].SchoolAddress,
              this.signupdata[0].City,
              this.signupdata[0].State,
              this.signupdata[0].Country,
              this.signupdata[0].StudentDetails,
             terms_checked,
              content_type_id,
              is_subscribed,
            subscription_id,
             this.user_content_nature,
             this.user_magazine,
             this.user_relation,
             this.user_text_type 
    
    
    
              
              
              
              ))
           .subscribe(data=>{
             loading.dismiss()
             if(data.status==0){
             let alert=this.alertCtrl.create({
              title:data.errorData[0],
    
              buttons: ['Dismiss']
             })
             alert.present()
             }
             else
             {
              for(var i=0;i<this.user_magazine.length;i++){
                this.product.push({
                 magazine_id:this.user_magazine[i].magazine_id
                     }) 
                     console.log('product'+JSON.stringify(this.product))
                     
         
             }
                    this.userid=data.userId
    
              let alert=this.alertCtrl.create({
                title:data.message,
      
                buttons: [
                  {
                    text: 'OK',
                    role: 'cancel',
                    handler: () => {
                      // this.fileupload()
                      this.navCtrl.setRoot(TrialPeriodPage,{product:this.product})
                    }
                  }]
               })
               alert.present()
             
             }
    
     })
     }



 
  }
  fileupload()
  {
    // alert(this.signupdata[0].image)
    const filetransfers: FileTransferObject = this.filetransfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'filename.jpg',
      chunkedMode: false,
      // httpMethod: 'Post',
      mimeType: "multipart/form-data",
      params: {
        user_id: this.userid
      }
      
    }
  
    
    filetransfers.upload(this.signupdata[0].image,'http://88.198.133.25/ILR_dev/admin/userapi/imageUpload', options)
      .then((data) => {
  
      // alert(JSON.stringify(data))
      this.navCtrl.setRoot(UserloginPage)
         
      }, (err) => {
       alert('error'+JSON.stringify(err))    
      })
  }
  testnext()
  {
    this.navCtrl.setRoot(TrialPeriodPage)
  }



}
