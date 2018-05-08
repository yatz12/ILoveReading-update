import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{LoginPage}from'../pages/login/login'
import { HomePage } from '../pages/home/home';
import{UserloginPage}from'../pages/userlogin/userlogin'
import{SignupPage}from'../pages/signup/signup'
import{DashboardPage}from'../pages/dashboard/dashboard'
import{SchooldetailsPage}from'../pages/schooldetails/schooldetails'
import{ChilddetailPage}from'../pages/childdetail/childdetail'
import{EnterdetailscreenPage}from'../pages/enterdetailscreen/enterdetailscreen'
import{TermsandconditionsPage}from'../pages/termsandconditions/termsandconditions'
import{SubscribePage}from'../pages/subscribe/subscribe'
import{SubscribeNowPage}from'../pages/subscribe-now/subscribe-now'
import{PaymentgatewayPage}from'../pages/paymentgateway/paymentgateway'
import{TrialPeriodPage}from'../pages/trial-period/trial-period'
import{TrialPeriodExpiredPage}from'../pages/trial-period-expired/trial-period-expired'
import{AsksubscribePage}from'../pages/asksubscribe/asksubscribe'
import{ChoiceofperferencePage}from'../pages/choiceofperference/choiceofperference'
import{Choiceperferncepage2Page}from'../pages/choiceperferncepage2/choiceperferncepage2'
import{ImagazinespagePage}from'../pages/imagazinespage/imagazinespage'
import{ImagzinedetailPage}from'../pages/imagzinedetail/imagzinedetail'
import{RightnavigationmenuscreenPage}from'../pages/rightnavigationmenuscreen/rightnavigationmenuscreen'
import{NatureofcontentpagePage}from'../pages/natureofcontentpage/natureofcontentpage'
import{NotificationsPage}from'../pages/notifications/notifications'
import{SearchPage}from'../pages/search/search'
import{MyprofilepPage}from'../pages/myprofilep/myprofilep'
import{RefferalPage}from'../pages/refferal/refferal'
import{FaqPage}from'../pages/faq/faq'
import{ContestPage}from'../pages/contest/contest'
import{SurveyPage}from'../pages/survey/survey'
import{LoyalityPage}from'../pages/loyality/loyality'
import{ParentDataPage}from'../pages/parent-data/parent-data'
import{TeacherprofilepPage}from'../pages/teacherprofilep/teacherprofilep'
import{TestdemoPage}from'../pages/testdemo/testdemo'
import{DailypostmagzinecontentPage}from'../pages/dailypostmagzinecontent/dailypostmagzinecontent'
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)nav:Nav
  rootPage:any =HomePage ;
  pages: Array<{title: string, component: any,logo:string}>;
  pages1: Array<{title: string, component: any,logo:string,color:string,type:string}>;
  constructor(public events: Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'My Profile', component:MyprofilepPage, logo:'assets/imgs/man-user.png'},
      {title:'FAQ',component:FaqPage,logo:'assets/imgs/question-mark.png'},
      
      {title:'Survey',component:SurveyPage,logo:'assets/imgs/bar-graph-with-a-cross.png'},
      { title: 'Contest', component:ContestPage, logo:'assets/imgs/trophy.png'},
      {title:'Refferal Programme',component:TermsandconditionsPage,logo:'assets/imgs/amonestation.png'},
      { title: 'About', component:DashboardPage, logo:'assets/imgs/care-about-planet.png'},
      { title: 'Report Problem', component:DashboardPage, logo:'assets/imgs/newspaper.png'},
      {title:'TermsAndConditions',component:TermsandconditionsPage,logo:'assets/imgs/lock.png'}
   
    
    ];

    this.pages1 = [
      {type:'0',color:'#f53d3d', title: 'GROUPS', component:DailypostmagzinecontentPage, logo:'assets/imgs/icons/group.png'},
      {type:'0',color:'#222',title:'EVENTS',component:DailypostmagzinecontentPage,logo:'assets/imgs/icons/calendar-icon.png'},
      
      {type:'0',color:'#6B407F',title:'NATURE OF CONTENT',component:DailypostmagzinecontentPage,logo:'assets/imgs/icons/design.png'},
      {type:'0',color:'#69BAAE', title: 'TEXT TYPE', component:DailypostmagzinecontentPage, logo:'assets/imgs/icons/documents-button.png'},
      {type:'3',color:'#69BAAE', title: 'QUOTE OF THE DAY', component:DailypostmagzinecontentPage, logo:'assets/imgs/icons/tree-of-dots-foliage.png'},
     
      {type:'1',color:'#6B407F',title:'WORD OF THE DAY',component:DailypostmagzinecontentPage,logo:'assets/imgs/icons/browser.png'},
      {type:'2',color:'#8599A7', title: 'IDOM OF THE DAY', component:DailypostmagzinecontentPage, logo:'assets/imgs/icons/i.png'},
      {type:'0',color:'#9B92AE', title: 'SAVE FAVOURITE', component:DailypostmagzinecontentPage, logo:'assets/imgs/icons/favorite-heart-button.png'},
      {type:'0',color:'#9B583A',title:'OUR VOICE',component:DailypostmagzinecontentPage,logo:'assets/imgs/icons/megaphone.png'},
      {type:'0',color:'#CC212D',title:'POINTS EARNED',component:DailypostmagzinecontentPage,logo:'assets/imgs/icons/gift.png'}
   
    
    ];

    

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

    
  
  }
  openPage1(page,type) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // alert(type)
    localStorage['type']=type
  
  }
}

