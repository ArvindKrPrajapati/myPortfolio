import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:string[]=["HTML","CSS","Bootstrap","JavaScript","Typescript","jQuery","PHP","MySql","Angular","Angular Material","Nodejs","MongoDb","Java","Android Development"];           
  others:string[]=["c","Pyhton","Machine Learning (Beginner)","Data Analysis (Beginner)","Data Structure","Design & Analysis of Algorithm"];
  constructor() { }

  ngOnInit(): void {
  }

}
