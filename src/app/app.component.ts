import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatCheckboxModule,
    MatPaginatorModule,
    TopMenuComponent,
    SideNavComponent,
    CustomerTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Note: It should be styleUrls, not styleUrl
})
export class AppComponent {
  title = 'Greenbase';
}
