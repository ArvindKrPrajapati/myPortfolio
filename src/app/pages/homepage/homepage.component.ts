import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
whiteHead:boolean=false;
profession:string="";
jobIndex:number=0;
jobs:string[]=["web developer","software engineer","App developer"];

letterIndex:number=0;
  constructor() { }

  ngOnInit(): void {
    this.typing();
  }
handleScroll(e:any){
   let top=(e.target as Element).scrollTop;
   if(top>50){
     this.whiteHead=true;
   }else{
     this.whiteHead=false;
   }
  }
  
  typing(){
    let length=this.jobs[this.jobIndex].length;
    this.profession= this.profession+ this.jobs[this.jobIndex][this.letterIndex];         
    setTimeout(()=>{
      if(this.letterIndex<length-1){
        this.letterIndex++;
      }else{
        this.profession="";
        this.letterIndex=0;
        if(this.jobIndex===this.jobs.length-1){
          this.jobIndex=0;
        }else{
          this.jobIndex++;
        }
      }
      this.typing();
    },200);
  }
}
