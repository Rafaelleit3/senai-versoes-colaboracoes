import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MenuComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
