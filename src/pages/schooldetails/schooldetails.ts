import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{ChilddetailPage}from'../childdetail/childdetail'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import { FormControl, AbstractControl } from '@angular/forms'
import{countrylist}from'../../app/countrylist'
import{bigdata}from'../../app/models'

/**
 * Generated class for the SchooldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schooldetails',
  templateUrl: 'schooldetails.html',
})
export class SchooldetailsPage {
  Email_Id
  FirstName
  LastName
  PhoneNo
  Age
  student
  gender
  validation:FormGroup

  SchoolName
  SchoolAddress
  City
  State
  Country

  username
password
image

signup_type

items=[];

countryactive:boolean

item=[]
it=[]

searchModel

itemdata=[]
  constructor(public bdata:bigdata,public countrylist:countrylist,public alertCtrl:AlertController,public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
   
   
    this.countryactive=false
    // this.initializeItems();
    this.username=this.navParams.get('username')
    this.password=this.navParams.get('password')  
    this.Email_Id=this.navParams.get('Email_Id')
  this.FirstName=this.navParams.get('FirstName')
  this.LastName=this.navParams.get('LastName')
 this.PhoneNo=this.navParams.get('PhoneNo')
  this.Age=this.navParams.get('Age')
  this.student=this.navParams.get('student')
  this.gender=this.navParams.get('gender')
  this.image=this.navParams.get('image')
this.signup_type=this.navParams.get('signup_type')


  this.validation=formbuilder.group({
    SchoolName:['',Validators.compose([Validators.maxLength(30), Validators.required])],
    SchoolAddress:['',Validators.compose([Validators.maxLength(20) ])],
    City:['',Validators.compose([Validators.maxLength(20)])] ,
    State:['',Validators.compose([Validators.maxLength(10), Validators.required])]
    // Country:['',Validators.compose([Validators.maxLength(10), Validators.required])]
    })

    this.searchModel='Choose Country'
   
    for(var i=0;i<this.countrylist.countrylistitem.length;i++)
    {
  this.itemdata.push(this.countrylist.countrylistitem[i].name)
  // console.log(JSON.stringify(this.it))
    }
    localStorage['itemdata']=JSON.stringify(this.itemdata)
  }
  initializeItems() {
    
// alert(JSON.stringify(this.items))
  this.items=JSON.parse(localStorage['itemdata'])
    // this.items = [
    //   'Amsterdam',
    //   'Bogota',
    //   'Buenos Aires',
    //   'Cairo',
    //   'Dhaka',
    //   'Edinburgh',
    //   'Geneva',
    //   'Genoa',
    //   'Glasglow',
    //   'Hanoi',
    //   'Hong Kong',
    //   'Islamabad',
    //   'Istanbul',
    //   'Jakarta',
    //   'Kiel',
    //   'Kyoto',
    //   'Le Havre',
    //   'Lebanon',
    //   'Lhasa',
    //   'Lima',
    //   'London',
    //   'Los Angeles',
    //   'Madrid',
    //   'Manila',
    //   'New York',
    //   'Olympia',
    //   'Oslo',
    //   'Panama City',
    //   'Peking',
    //   'Philadelphia',
    //   'San Francisco',
    //   'Seoul',
    //   'Taipeh',
    //   'Tel Aviv',
    //   'Tokio',
    //   'Uelzen',
    //   'Washington'
    // ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.countryactive=true
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getcountry(item)
  {
    this.countryactive=false
  
    this.searchModel=item
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchooldetailsPage');
  }
  navigatetochilddetail(){

if(this.searchModel==null){
  let alert=this.alertCtrl.create({
    title:'Choose Country',

    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          // this.fileupload()
        }
      }]
   })
   alert.present()
}
else{

 this.bdata.country=this.searchModel
localStorage["country"]=this.searchModel
    this.navCtrl.push(ChilddetailPage,{
      'Email_Id':this.Email_Id,
      'FirstName':this.FirstName,
      'LastName':this.LastName,
      'PhoneNo':this.PhoneNo,
      'Age':this.Age,
      'student':this.student,
      'gender':this.gender,
      'SchoolName':this.validation.controls["SchoolName"].value,
      'SchoolAddress':this.validation.controls["SchoolAddress"].value,
      'City':this.validation.controls["City"].value,
      'State':this.validation.controls["State"].value,
      // 'Country':this.validation.controls["Country"].value,
      'Country':this.searchModel,
      'username':this.username,
      'password':this.password,
      'image':this.image,
      'signup_type':this.signup_type


    })
  }
  }
}
