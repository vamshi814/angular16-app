import { Component } from '@angular/core';

@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrls: ['./directives1.component.css']
})
export class Directives1Component {

  isAvailable: boolean = true;//stock

  isUrgent: boolean = true;//reminder
  
  isLoggedIn: boolean = true;//login/logout

  actors:string[]=['Bruce Lee','Jackie Chan', 'Jet Li', 'Yuen Wo Ping'];//array of actors
  // actors: string[] = ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise', 'Will Smith'];
}
