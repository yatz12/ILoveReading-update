import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, MenuController } from 'ionic-angular';
import{SecurityProvider}from'../../providers/security/security';
import{Observable}from'rxjs/Rx';
import{ bigdata}from'../../app/models'
declare var jquery :any;
declare var $:any;
/**
 * Generated class for the OurvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ourvoice',
  templateUrl: 'ourvoice.html',
})
export class OurvoicePage {
  public TittleList: Array<string>;
  public ArrVoiceList:Array<string>;
  VoiceStatus:number=0
  VoiceTittle
count=0
showbox:boolean
checkindex
VoiceListArr
arravoicelist
SlidePrevious
  constructor(public loadingCtrl:LoadingController,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,public bdata:bigdata) {
  this.showbox=true
    this.TittleList = JSON.parse(localStorage.getItem("todos"));
    if(!this.TittleList) {
        this.TittleList = [];
    }
    this.ArrVoiceList = JSON.parse(localStorage.getItem("todos"));
    if(!this.ArrVoiceList) {
        this.ArrVoiceList = [];
    }
    this.GetData();
    
  }

 

 removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}



  GetData()
  {
    let loading=this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/imgs/icons/READSFEED-GIF-LOGO.gif" style="height:100px!important">`,
      cssClass: 'transparent'
    })
    Observable.of(loading).flatMap(loading=>loading.present())
          .flatMap(() => this.security.ourVoice())
         .subscribe(data=>{
           loading.dismiss()
           console.log(data)
           this.bdata.temparrVoiceList=data.ourVoiceList
           for(let i=0;i<data.ourVoiceList.length;i++)
           {
             for(let j=0;j<this.TittleList.length;j++)
             {
               if(this.TittleList[j] ===data.ourVoiceList[i].title)
               {
               }
               else{
                this.TittleList.push(data.ourVoiceList[i].title);
               }
             }
             if(this.TittleList.length==0)
             {
              this.TittleList.push(data.ourVoiceList[i].title);
             }
           } 

          // console.log(this.TittleList);
           this.bdata.temparrayVoice=this.removeDuplicates(this.TittleList)
           //console.log(this.removeDuplicates(this.TittleList));
           this.VoiceStatus=1
           this.VoiceTittle=this.bdata.temparrayVoice
          
          //  for(var i=0;i<this.VoiceTittle.length;i++)
          //  {
          //   var x=document.getElementById("x_"+i)
          //   x.style.display="none"
          //   alert('hi')
          //  }



            


         
          })
  }



  CheckVoiceArr()
  {
    let VoiceList=this.bdata.temparrVoiceList
   
    let VoiceTittleList=this.bdata.temparrayVoice
    if(this.VoiceStatus==1)
    {
      for(let i=0;i<VoiceList.length;i++)
      {
        for(let j=0;j<VoiceTittleList.length;j++)
        {
          if(VoiceList[i].title ==VoiceTittleList[j])
          {
            // this.ArrVoiceList.push(VoiceList[i]);
            //this.VoiceListArr=VoiceList
            console.log(VoiceList)
            //console.log(VoiceList[i].title +"=="+VoiceTittleList[j])
          }
        }
      } 
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad OurvoicePage');
  }


  toggle(index,VoiceTittle){
    this.count++

  let VoiceList=this.bdata.temparrVoiceList
if(this.count%2!=0)
{
 
  this.SlidePrevious=index
  if(this.count==1)
  {
    this.ArrVoiceList=[]

for(let i=0;i<VoiceList.length;i++)
{
    if(VoiceList[i].title ==VoiceTittle)
    {
    }
    $(".x_"+i).slideToggle("slow");
} 
this.ToggleOpen(index,VoiceTittle,VoiceList)
}

else{
  this.ArrVoiceList=[]
  this.ToggleOpen(index,VoiceTittle,VoiceList)
}
}


else if(this.count%2==0)
{
  $(".x_"+this.SlidePrevious).slideToggle("slow");
  this.ArrVoiceList=[]
  this.ToggleOpen1(index,VoiceTittle,VoiceList)
  return;
}

else{
  $(".x_"+index).slideToggle("slow");
  this.ArrVoiceList=[]
  }


// for(var i=0;i<this.VoiceTittle.length;i++)
// {
//     if(this.count%2!=0)
// {
// if(index==i)
// {
  // this.showbox=false
  // this.checkindex=i
// } 
// }
// else
// {
//   this.showbox=true
//   $(".x_"+index).slideToggle("slow");
// }

}

ToggleOpen(index,VoiceTittle,VoiceList)
{
  for(let i=0;i<VoiceList.length;i++)
  {
    if(VoiceList[i].title ==VoiceTittle)
    {
      this.ArrVoiceList.push(VoiceList[i]);
    }
   
  } 
  this.arravoicelist=this.ArrVoiceList
  $(".x_"+index).slideToggle("slow");
}


ToggleOpen1(index,VoiceTittle,VoiceList)
{
  for(let i=0;i<VoiceList.length;i++)
  {
    if(VoiceList[i].title ==VoiceTittle)
    {
      this.ArrVoiceList.push(VoiceList[i]);
    }
  } 
  this.arravoicelist=this.ArrVoiceList
  $(".x_"+index).slideToggle("slow");
}





}
