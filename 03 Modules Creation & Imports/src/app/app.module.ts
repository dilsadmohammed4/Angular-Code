import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthUserModule } from './auth-user/auth-user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
