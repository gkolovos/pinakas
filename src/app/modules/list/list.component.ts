import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  typesOfShoes: string[] = ['ID', ' name', 'username', 'address', 'workplace', 'date/of/birth'];

  constructor() { }

  ngOnInit(): void {
  }

}
