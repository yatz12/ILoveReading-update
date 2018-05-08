import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{LoginPage}from'../pages/login/login'
import { MyApp } from './app.component';
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
import{ReactionsPage}from'../pages/reactions/reactions'
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
import { SecurityProvider } from '../providers/security/security';
import{HttpModule}from'@angular/http'
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import{bigdata}from'./models'
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import{TestdemoPage}from'../pages/testdemo/testdemo'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Stripe } from '@ionic-native/stripe';
import{countrylist}from'./countrylist'
import{DailypostmagzinecontentPage}from'../pages/dailypostmagzinecontent/dailypostmagzinecontent'
import{SocialSharing}from'@ionic-native/social-sharing'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserloginPage,
    SignupPage,
    DashboardPage,
    SchooldetailsPage,
    ChilddetailPage,
    EnterdetailscreenPage,
    TermsandconditionsPage,
    SubscribePage,
    SubscribeNowPage,
    PaymentgatewayPage,
    TrialPeriodPage,
    TrialPeriodExpiredPage,
    AsksubscribePage,
    ChoiceofperferencePage,
    Choiceperferncepage2Page,
    ImagazinespagePage,
    ImagzinedetailPage,
    ReactionsPage,
    RightnavigationmenuscreenPage,
    NatureofcontentpagePage,
    NotificationsPage,
    SearchPage,
    MyprofilepPage,
    RefferalPage,
    FaqPage,
    ContestPage,
    SurveyPage,
    LoyalityPage,
    ParentDataPage,
    TeacherprofilepPage,
    TestdemoPage,
    DailypostmagzinecontentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    RecaptchaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserloginPage,
    SignupPage,
    DashboardPage,
    SchooldetailsPage,
    ChilddetailPage,
    EnterdetailscreenPage,
    TermsandconditionsPage,
    SubscribePage,
    SubscribeNowPage,
    PaymentgatewayPage,
    TrialPeriodPage,
    TrialPeriodExpiredPage,
    AsksubscribePage,
    ChoiceofperferencePage,
    Choiceperferncepage2Page,
    ImagazinespagePage,
    ImagzinedetailPage,
    ReactionsPage,
    RightnavigationmenuscreenPage,
    NatureofcontentpagePage,
    NotificationsPage,
    SearchPage,
    MyprofilepPage,
    RefferalPage,
    FaqPage,
    ContestPage,
    SurveyPage,
    LoyalityPage,
    ParentDataPage,
    TeacherprofilepPage,
    TestdemoPage,
    DailypostmagzinecontentPage
    
  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SecurityProvider,
    Camera,
    FileTransfer,
    FileTransferObject,
    File,
    Facebook,
    GooglePlus,
    bigdata,
    InAppBrowser,
    Stripe,
    countrylist
  ]
})
export class AppModule {}
