import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public customHero?:{id:number,name:string};
  // public listHeroes: string[]=['Ironman','Spiderman','holk','thor','loki']
  public listHeroes: {id:number, name:string}[] = [
    { id: 1, name: 'Kristiyan' },
    { id: 2, name: 'Emiliyan' },
    { id: 3, name: 'Denitsa' },
  ];
  removeLastHeroes():void {
    this.customHero=this.listHeroes.pop();

  }

}
