import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeletebyId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[]=[
    {
      
      name: 'Goku',
      power: 10000,
    },
    {
      
      name: 'Krilin',
      power: 200,
    },
  
  ];
  onDeleteCharacter(id:string): void {
    this.onDeletebyId.emit(id);
  }
  





}
