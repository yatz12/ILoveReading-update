import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import{ENV}from'../../app/env'
import{Observable}from'rxjs/Rx'
import { Type } from '@angular/compiler/src/output/output_ast';
/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityProvider {

  constructor(public http: Http) {
    console.log('Hello SecurityProvider Provider');
  //var list ='http://88.198.133.25/ILR_dev/admin/userapi/contentNatureList'
  }
  Sharetotal(i)
  {
    return this.http.post('https://88.198.133.25/ILR_dev/admin/homeapi/contentShareCounts',
    {
    user_id:localStorage['USERID'],
     token:localStorage['token'],
     content_id:i


    }).timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }
  ShareCount(i,type)
  {
    return this.http.post('https://88.198.133.25/ILR_dev/admin/homeapi/socialShareContents',
    {
    user_id:localStorage['USERID'],
     token:localStorage['token'],
     content_id:i,
     type:type


    }).timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }
  totalviews(i)
  {
    return this.http.post('https://88.198.133.25/ILR_dev/admin/homeapi/addView',
    {
    user_id:localStorage['USERID'],
     token:localStorage['token'],
     content_id:i


    }).timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }
  FAQ()
  {
    return this.http.post('https://88.198.133.25/ILR_dev/admin/services/faq',
    {
    user_id:localStorage['USERID'],
     token:localStorage['token']

    }).timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })

  }
  getContents()
  {
    return this.http.post('http://88.198.133.25/ILR_dev/admin/Homeapi/getContents',
    {
    user_id:localStorage['USERID'],
     token:localStorage['token']

    }).timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }
  dailypost(type)
  {
    return this.http.post('https://88.198.133.25/ILR_dev/admin/dailypostapi/getDailyposts',
    {
     type:type,
     user_id:localStorage['USERID'],
     token:localStorage['token']

    }
  )
  .timeout(ENV.timeout)
  .map((data)=>{
    console.log(''+data)
    return data.json()
  })
  }
  reciptnumber(ReciptNumber)
  {
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/officialReceipt',
    {
      receipt_number:ReciptNumber,
      email:localStorage['email'] 
    }
  )
  .timeout(ENV.timeout)
  .map((data)=>{
    console.log(''+data)
    return data.json()
  })


  }

  payment(
  product,
actualamount,
cardNumber,
month,
myYear,
CVV,
currency)
  {
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/payment',
    {
      product:product,
      amount:actualamount,
      card_no:cardNumber,
      exp_month:month,
      exp_year:myYear,
      cvc:CVV,
      currency:currency,
      user_id:localStorage['USERID']
    }
  )
  .timeout(ENV.timeout)
  .map((data)=>{
    console.log(''+data)
    return data.json()
  })
  }
  getmeamount(plan_type,subscript_type,magzine_name)
  {
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/calculateAmount',
    {
      plan_type:plan_type,
      subscript_type:subscript_type,
      magazine_name:magzine_name,
      country:localStorage["country"]
    }
  )
  .timeout(ENV.timeout)
  .map((data)=>{
    console.log(''+data)
    return data.json()
  })
  }


  forgetpassword(email)
  {
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/forgotPassword',
    {email:email}
  )
  .timeout(ENV.timeout)
  .map((data)=>{
    console.log(''+data)
    return data.json()
  })
  }
login(username,password)
{
  return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/login',
  {username:username,  password:password}
)
.timeout(ENV.timeout)
.map((data)=>{
  console.log(''+data)
  return data.json()
})

}


  signup(
   student,
    signup_type,
   username,
   password,
   FirstName,
   LastName,
   Email_Id,
  
   PhoneNo,
   Age,
    gender,
    user_image,
     SchoolName,
    SchoolAddress,
    City,
    State,
    country,
    StudentDetails,
   terms_checked,
    content_type_id,
    is_subscribed,
  subscription_id,
   user_content_nature,
   user_magazine,
user_relation,
user_text_type
  )
  {
    
// alert(user_image)
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/signup',{
      role:student,
      signup_type:signup_type,
      username:username,
      password:password,
      first_name:FirstName,
      last_name:LastName,
      email:Email_Id,
    
      phone:PhoneNo,
      age:Age,
      gender:gender,
      user_image:user_image,
      school_name:SchoolName,
      school_address:SchoolAddress,
      school_city:City,
      school_state:State,
      school_country:country,
      student_class:StudentDetails,
      terms_checked:terms_checked,
      content_type_id:content_type_id,
      is_subscribed:is_subscribed,
      subscription_id:subscription_id,
      user_content_nature:user_content_nature,
      user_magazine:user_magazine,
      user_relation:user_relation,
      user_text_type:user_text_type,
  text_type_id:0

  }
     )
    .timeout(ENV.timeout)
     .map((data)=>{
       console.log(''+data)
       return data.json()
     })
  }

  socialsignup(
    student,
    signup_type,
   FirstName,
   LastName,
   Email_Id,
  PhoneNo,
   Age,
    gender,
    user_image,
     SchoolName,
    SchoolAddress,
    City,
    State,
    country,
    StudentDetails,
   terms_checked,
    content_type_id,
    is_subscribed,
  subscription_id,
   user_content_nature,
   user_magazine,
user_relation,
user_text_type
  )
  {
    alert(user_image)
    return this.http.post('http://88.198.133.25/ILR_dev/admin/userapi/signup',{
      username:null,
      password:null,
      role:student,
      signup_type:signup_type,
      first_name:FirstName,
      last_name:LastName,
      email:Email_Id,
    
      phone:PhoneNo,
      age:Age,
      gender:gender,
      user_image:user_image,
      school_name:SchoolName,
      school_address:SchoolAddress,
      school_city:City,
      school_state:State,
      school_country:country,
      student_class:StudentDetails,
      terms_checked:terms_checked,
      content_type_id:content_type_id,
      is_subscribed:is_subscribed,
      subscription_id:subscription_id,
      user_content_nature:user_content_nature,
      user_magazine:user_magazine,
      user_relation:user_relation,
      user_text_type:user_text_type,
  text_type_id:0

  }
     )
    .timeout(ENV.timeout)
     .map((data)=>{
       console.log(''+data)
       return data.json()
     })
    


  }












  magzinelist()
  {
    return this.http.get(ENV.mainApi+'/magazineList')
    .timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }
  contentNatureList()
  {
    return this.http.get(ENV.mainApi+'/contentNatureList')
    .timeout(ENV.timeout)
    .map((data)=>{
      console.log(''+data)
      return data.json()
    })
  }

  contentNatureListSecond()
  {
  return this.http.get(ENV.mainApi+'/textTypeList')
 .timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
  }
 




}
