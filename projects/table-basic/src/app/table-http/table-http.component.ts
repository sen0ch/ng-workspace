
import { Component, OnInit, Input  } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from './element';
import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table-http',
  styleUrls: ['table-http.component.css'],
  templateUrl: 'table-http.component.html',
})
  export class TableHttpComponent implements OnInit {
  dataSource = new ExampleDataSource(this.dataService);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input()
  items: Element[];
  constructor(public httpClient: HttpClient,
              public dataService: DataService, ) { }

  ngOnInit() {
  }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private dataService: DataService) {
  super(); }
  connect(): Observable<Element[]> {
  return this.dataService.getData(); }
  disconnect() {} }
