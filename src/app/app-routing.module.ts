







import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SkillspageComponent } from './pages/skillspage/skillspage.component';
import { WorkspageComponent } from './pages/workspage/workspage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'about',
    component:AboutpageComponent
  },
  {
    path:'skills',
    component:SkillspageComponent
  },
  {
    path:'works',
    component:WorkspageComponent
  },
  {
    path:'contact',
    component:ContactpageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
