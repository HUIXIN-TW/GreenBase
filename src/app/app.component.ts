import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    TopMenuComponent,
    SideNavComponent,
    CustomerTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Greenbase';
}
