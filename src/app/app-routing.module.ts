import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormComponent } from './modules/form/form.component';
import { ListComponent } from './modules/list/list.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';


const routes: Routes = [
  {
    path:"",
    component: DefaultComponent,
    children: [{
      path:"",
      component: DashboardComponent
    }, {
    path: 'posts',
    component: PostsComponent
    }, {
      path: 'users',
      component: UsersComponent
      },
       {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'form',
        component: FormComponent
      }
      
    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
