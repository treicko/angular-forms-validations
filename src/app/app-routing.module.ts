import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: 'app/Issue/issue-list/issue-list.module#IssueListModule', pathMatch: 'full'
  },
  {
    path: 'template', loadChildren: 'app/Issue/issue-template-driven/issue-template.module#IssueTemplateModule'
  },
  {
    path: 'reactive', loadChildren: 'app/Issue/issue-reactive-form/issue-reactive.module#IssueReactiveModule'
  },
  {
    path: 'dynamic', loadChildren: 'app/Issue/issue-dynamic-form/dynamic.module#IssueDynamicModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
