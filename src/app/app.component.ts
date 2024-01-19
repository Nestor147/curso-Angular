import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DbzModule } from './dbz/dbz.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'My firts app';
  public counter:number=10

  increseBy(value:number):void{
    this.counter+=value
  }
  reset():void{
    this.counter=10;
  }
}
