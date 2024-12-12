import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  welcome = 'Welcome to E-Shopping';
  slogan = 'Your one-stop destination for all your shopping needs!';
}
