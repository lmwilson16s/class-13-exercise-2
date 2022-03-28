import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'basic-event-binding-exercise';
 createLog(){
   return console.log("mission success")
 }
}
