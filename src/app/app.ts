import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counterdisplay } from "./component/counterdisplay/counterdisplay";
import { Counterbutton } from "./component/counterbutton/counterbutton";
import { Customercounter } from "./component/customercounter/customercounter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counterdisplay, Counterbutton, Customercounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrx');
}
