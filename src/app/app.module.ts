import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeloComponent } from './hello/hello.component';
import { HelloComponent } from './components/hello/hello.component';
import { Hello2Component } from './components/hello2/hello2.component';
import { ProductsComponent } from './Page/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeloComponent,
    HelloComponent,
    Hello2Component,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
