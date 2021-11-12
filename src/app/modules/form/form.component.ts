// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent  {

//   userForm:FormGroup;
//   listData:any;


//   constructor(private fb:FormBuilder  ){

//       this.listData = [];

//     this.userForm = this.fb.group({
//       name : ['', Validators.required],
//       username : ['', Validators.required],
//       email: ['', Validators.required],
//     })
//   }

//   addItem(){
//     this.listData.push(this.userForm.value);
//     this.userForm.reset();
//   }
//   reset(){
//     this.userForm.reset();
//   }

//   removeItems(element:any){
//     this.listData.forEach((value:any,dex:any) => {
//       if(value == element){
//         this.listData.splice(dex,1)
//       }

//     });


//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  {

  userForm:FormGroup;
  listData:any;

  displayedColumns: string[] = [ 'name', 'username', 'email'];

  constructor(private fb:FormBuilder  ){

      this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }
}




 

 

