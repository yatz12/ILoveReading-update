import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,AlertController } from 'ionic-angular';
import{SchooldetailsPage}from'../schooldetails/schooldetails'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import { FormControl, AbstractControl } from '@angular/forms'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the EnterdetailscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enterdetailscreen',
  templateUrl: 'enterdetailscreen.html',
})
export class EnterdetailscreenPage {
username
password 
validation:FormGroup
Email_Id
FirstName
LastName
PhoneNo
Age
student=null
gender=null
image='assets/imgs/001-social.png'
// image="assets/imgs/947351_918862994897394_861453034285558198_n.jpg"

signup_type

fblogin

inputtrue:boolean

googlelogin
constructor(public alertCtrl:AlertController,public filetransfer: FileTransfer,public actionsheetCtrl:ActionSheetController,private camera: Camera,public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {
  let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
var regex = /[0-9]|\./;
  this.username=this.navParams.get('username') 
   this.password=this.navParams.get('password') 
   this.signup_type=this.navParams.get('signup_type')
   this.fblogin=this.navParams.get('fblogin')
   this.googlelogin=this.navParams.get('googlelogin')
this.inputtrue=true


   this.validation=formbuilder.group({
    Email_Id:['',Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
    FirstName:['',Validators.compose([Validators.maxLength(20) ])],
    LastName:['',Validators.compose([Validators.maxLength(20)])] ,
    PhoneNo:['',Validators.compose([Validators.maxLength(10),Validators.pattern(regex), Validators.required])],
    Age:['',Validators.compose([Validators.maxLength(10), Validators.required])]
    })
  
 
    if(this.fblogin==1)
    {

      
      this.validation.controls['FirstName'].setValue(this.navParams.get('first_name'));
      this.validation.controls['LastName'].setValue(this.navParams.get('last_name'));
      this.validation.controls['Email_Id'].setValue(this.navParams.get('email'));
     this.image=this.navParams.get('picture')
    
      

    }

    if(this.googlelogin==1)
    {

      this.validation.controls['FirstName'].setValue(this.navParams.get('first_name'));
      this.validation.controls['Email_Id'].setValue(this.navParams.get('email'));
     this.image=this.navParams.get('picture')



    }
  
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterdetailscreenPage');
  }
  navigatetoschooldetails()
  {
    
if(this.gender!=null&&this.student!=null)
{


    this.navCtrl.push(SchooldetailsPage,{
      'username':this.username,
      'password':this.password,
 'Email_Id':this.validation.controls["Email_Id"].value,
'FirstName':this.validation.controls["FirstName"].value,
'LastName':this.validation.controls["LastName"].value,
'PhoneNo':this.validation.controls["PhoneNo"].value,
'Age':this.validation.controls["Age"].value,
'student':this.student,
'gender':this.gender,
'image':this.image,
'signup_type':this.signup_type
 })
}
else{
  if(this.gender==null)
  {
  

let alert=this.alertCtrl.create({
  title:'Please Choose the gender',
    
  buttons: ['Ok']
})
alert.present()
}
if(this.student==null)
  {
let alert=this.alertCtrl.create({
  title:'Please Choose the Proffesion',
    
  buttons: ['OK']
})
alert.present()
}
}
  }

  uploadpicture()
  {
    let actionsheet = this.actionsheetCtrl.create({
      title: 'Image Upload!',
      buttons: [{
        text: 'Upload From Gallery',
        handler: () => {
        // alert('hi')
   
    
    this.gallery()
        },
      }
        ,
      {
        text: 'Take A Snap',
        handler: () => {
        
         this.camera1()
        }
      }]

    })
    actionsheet.present(); 
  }

  gallery() {
    this.camera.getPicture({
      quality: 75,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.image=imageData
     

    }, (err) => {
    alert(err)
    })
  }



  camera1(){
  this.camera.getPicture({
    quality: 75,
    destinationType:this.camera.DestinationType.FILE_URI,
    sourceType:this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.JPEG,
    targetHeight: 500,
    targetWidth: 500,
    saveToPhotoAlbum: false,
    correctOrientation: true
  }).then((imageData) => {
    this.image=imageData

  
     
  }, (err) => {
    alert(err)
  })
}




  
}
