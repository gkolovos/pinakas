import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



export interface PeriodicElement {
  name: string;
  id: number;
  username: string;
  email: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'gkol', username: "gkol", email: 'gkol@upatras.gr'},
  {id: 2, name: 'RG', username: "RG", email: 'bestdoc@gmail'},
  {id: 3, name: 'user', username: "user941", email: 'Li@user.com'},
  {id: 4, name: 'unknown', username: "user0122", email: 'unknowBe@fg.gr'},
  {id: 5, name: 'user123', username: "user811", email: 'Buser123@attr.com'},
  {id: 6, name: 'arya', username: "user0107", email: 'C@user.com'},
  {id: 7, name: 'Max Nitrogen', username: "user0067", email: 'N@user.com'},
  {id: 8, name: 'Oxygenbraker', username: "user9994", email: 'O@user.com'},
  {id: 9, name: 'James Bond', username: "oo7", email: 'F@user.com'},
  {id: 10, name: 'NeonLOver', username: "user1797", email: 'Ne@user.com'},
  {id: 11, name: 'SodiumMan', username: "user9897", email: 'Na@user.com'},
  {id: 12, name: 'MagnesiumGuy', username: "user305", email: 'Mg@user.com'},
  {id: 13, name: 'Jac Sparrow', username: "tricky pirate", email: 'Al@user.com'},
  {id: 14, name: 'Luna dreammer', username: "user0855", email: 'Si@user.com'},
  {id: 15, name: 'Phosphorus47', username: "user9738", email: 'P@user.com'},
  {id: 16, name: 'JOhnSulfur', username: "user065", email: 'S@user.com'},
  {id: 17, name: 'Dep Chlorine', username: "user453", email: 'Cl@user.com'},
  {id: 18, name: 'Argon John', username: "948", email: 'Ar@user.com'},
  {id: 19, name: 'Mr Potassium', username:"user0983", email: 'K@user.com'},
  {id: 20, name: 'Jose', username: "user078", email: 'Ca@user.com'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// bigChart = [];

displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


@Input() data = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // this.bigChart = this.dashboardService.bigChart();
    // this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;

  }

}


