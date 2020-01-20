import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BikeComponent } from './components/bike/bike.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const appRoutes: Routes = [
  {path: '', component:BikeComponent},
  {path: 'contacts', component:ContactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
