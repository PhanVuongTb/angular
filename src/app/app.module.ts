import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeloComponent } from './hello/hello.component';
import { HelloComponent } from './components/hello/hello.component';
import { Hello2Component } from './components/hello2/hello2.component';
import { ProductsComponent } from './Page/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    HeloComponent,
    HelloComponent,
    Hello2Component,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
