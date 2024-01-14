import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hereos/hero/hero.component';
import { ListComponent } from './hereos/list/list.component';
import { CounterComponent } from './counter/components/counter/counter.component';
import { CounterModule } from './counter/counter.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent,ListComponent,CounterModule],
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
