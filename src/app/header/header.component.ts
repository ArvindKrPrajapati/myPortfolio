







import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Input() whiteHead:boolean;

showMenuVar:boolean=false;
state:any;
  constructor() { }
showMenu():void{
    this.showMenuVar=!this.showMenuVar;
    if(this.showMenuVar){
    this.state=this.whiteHead;
      this.whiteHead=false;
    }else{
      this.whiteHead=this.state;
    }
  }
  ngOnInit(): void {
  }

}
