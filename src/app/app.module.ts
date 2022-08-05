import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfferseComponent } from './offerse/list-offerse.component';
import { DetailOfferseComponent } from './offerse/detail-offerse.component';
import { EditOfferseComponent } from './offerse/edit-offerse.component';
import { NewOfferseComponent } from './offerse/new-offerse.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListOfferseComponent,
    DetailOfferseComponent,
    EditOfferseComponent,
    NewOfferseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
