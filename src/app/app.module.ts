import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SkillspageComponent } from './pages/skillspage/skillspage.component';
import { WorkspageComponent } from './pages/workspage/workspage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import{ HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactsComponent,
    HeaderComponent,
    ContactpageComponent,
    SkillspageComponent,
    WorkspageComponent,
    AboutpageComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
