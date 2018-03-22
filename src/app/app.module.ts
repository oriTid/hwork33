import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { BelowFooterComponent } from './below-footer/below-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MiddleComponent,
    FooterComponent,
    BelowFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
