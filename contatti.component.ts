import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [TabViewModule, BadgeModule, AvatarModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {

}
