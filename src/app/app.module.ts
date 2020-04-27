import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PtyAuthModule, PtyAuthService } from '@pty/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PtyAuthModule.forRoot({ keycloak: { serverConfiguration: '/assets/keycloak/settings.dev.json' } })
  ],
  providers: [PtyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
