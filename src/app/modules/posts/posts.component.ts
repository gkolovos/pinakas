import { Component, OnInit , ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



interface IPost {
  id: number;
  name: string;
  posting : string;
  email: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  dataSource : MatTableDataSource<IPost>; ///
 ///
  posts: IPost[] = [];
  columns: string[] = [ 'id','name' ,'posting' ,'email' ];
 

  @ViewChild (MatSort, { static: true })
  sort!: MatSort;
  
  // @ViewChild (MatPaginator, {static: true}) 
  // paginator !: MatPaginator;

 // @ViewChild (MatPaginator, {static: true}) 
  // paginator !: MatPaginator;

  // @ViewChild (MatPaginator, {static: true}) 
  // paginator !: MatPaginator;
  // @ViewChild (MatPaginator, {static: true}) 
  // paginator !: MatPaginator;

  @ViewChild(MatPaginator, { static: true })
  paginator! : MatPaginator; 


  constructor() {
    this.posts = [
      {
      id: 1,
      name : 'george kol',
      posting : 'bla bla bla bla',
      email : 'gk@gmail.com'
    },
    {
      id: 2,
      name : 'Leo messi',
      posting : 'mesi10 is the best',
      email : 'mesi@gmail.com'
    },
    {
      id: 3,
      name : 'Leo messi',
      posting : 'hey mesi10 again',
      email : 'mesi@gmail.com'
    },
    {
      id: 4,
      name : 'Cr7',
      posting : 'mesi10 thats what you think',
      email : 'cr7@gmail.com'
    },
    {
      id: 5,
      name : 'Pele',
      posting : 'Ronaldinho was good too',
      email : 'theFirst@gmail.com'
    },
    {
      id: 6,
      name : 'Leo messi',
      posting : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque feugiat dolor at molestie. Praesent vehicula finibus risus, et maximus magna accumsan non. Mauris in egestas tortor.',
      email : 'mesi@gmail.com'
    }, 
     {id: 17,
      name: 'user',
      posting: "user941 sdvsva;fmsdv'va dvrq",
      email: 'Li@user.com'},
    {
      id: 14, 
      name: 'unknown ', 
      posting: "user0122 was here", 
      email: 'unknowBe@fg.gr'},
    {
      id: 15, 
      name: 'user123', 
      posting: "user811dgfdsodhhsssssssssss", 
      email: 'Buser123@attr.com'},
    {
      id: 16, 
      name: 'arya', 
      posting: "user0107 likes this post", 
      email: 'C@user.com'},
    {
      id: 7, 
      name: 'Max Nitrogen ', 
      posting: "user0067 likes this post", 
      email: 'N@user.com'},
    {
      id: 8, 
      name: 'Oxygenbraker', 
      posting: "user9994 likes this post", 
      email: 'O@user.com'},
    {
      id: 9, 
      name: 'James Bond', 
      posting: "oo7 likes this post", 
      email: 'F@user.com'},
    {
      id: 10, 
      name: 'NeonLOver', 
      posting: "user1797 likes this post", 
      email: 'Ne@user.com'},
    {
      id: 11, 
      name: 'SodiumMan', 
      posting: "user9897 likes this post", 
      email: 'Na@user.com'},
    {
      id: 12, 
      name: 'MagnesiumGuy', 
      posting: "user305 likes this post", 
      email: 'Mg@user.com'},
    {
      id: 13, 
      name: 'Jac Sparrow', 
      posting: "tricky pirate likes this post", 
      email: 'Al@user.com'},
    ];

    this.dataSource = new MatTableDataSource(this.posts);


   }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

