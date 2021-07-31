import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
   symbol:string="</>";
   educate:string[]=[
                     "https://greenhat-sr.netlify.app",      
                      "https://github.com/ArvindKrPrajapati/Educate-project-angular"          
                    ];
   showoff:string[]=[
                     "https://showoff.ml",
                     "https://github.com/ArvindKrPrajapati/showoff"
                    ]
  constructor() { }

  ngOnInit(): void {
  }

}
