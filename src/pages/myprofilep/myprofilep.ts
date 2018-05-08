import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{bigdata}from'../../app/models'

/**
 * Generated class for the MyprofilepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofilep',
  templateUrl: 'myprofilep.html',
})
export class MyprofilepPage {
userdata
  constructor(public bdata:bigdata,public navCtrl: NavController, public navParams: NavParams) {
  // alert(JSON.stringify(this.bdata.userdata))
  // alert('hi')
this.userdata=this.bdata.userdata  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilepPage');
  }

}
