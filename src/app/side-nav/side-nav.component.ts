import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, MatListModule, MatNavList, MatBadgeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {}
