import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{DashboardPage}from'../dashboard/dashboard'
import{TermsandconditionsPage}from'../termsandconditions/termsandconditions'
import { empty } from 'rxjs/observable/empty';
/**
 * Generated class for the ChilddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childdetail',
  templateUrl: 'childdetail.html',
})
export class ChilddetailPage {
  addparents:boolean
  sibilings:boolean
  addrelation1:boolean
  addrelation2:boolean
  count=0
  Email_Id
  FirstName
  LastName
  PhoneNo 
  Age 
  student
  gender
  SchoolName
  SchoolAddress
  City
  State
  Country



  StudentDetails


  user_relation=[]
  Name=null
  Relation=null
  Name1=null
  Relation1=null
  Name2=null
  Relation2=null
  Name3=null
  Relation3=null
  signupdata=[]
  username
  password
  image

  signup_type
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  this.addparents=false
  this.sibilings=false
  this.addrelation1=false
  this.addrelation2=false

  this.username=this.navParams.get("username")
  this.password=this.navParams.get("password")

 this.FirstName=this.navParams.get("FirstName")
 this.Email_Id=this.navParams.get("Email_Id")
 this.LastName=this.navParams.get("LastName")
 this.PhoneNo=this.navParams.get("PhoneNo")
 this.Age=this.navParams.get("Age")
 this.student=this.navParams.get("student")
 this.gender=this.navParams.get("gender")
 this.SchoolName=this.navParams.get("SchoolName")

 this.SchoolAddress=this.navParams.get("SchoolAddress")
 this.City=this.navParams.get("City")
 this.State=this.navParams.get("State")

 this.Country=this.navParams.get("Country")

this.image=this.navParams.get('image')

this.signup_type=this.navParams.get('signup_type')



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChilddetailPage');
  }
  navigatetodashboard()
  {





    if(this.Name==null||this.Relation==null)
    {

    }
    else{
     this.user_relation.push({name:this.Name,relation:this.Relation}) 
    }

if(this.Name1==null||this.Relation1==null)
{

}
else
{
  this.user_relation.push({name:this.Name1,relation:this.Relation1})
}
if(this.Name2==null||this.Relation2==null){

}
else{
  this.user_relation.push({name:this.Name2,relation:this.Relation2})
}


if(this.Name3==null||this.Relation3==null){

}
else{
  this.user_relation.push({name:this.Name3,relation:this.Relation3})
}

     
  
  this.signupdata.push({'FirstName':this.FirstName,
  'Email_Id':this.Email_Id,
'LastName':this.LastName,
'PhoneNo':this.PhoneNo,
'Age':this.Age,
'student':this.student,
'gender':this.gender,
'SchoolName':this.SchoolName,
'SchoolAddress':this.SchoolAddress,
'City':this.City,
'Country':this.Country,
'StudentDetails':this.StudentDetails,
'username':this.username,
'password':this.password,
'State':this.State,
'image':this.image,
'signup_type':this.signup_type

})
    
if(this.StudentDetails==null)
{
let alert=this.alertCtrl.create({
  title:'Please Fill Student Class',
  buttons: ['Ok']
})
alert.present()
}

else{

this.navCtrl.setRoot(TermsandconditionsPage,{signupdata:this.signupdata,
  user_relation:this.user_relation

})

    
}




  }
  parentsscreen()
  {
this.addparents=true
  }
  addsibilings(){
this.sibilings=true


  }

  addsiblingscount()
  {
 this.count++
 if(this.count==1)
 {
this.addrelation1=true
 }
 else if(this.count==2)
 {
this.addrelation2=true
 }


  }

  
}
