import { Component } from '@angular/core';
import { MainComponent } from '../../../dbz/page/main/main.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter:number=0;

  increaseAndDecreaseNumber(value:number):void{
    this.counter+=value
  }

  resetNUmber():void{
    this.counter=0
  }

}
