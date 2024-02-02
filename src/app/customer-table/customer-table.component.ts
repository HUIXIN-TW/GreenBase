import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Make sure to import MatSelectModule

import { MOCK_CUSTOMERS } from './mock-customers'; // Adjust the path as necessary

@Component({
  selector: 'app-customer-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
})
export class CustomerTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'check',
    'image',
    'name',
    'location',
    'orders',
    'spent',
  ];

  @Input() filterValue: string = ''; // Accept filter value from parent
  @Output() filterChange = new EventEmitter<string>(); // Emit event on filter change

  dataSource = new MatTableDataSource(MOCK_CUSTOMERS);


  @ViewChild(MatPaginator) paginator!: MatPaginator; // Use '!' for definite assignment assertion

  constructor() {}

  ngOnInit(): void {}

  isAllSelected() {
    return this.dataSource.data.every((customer) => customer.check); // Use 'dataSource.data'
  }

  someSelected() {
    return (
      this.dataSource.data.some((customer) => customer.check) && // Use 'dataSource.data'
      !this.isAllSelected()
    );
  }

  masterToggle() {
    const isAllSelected = this.isAllSelected();
    this.dataSource.data = this.dataSource.data.map((customer) => ({
      ...customer,
      check: !isAllSelected,
    })); // Update the data properly
  }

  checkboxChange(event: MatCheckboxChange, customer: any) {
    customer.check = event.checked;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    console.log('Filtering by:', filterValue);
  }

  applySearch(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Type assertion
    const searchValue = inputElement.value;
    this.dataSource.filter = searchValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Reset paginator to the first page
    }
  }
}
