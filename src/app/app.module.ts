import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { PassingComponent } from './passing/passing.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contact' , component: ContactComponent},
  {path: 'contact/:id/:name', component: ContactComponent},

  {path:'about', component: AboutComponent,  
      children:[
    {path: 'bob', component: BobComponent},
    {path: 'susan', component: SusanComponent}
  ] },

  {path: 'home' , component: HomeComponent},
  {path: '**', component: WildcardComponent},

  {path:'passing', component: PassingComponent},
  {path: 'contact/:id/edit', component: PassingComponent}

];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes),
                  BrowserModule, 
                  FormsModule ],

  declarations: [ AppComponent, 
                  HelloComponent, 
                  HomeComponent, 
                  ContactComponent, 
                  AboutComponent, 
                  BobComponent,
                  SusanComponent ,
                  WildcardComponent,
                  PassingComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
