import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PtyAuthModule } from '@pty/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // PtyAuthModule.forRoot({ keycloak: { serverConfiguration: '/assets/keycloak/settings.dev.json' } })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
