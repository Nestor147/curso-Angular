import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './page/main/main.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [],
  imports: [CommonModule,MainComponent,AddCharacterComponent,ListComponent],
  exports:[MainComponent,AddCharacterComponent,ListComponent]
})
export class DbzModule { }
