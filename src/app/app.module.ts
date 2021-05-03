import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XyzComponent } from './xyz/xyz.component';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    AaaComponent,
    BbbComponent,
    CccComponent,
    HeaderComponent,
    DialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
