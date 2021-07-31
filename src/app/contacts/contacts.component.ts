






import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  facebook:string="https://www.facebook.com/profile.php?id=100027106157907";
  insta:string="https://www.instagram.com/prajapati_arvind2001/";     
  twitter:string="https://twitter.com/ArvindK64730650";    
  linkedin:string="https://www.linkedin.com/in/arvind-kumar-2873431ba";     
  
  name:string="";
  num:string="";
  message:string="";
  error:string="";
  data:any=[];
  isDisabled:boolean=false;
  success:string="";
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  
  save(){
    if(this.name && this.num && this.message){
      this.error="";
      this.success="";
      this.isDisabled=true;
      const url="/api/saveMessage.php";
      this._http.post(url,{name:this.name,num:this.num, message:this.message}).subscribe((data:any)=>{
        this.data=data;
        if(this.data.status){
          this.name="";
          this.num="";
          this.message="";
           this.success="message sent";
        }else{
          this.error="message not sent , something went wrong";
        }
        this.isDisabled=false;
      });
    }else{
      this.success="";
      this.error="each field is required";
    }
  }
}
