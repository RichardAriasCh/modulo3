import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, RouterOutlet, RouterModule],
  templateUrl: './nuevousuario.component.html',
  styleUrl: './nuevousuario.component.css'
})
export class NuevousuarioComponent {
/////Post
}
