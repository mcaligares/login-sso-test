import { Component } from '@angular/core';
import { PtyAuthService } from '@pty/auth';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Authenticated: {{service.authenticated}}!
      </h1>
      <img width="300" src="assets/blabla.jpg">
    </div>
    
    <pty-auth-login
      (loading)="loading = $event"
      (stage)="stage = $event"
      (error)="onError($event)"
      (success)="onSuccess($event)">
    </pty-auth-login>

    <h2>Here are some links to help you start: </h2>
    <pre>{{serviceAsJSON}}<pre>
    <ul>
      <li>
        <button (click)="refresh()">Refresh</button>
      </li>
      <li>
      <button (click)="logout()">Logout</button>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'login-sso';

  loading = false;
  stage = 'credentials';

  constructor(private service: PtyAuthService) {
  }

  onError(error) {
    console.error(error);
  }

  onSuccess(success) {
    console.log('success', success);
  }

  get serviceAsJSON() {
    return JSON.stringify(this.service, null, '\t');
  }

  refresh() {
    this.service.refresh().then(console.log).catch(console.error);
  }

  logout() {
    this.service.logout().then(console.log).catch(console.error);
  }
}
